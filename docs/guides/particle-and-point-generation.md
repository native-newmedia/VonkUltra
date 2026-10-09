---
sidebar_position: 3
title: Particle and Point Generation
description: "Where points come from in Mograph, and how to make them worth rendering: layout families, scatter and noise, masking, ordering, trails and accumulation."
---

# Particle and Point Generation

The Create group is the biggest in the whole array family — 58 nodes, against 69 in Modify, 20 in ShapeRender and single figures elsewhere. That tells you where the interesting decisions are: almost everything you make starts by choosing what shape the points arrive in.

This guide covers the generation half of a Mograph pipeline — where points come from, and how to make them worth looking at. The drawing half is [Camera Projection Pipelines](./camera-projection-pipelines).

:::note Control names
Inspector labels are quoted here exactly as the fuses spell them, so they match what you'll see on the node — search the Select Tool dialog by *node* name, not by control.
:::

## 1. Pick a layout family

| Family | Nodes | Reach for it when |
|---|---|---|
| **Rings, arcs, radials** | `vArrayPointsOnCircle`, `vArrayPointsOnArc`, `vArrayCreateRadialSymmetry`, `vArrayCreateGridPolar` | You want rotational order — mandalas, dials, radial data |
| **Grids and lattices** | `vArrayPointsOnGrid`, `vArrayPointsHexagonGrid`, `vArrayPointsOnRectangle` | Even coverage, matrix layouts, dot patterns |
| **3D shells and volumes** | `vArrayPointsOnSphere`, `vArrayPointsOnCube`, `vArrayCreateTorus`, `vArrayCreateGeodesicSphere` | Something for a moving camera to reveal |
| **Curves, spirals, paths** | `vArrayCreateLine`, `vArrayCreateHelix`, `vArrayGenerateSpirals`, `vArrayLogarithmicSpiral`, `vArrayLissajouseSpline`, `vArrayCreateRoseCurve`, `vArrayCreateLemniscate`, `vArrayCreateHilbertCurve`, `vArrayCreateCubicBezier`, `vArrayCreateParametricCurve` | A shape that is really a line — sweeping, trailing, flowing |
| **Distributions and scatter** | `vArrayPhyllotaxis`, `vArrayCreateVoronoi`, `vArrayCreateScatterOnMeshSurface`, `vArrayCreatePoissonOnMeshSurface`, `vArrayCreateRelaxedScatterOnMeshSurface`, `vArrayPointParticles` | Organic coverage without an obvious grid |
| **Ranges, random, noise** | `vArrayCreateMinMax`, `vArrayCreateRandom`, `vArrayCreateNoise`, `vArrayFromAudio` | The values that drive *other* generators, or variation you control by seed |
| **From existing things** | `vArrayFromOBJ`, `vArrayFromXYZ`, `vArrayCreateFromImage`, `vArrayCreateTextFont`, `vArrayCreateFromPolyline` | You already have geometry, a file, an image, or a string |

Two habits worth forming before you go further:

- **Counts are usually on the generator.** `vArrayPointsOnGrid` has **Number X** and **Number Y** (both default `1`), `vArrayPhyllotaxis` has **Count**, the particle generator has **Particles Count**. But not all of them: `vArrayPointsOnArc` has only **Smoothness** and an array input, so you feed it a *range* instead. That's what `vArrayCreateMinMax` is for — **Range for X/Y/Z** (each defaulting to `-1 / 1`), an **Array length**, a **Seed**, and a **Pack To** control for XY or XYZ output. Its own reference calls it the essential seed node for arc, grid and scatter generators.
- **A `1` default is not a bug.** Most generators ship with a single point or a single row until you raise their count. If your comp renders one dot, check the generator's count control first.

## 2. Break the regularity

Perfect layouts look mechanical. Each of these disturbs points in a different way, and they're worth understanding as distinct tools rather than interchangeable noise:

| Node | What it does | Key controls |
|---|---|---|
| `vArrayModifyAttributeRandomize` | Deterministic per-point offsets, driven by a seed | **Distribution** (Uniform), **Apply To** (XYZ Coordinates), **Min Offset** / **Max Offset** (`-0.1` / `0.1`), **Seed**, **Randomize X/Y/Z** |
| `vArrayPointsJitter` | The quick version: jitter each axis | **Jitter X/Y/Z**, **Seed**, **Uniform Jitter** |
| `vArrayDisplaceValues` | Noise-driven displacement with a spherical falloff — bulges, ripples, shockwaves | **Noise Scale**, **Noise Rate**, **Amplitude**, **FallOff Sphere X/Y/Z**, **FallOff Radius**, **FallOff Tightness**, **Invert Falloff** |
| `vArrayRippleDisplacer` | Animated wave displacement, with per-array time offsets so several arrays ripple out of phase | **Displacement Mode** (Radial from centre), **Amplitude**, **Frequency**, **Wave Type**, **Animation Speed**, **Auto Animate** |
| `vArrayCreateNoise` / `vArrayPerlin3Noise` | Noise as a *value source* rather than a modifier | — |

Because they're seed-driven, `vArrayModifyAttributeRandomize` and `vArrayPointsJitter` are reproducible: same seed, same scatter, which is what you want when client notes arrive.

### Attractors

`vArrayPointAttractor` treats a point (or axis) in the comp as a magnet for the array:

- **Strength** is signed — positive attracts, negative repels.
- **Radius** and **Falloff Power** shape the influence.
- **Spring Return**, **Spring Bounce** and **Damping** control how points settle.
- **Time Step** controls how much simulation happens per frame.

There are two versions, and the difference matters: `vArrayPointAttractorSpring` runs a **persistent spring-damper simulation** where velocity carries across frames, so points can overshoot and jiggle before settling. Its defaults are visibly different for that reason — **Spring Bounce** `0.9` against `0.01`, **Damping** `0.9` against `0.98`. Reach for the persistent one when you want motion with momentum; use the plain attractor when you want a stable, almost immediate shape.

## 3. Select, mask, decimate

- **`vArrayModifyApplyMask`** — blends a **Base** array with a **Modified** one per point using a `0`–`1` **Mask**. **Amount**, **Blend Tightness**, **Invert Mask** and **Trim Zeros** finish the job. This is how you get "scattered here, ordered there" without splitting the comp.
- **`vArrayCountMask`** — counts the non-zero elements of a mask, for sanity-checking what survived.
- **`vArrayLogicDeleteByMask`** — keeps or removes masked elements (**Mode**, **Invert Mask**) when you want them gone rather than blended.
- **`vArraySlicer`** — trims the start and end of an array (**Start**, **Stop**, **Offset Range**, **Continuous**). Useful for taking a long generated curve and using a moving window of it.
- **`vArrayReducePoints`** — decimation, with three methods: **Grid-Based**, **Random Sampling** and **Curvature-Based (SLOW)**. **Grid Size**, **Target Count** and **Neighborhood Size** configure them. Render cost scales with point count, so this and `vArraySlicer` are your two levers when a pipeline gets heavy.
- **`vArrayModifyFuseClosePoints`** — welds points closer than a distance threshold. Worth running after scatter operations, which happily pile points on top of each other.

## 4. Order and connect

Order decides what the line layer draws, because lines join points *in sequence*. Three nodes own that:

- **`vArraySortByDistance`** — re-orders elements by spatial proximity (**Smallest Distance**). This is what turns a scatter into a nearest-neighbour network, a travelling path, or a proximity-driven effect.
- **`vArrayPointsConnect`** — connects points in an array, defining connectivity explicitly.
- **`vArrayGridConnect`** — builds edges for a *grid*: row, column, diagonal, zigzag and border patterns. Its **Number X** and **Number Y** need to match the grid you generated, **Direction** picks the axis, **Stride** skips lines, and **Zigzag: Reverse Start** alternates direction. The output is meant for the render node's **Edge Data** input.

That last pairing is the one to remember if you want grids rather than point clouds: `vArrayGridConnect` into **Array Edge** with **Use Edge Data** enabled gives you a proper lattice instead of a scribble (see the render hub in [Camera Projection Pipelines](./camera-projection-pipelines)).

## 5. Combining arrays

- **`vArrayAppend`** — appends one array onto another. **Number** grows the input list as you wire it up, the same pattern the switch nodes use.
- **`vArrayAppendGroup`** — the same, for group data (the membership arrays that text and font generators produce).
- **`vArrayMergeTrim`** — joins several arrays into a single table (**Array1** … *i*) while trimming as it goes: **Trim Start**, **Trim End**, **Every Nth**, **Reverse**.
- **`vArrayModifyRepeat`** — repeats an array with per-copy transform offsets (**Copies**, **Offset X/Y/Z**, **Rotate Step Z**, **Scale Step**). The cheapest way to build a stack, a fan or a ring of copies.

## 6. Time: particles, trails, accumulation

The **Temporal** group is small — seven nodes — and it's what makes a point set behave like a system over time:

- **`vArrayPointParticles`** — a full particle generator rather than a layout: 54 controls, headed by **Particles Count** (`24`), **Emission Type** (defaulting to Fibonacci Sphere), **Size X/Y/Z**, **Center X/Y/Z**, **Global Scale**, and **Time** / **Start Time** / **Restart System** for controlling the simulation.
- **`vArrayTemporalTrailFromPoints`** — concatenates point arrays across frames, turning one moving point set into a trail. **History Length** (`12`), **Frame Step** and **Oldest First** shape it.
- **`vArrayAccumulator`** — temporally concatenates array elements across **Start Frame** to **End Frame** with a **Step**, offsetting and rotating each copy (**Offset X/Y/Z**, **Rotate X/Y/Z**). This is the node behind repeating-geometry looks — rings of rings, spirals of grids.
- **`vArrayTemporalSmooth`**, **`vArrayTemporalDelta`**, **`vArrayTemporalTimeShiftArray`**, **`vArrayTemporalSolverStep`** — smoothing, per-frame change, time-shifted copies, and a solver step for iterated simulation.

Trails only *read* as trails if something draws them: leave **Show Lines** on at the render node, which is where a trail becomes a streak rather than a cloud of dots.

## 7. Putting it together

A modest chain that uses most of the above, in the order they should run:

```
vArrayPointsOnGrid.Output -> vArrayModifyAttributeRandomize.Input
vArrayModifyAttributeRandomize.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

From there, each section above adds a layer without changing the shape of the pipeline:

- **More organic?** Insert `vArrayPointsJitter` or `vArrayDisplaceValues` after the randomize.
- **Lattice instead of dots?** Add `vArrayGridConnect` into **Array Edge** and enable **Use Edge Data**.
- **Nearest-neighbour look?** Insert `vArraySortByDistance` before the projection and turn **Show Lines** on.
- **Too heavy?** Insert `vArrayReducePoints` before the projection.
- **Moving?** Swap the grid for `vArrayPointsOnSphere` (add a camera orbit) or `vArrayPointParticles`, then add `vArrayTemporalTrailFromPoints`.

## Reference

- **Generators** — [vArrayPointsOnGrid](../reference/mograph/array/Create/vArrayPointsOnGrid) · [vArrayPhyllotaxis](../reference/mograph/array/Create/vArrayPhyllotaxis) · [vArrayPointsHexagonGrid](../reference/mograph/array/Create/vArrayPointsHexagonGrid) · [vArrayCreateMinMax](../reference/mograph/array/Create/vArrayCreateMinMax) · [vArrayPointParticles](../reference/mograph/array/Create/vArrayPointParticles) · [vArrayFromOBJ](../reference/mograph/array/Create/vArrayFromOBJ)
- **Modifiers** — [vArrayModifyAttributeRandomize](../reference/mograph/array/Modify/vArrayModifyAttributeRandomize) · [vArrayPointsJitter](../reference/mograph/array/Animate/vArrayPointsJitter) · [vArrayDisplaceValues](../reference/mograph/array/Modify/vArrayDisplaceValues) · [vArrayRippleDisplacer](../reference/mograph/array/Modify/vArrayRippleDisplacer) · [vArrayPointAttractor](../reference/mograph/array/Modify/vArrayPointAttractor) · [vArrayPointAttractorSpring](../reference/mograph/array/Modify/vArrayPointAttractorSpring)
- **Select and order** — [vArrayModifyApplyMask](../reference/mograph/array/Modify/vArrayModifyApplyMask) · [vArrayLogicDeleteByMask](../reference/mograph/array/Logic/vArrayLogicDeleteByMask) · [vArraySlicer](../reference/mograph/array/Utility/vArraySlicer) · [vArrayReducePoints](../reference/mograph/array/Utility/vArrayReducePoints) · [vArraySortByDistance](../reference/mograph/array/Modify/vArraySortByDistance) · [vArrayGridConnect](../reference/mograph/array/Modify/vArrayGridConnect)
- **Combine and time** — [vArrayAppend](../reference/mograph/array/Utility/vArrayAppend) · [vArrayMergeTrim](../reference/mograph/array/Utility/vArrayMergeTrim) · [vArrayModifyRepeat](../reference/mograph/array/Modify/vArrayModifyRepeat) · [vArrayTemporalTrailFromPoints](../reference/mograph/array/Temporal/vArrayTemporalTrailFromPoints) · [vArrayAccumulator](../reference/mograph/array/Temporal/vArrayAccumulator)
- [Guides overview](./overview) — what else is in this section
