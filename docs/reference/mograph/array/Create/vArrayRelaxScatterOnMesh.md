---
sidebar_position: 48
title: vArrayRelaxScatterOnMesh
description: "Scatter points on the surface of an OBJ mesh, then move each point to spread them out over several relaxation passes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRelaxScatterOnMesh

Scatter points on the surface of an OBJ mesh, then move each point to spread them out over several relaxation passes.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRelaxScatterOnMesh.png" alt="vArrayRelaxScatterOnMesh node" />
</div>

vArrayRelaxScatterOnMesh reads an OBJ mesh from a file, a URL or text, scatters Point Count points on its triangles and improves their spacing in Relax Iterations passes. Candidates Per Point and Relax Strength control each pass.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the OBJ mesh comes from, File, URL or Text. Default File. |
| Filename | Text | `—` | Path of the OBJ file. Shown when Input Source is File. |
| URL | Text | `—` | Address of an OBJ file. Hidden until Input Source is URL. |
| Input | Text | `—` | OBJ text. Hidden until Input Source is Text. |
| Scale File Units By | Float | `1` | Multiplier applied to the vertex coordinates. Default 1. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point Count | Integer | `1000` | Number of points. Minimum 2, default 1000. |
| Random Seed | Integer | `0` | Seed of the random generator. Minimum 0, default 0. |
| Relax Iterations | Integer | `5` | Number of relaxation passes over all points. Minimum 0, default 5. |
| Candidates Per Point | Integer | `2` | Number of new positions tried for each point in each pass. Minimum 1, default 2. |
| Relax Strength | Float | `1` | Probability that a better candidate replaces the point. Range 0 to 1, default 1. |
| Surface Offset | Float | `0` | Distance each point is moved along the triangle normal. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

The node reads the vertex and face lines of the OBJ text, multiplies the vertices by Scale File Units By, and splits faces with more than three vertices into triangles. Point Count points are placed at random positions with a probability proportional to triangle area, and moved along the triangle normal by Surface Offset. If the mesh has no usable triangle, the node outputs nothing.

Each relaxation pass visits every point in order. For a point, the node creates Candidates Per Point new random positions on the mesh. A candidate replaces the point if its distance to the nearest other point is larger than the distance of the point it would replace. With Relax Strength below 1, a replacement that passes this test is carried out only with that probability.

With the defaults (1000 points, 5 iterations, 2 candidates, Relax Strength 1) the node outputs 1000 points. Relax Iterations of 0 gives the plain random scatter. The nearest-neighbor check compares a point with all others, so the node gets slower with higher point counts and more iterations.

The random generator is seeded with Random Seed, so the same Seed, mesh and settings give the same points. The positions are always on the mesh surface, because every candidate is a fresh random position on a triangle. Point Count has a minimum of 2.

</details>

## Example Connections

<Tabs>
<TabItem value="scatter-and-relax-on-a-loaded-mesh-then-draw" label="Scatter and relax on a loaded mesh, then draw" default>

```
vArrayRelaxScatterOnMesh.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
vArrayRelaxScatterOnMesh.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayScatterOnMesh">vArrayScatterOnMesh</a>
  <a className="node-chip" href="./vArrayPoissonOnMesh">vArrayPoissonOnMesh</a>
  <a className="node-chip" href="./vArrayMaskScatterOnMesh">vArrayMaskScatterOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
