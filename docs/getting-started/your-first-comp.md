---
sidebar_position: 3
title: Your First Comp
description: "Build the standard Vonk Ultra render pipeline in about ten minutes: points on a circle, projected to screen space, rendered over a background."
---

# Your First Comp

This walkthrough builds the single most-repeated pipeline in the whole reference: a generator makes points, a projection node converts them from 3D world space to 2D screen space, and a render node draws a shape at each one. It takes about ten minutes and needs four nodes.

<div className="node-screenshot">
  <svg viewBox="0 0 880 250" role="img" aria-label="Node graph: Background feeds the render node's image input, vArrayPointsOnCircle feeds vArrayCameraProjection, and vArrayCameraProjection feeds vArrayShapeRender">
    <defs>
      <marker id="vonk-chain-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
      </marker>
    </defs>
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="10" y="32" width="200" height="54" rx="6" />
      <rect x="340" y="32" width="200" height="54" rx="6" />
      <rect x="670" y="32" width="200" height="54" rx="6" />
      <rect x="670" y="180" width="200" height="54" rx="6" />
    </g>
    <g fill="currentColor" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#vonk-chain-arrow)">
      <line x1="210" y1="59" x2="336" y2="59" />
      <line x1="540" y1="59" x2="666" y2="59" />
      <line x1="770" y1="180" x2="770" y2="90" />
    </g>
    <g fill="currentColor" fontSize="12" style={{fontFamily: 'var(--ifm-font-family-monospace)'}} textAnchor="middle">
      <text x="110" y="63">vArrayPointsOnCircle</text>
      <text x="440" y="63">vArrayCameraProjection</text>
      <text x="770" y="63">vArrayShapeRender</text>
      <text x="770" y="211">Background</text>
    </g>
    <g fill="currentColor" fontSize="10" style={{fontFamily: 'var(--ifm-font-family-monospace)'}}>
      <text x="273" y="51" textAnchor="middle">Output → ArrayA</text>
      <text x="603" y="51" textAnchor="middle">Output → ArrayPoint</text>
      <text x="780" y="140">Output → Input</text>
    </g>
  </svg>
</div>

:::note On the images
The screenshots on this page are the node reference images, so you can match the Inspector controls to the words. A screenshot of the finished comp is still to be added.
:::

## What you'll end up with

A `Background` node, and on it a ring of small pink hexagons. The defaults are literal: `vArrayShapeRender` draws six-sided dots in magenta until you tell it otherwise. Once that renders, every parameter in the chain is yours to play with — and the three Vonk nodes accept almost any generator you swap in at the front.

## Before you start

- Vonk Ultra installed — see [Install](./install) if not.
- A comp open in Fusion Studio or DaVinci Resolve, with the Nodes panel visible.
- No Lua knowledge required. Everything here is node wiring and Inspector controls.

## Step 1 — Background

Add Fusion's native **Background** node. This is the canvas: `vArrayShapeRender` composites the shapes it draws over an image input, so the background is what they land on.

## Step 2 — The three Vonk nodes

Add these the fast way: press **Shift + Spacebar** to open the Select Tool dialog and start typing the name. That is what the `v` prefix is for — type `vArray` and the whole family lists in one go.

- `vArrayPointsOnCircle`
- `vArrayCameraProjection`
- `vArrayShapeRender`

Node reference: [vArrayPointsOnCircle](../reference/mograph/array/Create/vArrayPointsOnCircle) · [vArrayCameraProjection](../reference/mograph/array/Modify/vArrayCameraProjection) · [vArrayShapeRender](../reference/mograph/array/ShapeRender/vArrayShapeRender). They also live under **Tools > Kartaverse > Vonk Ultra** — see [Vonk Usage](../tutorials/vonk-usage).

## Step 3 — Wire them up

Three connections, exactly as in the diagram:

```
vArrayPointsOnCircle.Output     -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output   -> vArrayShapeRender.ArrayPoint
Background.Output               -> vArrayShapeRender.Input
```

| From | To |
|---|---|
| `vArrayPointsOnCircle` **Output** | `vArrayCameraProjection` **Array A** |
| `vArrayCameraProjection` **Output** | `vArrayShapeRender` **Array Point** |
| `Background` **Output** | `vArrayShapeRender` **Input** |

If **Array A** isn't visible on the projection node, turn on its **Show Input** checkbox — that's the switch that reveals the input port (on by default for this node).

The comp renders at this point. With one dot, because of the next step.

## Step 4 — Make it a ring

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsOnCircle.png" alt="The vArrayPointsOnCircle node in Fusion's Inspector" />
</div>

Select `vArrayPointsOnCircle` and raise **Round Segments**. This is the number of points distributed evenly around the full 360°, and its default is `1` — so the single dot you're looking at is correct behaviour, not a broken pipeline. Try **12**.

While you're on that node:

- **Radius** (`0.1` by default) is in normalised coordinates relative to frame width. Raise it to spread the ring outwards; try `0.25`.
- **Point Offset** shifts which point counts as the start of the ring. Useful later, when you stack two rings and want them out of phase.

Now select `vArrayCameraProjection`. **Z Offset** (default `1.0`) is the primary framing control — the camera's distance from the point cloud. Increase it to zoom out, decrease it to zoom in, until the ring sits where you want it.

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCameraProjection.png" alt="The vArrayCameraProjection node in Fusion's Inspector" />
</div>

## Step 5 — Make it yours

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayShapeRender.png" alt="The vArrayShapeRender node in Fusion's Inspector" />
</div>

All of these are controls on `vArrayShapeRender`:

- **Dot Sides** — `6` gives the hexagons. `3` is a triangle, `4` a square, `32` or more reads as a circle.
- **Dot Radius** and **Dot Color** — size and RGBA colour of the dots.
- **Show Lines** — turns on the line layer, which connects the points in order. Set **Line Width** and **Line Color** to taste.
- **Show Index** — draws the array index at every point. Worth knowing: when a pipeline looks wrong, this tells you how the points are actually ordered.
- **Render Outline Dots** — adds a stroke around each dot; **Dot Line Width** sets how thick.

## Step 6 — Make it move

None of this needs expressions. Three easy animations from parameters already on screen:

- Keyframe **Rotate Amount** on `vArrayPointsOnCircle` to spin the ring in place.
- Keyframe **Z Rotation** on `vArrayCameraProjection` to roll the projected output around the screen centre — a different look, because it rotates the camera rather than the geometry.
- For a push-in, animate **Z Offset** on the camera.

## Step 7 — Swap the front of the chain

The generator is the only part of this pipeline that's specific to the example. Each of these wires into `vArrayCameraProjection` **Array A** the same way:

- `vArrayPointsOnArc` — a partial sweep instead of a full ring.
- `vArrayPointsOnGrid` — a regular grid.
- `vArrayPointsOnSphere` — a 3D sphere of points. Animate the camera's **Y Rotation** to orbit it.
- `vArrayPhyllotaxis` — the sunflower spiral.
- `vArrayFromOBJ` — points from a mesh. This one has a second output, **Edges**: connect it to `vArrayShapeRender`'s **Array Edge** input and enable **Use Edge Data** to draw the mesh's real edges through the line layer, rather than joining sequential points.

## Where to go next

- [Core Concepts](./core-concepts) — why typing `vArray` in the picker lists what it does, and how the Mograph families relate.
- [Camera Projection Pipelines](../guides/camera-projection-pipelines) — the guide that takes this chain further: orbiting the camera, OBJ meshes, text, and all four render inputs.
- [Reference: Mograph / Array](/docs/reference/mograph/array) — all 192 array nodes, grouped by function.
- [Video Tutorials](../tutorials/video-tutorials) — worked examples, including the vJSON family in motion.
