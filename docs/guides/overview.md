---
sidebar_position: 1
title: Guides Overview
description: "What the Guides section is for, and the connection patterns the first guides are built from."
---

# Guides

Guides are task-first. They start from something you want to make — an orbit through a point cloud, a text layout that reflows — rather than from a node you want to understand. If you want to know what a single node does, the [Reference](/docs/reference) is the right place; guides are about wiring several of them into a result.

They are written from the connection patterns that recur across the node reference, because those are the recipes people ask for repeatedly.

## The patterns the first guides are built from

### Camera projection pipelines

The base of this pattern is the chain [Your First Comp](../getting-started/your-first-comp) builds: generator → `vArrayCameraProjection` → `vArrayShapeRender`, over a `Background`.

**Published:** [Camera Projection Pipelines](./camera-projection-pipelines) covers the whole thing — animating the virtual camera, 3D point clouds, OBJ meshes and their edge data, text through the pipeline, optional displacement, and all four render inputs.

These are the other things that guide covers:

- **Animating the camera instead of the geometry.** `Y Rotation` orbits a 3D point cloud, `Z Offset` pushes in, and `Field of view` flattens the perspective towards orthographic or exaggerates the foreshortening.
- **Feeding it from a mesh.** `vArrayFromOBJ` outputs both **Points** and **Edges**, so one node can drive the dot layer *and* the line layer — connect the edges to `Array Edge` and enable **Use Edge Data** to draw the mesh's real topology rather than joining sequential points.
- **Mixing the three render layers.** Dots, lines and custom shapes (`vArrayCustom2DShapes`, `vArrayCustom3DShapes`) all draw from the same projected array, and each layer has its own colour and stroke controls.

### Particle and point generation

**Published:** [Particle and Point Generation](./particle-and-point-generation) covers the generation half of the pipeline — choosing a layout family, breaking up its regularity with seeds and noise, masking and decimating, ordering points for the line layer, combining arrays, and using the Temporal group for particle systems, trails and accumulation.

The guide is built around these three layers:

- **Generators** — `vArrayPointsOnCircle`, `vArrayPointsOnArc`, `vArrayPointsOnGrid`, `vArrayPointsOnSphere`, `vArrayPhyllotaxis`, `vArrayFromOBJ`.
- **Displacement** — `vArrayPointsJitter` adds noise to points; `vArrayDisplaceValues` applies noise-driven displacement with spherical falloff for organic scatter and turbulence.
- **Ordering** — order matters more than you would expect, because the line layer joins points in sequence. `vArraySortByDistance` re-orders by spatial proximity, `vArraySlicer` trims the start and end of an array, and `vArrayPointsConnect` defines connections explicitly.

### Text and font workflows

Text is the largest Core type — 88 `vText*` nodes — and the Mograph family adds a font path that turns text into geometry:

- **Text as a value** — `vTextCreate` is the standard starting point for new Text content, and from there the type prefixes take over: text in, text out, with `vJSON*` and `vArray*` nodes available when the data wants to become structured instead of flat.
- **Text as geometry** — `vJSONFont` and `vArrayJSONFont` generate an array-based font, which means text can be rendered through the same camera-projection pipeline as any other point array.

## Related sections

- [Your First Comp](../getting-started/your-first-comp) — the base pipeline, built step by step. Start here if you haven't wired Vonk nodes together yet.
- [Video Tutorials](../tutorials/video-tutorials) — the existing YouTube set, including independent walkthroughs of the vJSON family.
- [Vonk Usage](../tutorials/vonk-usage) — where the nodes live in Fusion's menus, and how to drive a normal Fusion parameter from a Vonk node.

## Status

Two guides are published — [Camera Projection Pipelines](./camera-projection-pipelines) and [Particle and Point Generation](./particle-and-point-generation). Text and font workflows is next. In the meantime the [Reference](/docs/reference) is complete on its own: every node page carries its parameters, connection examples and related nodes.
