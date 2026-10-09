---
sidebar_position: 2
title: Camera Projection Pipelines
description: "The standard Vonk render chain, pushed further: animating the virtual camera, feeding it 3D clouds and OBJ meshes, and driving all four render layers."
---

# Camera Projection Pipelines

Every Vonk render pipeline has the same middle and the same end. Whatever makes the points — a procedural generator, a font, an imported mesh — they all pass through `vArrayCameraProjection` to become screen-space coordinates, and then into `vArrayShapeRender` to be drawn.

Learn that core once and the rest of the family is just swapping the ends:

<div className="node-screenshot">
  <svg viewBox="0 0 1100 270" role="img" aria-label="Pipeline diagram: any generator feeds optional modifiers, then vArrayCameraProjection, then vArrayShapeRender, with Background feeding the render node's image input">
    <defs>
      <marker id="vonk-guide-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
      </marker>
    </defs>
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="10" y="46" width="210" height="118" rx="6" />
      <rect x="320" y="76" width="170" height="58" rx="6" />
      <rect x="590" y="76" width="180" height="58" rx="6" />
      <rect x="870" y="46" width="210" height="118" rx="6" />
      <rect x="870" y="196" width="210" height="54" rx="6" />
    </g>
    <g fill="currentColor" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#vonk-guide-arrow)">
      <line x1="220" y1="105" x2="316" y2="105" />
      <line x1="490" y1="105" x2="586" y2="105" />
      <line x1="770" y1="105" x2="866" y2="105" />
      <line x1="975" y1="196" x2="975" y2="168" />
    </g>
    <text x="115" y="72" fill="currentColor" fontSize="12" textAnchor="middle">any generator</text>
    <g fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}}>
      <text x="24" y="94">vArrayPointsOnCircle</text>
      <text x="24" y="112">vArrayPointsOnSphere</text>
      <text x="24" y="130">vArrayCreateTextFont</text>
      <text x="24" y="148">vArrayFromOBJ</text>
    </g>
    <text x="405" y="100" fill="currentColor" fontSize="11" textAnchor="middle">modifiers (optional)</text>
    <text x="405" y="118" fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}} textAnchor="middle">vArrayDisplaceValues</text>
    <text x="680" y="110" fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}} textAnchor="middle">vArrayCameraProjection</text>
    <text x="975" y="72" fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}} textAnchor="middle">vArrayShapeRender</text>
    <g fill="currentColor" fontSize="9" style={{fontFamily: 'var(--ifm-font-family-monospace)'}}>
      <text x="884" y="94">ArrayPoint</text>
      <text x="884" y="110">ArrayEdge</text>
      <text x="884" y="126">ArrayShape</text>
      <text x="884" y="142">ArrayGroups</text>
    </g>
    <text x="975" y="228" fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}} textAnchor="middle">Background</text>
    <g fill="currentColor" fontSize="9" style={{fontFamily: 'var(--ifm-font-family-monospace)'}}>
      <text x="270" y="97" textAnchor="middle">Array A</text>
      <text x="540" y="97" textAnchor="middle">Array Point</text>
      <text x="985" y="185">Input</text>
    </g>
  </svg>
</div>

If you haven't built the basic version of this yet, start with [Your First Comp](../getting-started/your-first-comp) — this guide assumes you have that three-node chain running and want to push it further.

## 1. Animate the camera, not the geometry

This is the single most useful habit in the whole pipeline. `vArrayCameraProjection` is a full virtual camera, and every one of its transform values is a standard animatable Fusion control — so you can move through a static point cloud instead of animating the points themselves. The results feel different, and usually better: the geometry stays coherent while the viewpoint does the work.

| What you want | What to animate |
|---|---|
| **Orbit** around a 3D cloud | `Y Rotation` |
| **Push in / pull out** | `Z Offset` — the primary framing control; default `1.0` |
| **Roll** the whole output | `Z Rotation` |
| **Pan** without changing distance | `X Offset`, `Y Offset` |
| **Tilt** through a cloud | `X Rotation` |

Two more controls worth knowing:

- **Field of view** (default `90`). Lower values flatten the perspective towards orthographic — good for technical or diagrammatic looks. Higher values exaggerate foreshortening, which is what makes depth *read* on a 3D cloud. If your 3D scatter looks flat, this is usually why.
- **Lock X/Y** and **X Scale**. Locked (the default) scales the projection uniformly. Unlock it to stretch the output on one axis — useful for anamorphic or deliberately skewed layouts.

For a flat generator like `vArrayPointsOnCircle` there's no real depth, so leave the rotations alone and just set `Z Offset` to frame the ring. Depth is where the camera starts earning its place.

## 2. 3D point clouds

`vArrayPointsOnSphere` is the natural partner for a moving camera — it's the first generator where orbiting actually reveals something:

- **Amount of points** (`100`) — how many points to distribute.
- **Sphere size** (`0.3`) — the radius of the cloud.
- **Distribution** — switches between evenly spread (Fibonacci) and clustered placement.
- **Trim Top** and **Trim Bottom** — at their defaults (`-1` and `1`) you get the whole sphere; tightening them cuts it back to a hemisphere or a band, which is often a cleaner mograph element than a full ball.
- **Random Distance** and **Random seed** — push points in and out along their radius for a shell with thickness, reseeding for a different scatter.

Then keyframe the camera's `Y Rotation` from `0` to `360` and you have an orbit. Add a little `Z Offset` movement on top and it stops looking mechanical.

## 3. Real geometry: meshes from an OBJ

`vArrayFromOBJ` imports vertex positions from a Wavefront `.OBJ` — hero geometry out of Blender, Cinema 4D or Maya, dropped into a Vonk pipeline.

- **Input Source** picks where the mesh comes from: `0` reads a file from disk via **Filename**, `1` fetches a remote **URL**, and `2` takes raw OBJ text from another node's **Input** — which is how you feed procedurally generated geometry in.
- **Scale File Units By** normalises the geometry into Fusion's coordinate space. Exporting applications disagree about units — if your mesh arrives microscopic or enormous, this is the control that fixes it.

The node has two outputs, and the second one is easy to miss:

```
vArrayFromOBJ.Points -> vArrayCameraProjection.ArrayA
vArrayFromOBJ.Edges  -> vArrayShapeRender.ArrayEdge
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

**Edges** carries the mesh's actual topology. Connect it to the render node's **Array Edge** input, then enable **Use Edge Data** — and the line layer draws the mesh's real edges instead of joining sequential points, which would otherwise scribble diagonally across your model. That one checkbox is the difference between a wireframe and a mess.

Note that this gives you the mesh's *vertices*, not its surface — a coarse mesh stays coarse. Add `vArrayDisplaceValues` (below) if you want more points or more life in them.

## 4. Text through the same pipeline

`vArrayCreateTextFont` turns styled text into a point array, which means text renders through exactly the same camera-projection chain as everything else:

- **Styled Text** is the string; **Size**, **Character Spacing** and **Justification** lay it out; **Letter Case** and the offset/rotation/scale controls position it in 3D.
- It also outputs **ScriptVal_Groups** — the group membership that says which points belong to which character.

That second output is what makes text behave:

```
vArrayCreateTextFont.Output -> vArrayCameraProjection.ArrayA
vArrayCreateTextFont.ScriptVal_Groups -> vArrayShapeRender.ArrayGroups
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

With **ArrayGroups** connected, enabling **Connect Text Groups** on the render node draws lines *within* each group rather than between consecutive points across the whole array — so letters don't get joined to each other by a stray line.

For text that follows a path rather than sitting on a baseline, there's a dedicated terminal node, `vArrayShapeRenderTextPath` — it renders text onto an array of XY points, with **Path Width** and **Show Path** controlling the guide the characters sit on.

## 5. Modifiers go between the generator and the camera

Everything in the pipeline up to the projection is world-space geometry, so this is where you disturb it:

- **`vArrayDisplaceValues`** — noise-driven displacement with a spherical falloff. **Noise Scale** and **Noise Rate** set the shape and speed of the noise, **Amplitude** how far points travel, and **FallOff Sphere X/Y/Z**, **FallOff Radius** and **FallOff Tightness** localise the effect — a bulge, a ripple, a shockwave. **Invert Falloff** flips it from pushing out to pulling in.
- **`vArrayPointsJitter`** — the simpler tool: **Jitter X/Y/Z** offsets, a **Seed**, and **Uniform Jitter** to keep the direction consistent. This is the fastest way to stop a perfect grid or ring from looking machine-made.

Order matters: displace *before* the projection, because the projection is what collapses your 3D geometry into 2D. Push displacement downstream of it and you're animating screen-space coordinates instead of world-space ones, which is a different (and usually less useful) effect.

## 6. The render hub: four inputs, five layers

`vArrayShapeRender` is where the pipeline converges, and it has more inputs than the basic chain uses:

| Input | Comes from | What it does |
|---|---|---|
| **Array Point** | `vArrayCameraProjection` | The positions. Always required. |
| **Array Edge** | `vArrayFromOBJ`, `vArrayPointsConnect` | Explicit point-to-point connections, used when **Use Edge Data** is on |
| **Array Shape** | `vArrayCustom2DShapes`, `vArrayCustom3DShapes` | A polygon to draw at each point instead of a dot |
| **Array Groups** | `vArrayCreateTextFont` and other font/path generators | Group membership, so lines connect within groups |
| **JSON Custom Color** | `vArrayColor` | Per-point colour, overriding the layer colour |

The five layers — **Show Dots**, **Show Lines**, **Show Custom**, **Show Index** and the outline toggles — are independent and can all be on at once. A few things that aren't obvious from the parameter names:

- **Line Width**, **Dot Radius** and the shape outline widths are in *normalised* units, relative to composition size. A width that looks right at 1920×1080 will look thin at 4K.
- **Line Type** switches between Solid, Dashed, Dotted and Dash-Dot, and **Join Type** controls how corners meet (Miter, Bevel, Round) — the cheapest way to change the character of a wireframe.
- **Show Index** draws the array index at each point. It's a debug switch: invaluable while building, and it should be off before the final render. All layer toggles are animatable, so you can also drive them from keyframes for reveal sequences.
- Performance scales with point count and enabled layers, and **Lines** and **Custom Shapes** are the expensive ones. Disable them while designing a large array.
- For per-point colour, connect a `vArrayColor` node to **JSON Custom Color** — its **Color By** control can drive colour from the index, a gradient or a pattern, so a ring isn't limited to one flat colour.

## When it doesn't render

Almost every "it's broken" in this pipeline is one of five things:

| Symptom | Cause |
|---|---|
| Frame is black | Nothing on the render node's **Input**. Connect a `Background` node — the shapes composite *over* an image. |
| A single dot | The generator's count control is at its default. On `vArrayPointsOnCircle` that's **Round Segments** = `1`. |
| Index labels render but the dots don't | **Show Dots** is off, **Dot Radius** is too small to see, or the camera's `Z Offset` has pushed the output out of frame. |
| Nothing connects to the projection node | Its **Array A** port is hidden. Enable **Show Input**. |
| The layout looks flat | There's no depth in the points, or `Field of view` is so low the projection has gone effectively orthographic. |

And when points are landing in an order you didn't expect: turn on **Show Index**. It answers "how is this array actually ordered?" faster than any other tool in the set — and point order is what decides which points the line layer joins.

## Reference

- [vArrayCameraProjection](../reference/mograph/array/Modify/vArrayCameraProjection)
- [vArrayShapeRender](../reference/mograph/array/ShapeRender/vArrayShapeRender)
- [vArrayFromOBJ](../reference/mograph/array/Create/vArrayFromOBJ) · [vArrayPointsOnSphere](../reference/mograph/array/Create/vArrayPointsOnSphere) · [vArrayCreateTextFont](../reference/mograph/array/Create/vArrayCreateTextFont)
- [vArrayDisplaceValues](../reference/mograph/array/Modify/vArrayDisplaceValues) · [vArrayPointsJitter](../reference/mograph/array/Animate/vArrayPointsJitter)
- [vArrayCustom2DShapes](../reference/mograph/array/Shapes/vArrayCustom2DShapes) · [vArrayColor](../reference/mograph/array/ShapeRender/vArrayColor)
- [Guides overview](./overview) — what else is coming in this section
