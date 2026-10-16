---
sidebar_position: 45
title: vArrayPoissonOnMesh
description: "Scatter points on the surface of an OBJ mesh while keeping a minimum distance between them."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPoissonOnMesh

Scatter points on the surface of an OBJ mesh while keeping a minimum distance between them.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPoissonOnMesh.png" alt="vArrayPoissonOnMesh node" />
</div>

vArrayPoissonOnMesh reads an OBJ mesh from a file, a URL or text and outputs up to Point Count points on its triangles. Minimum Distance and Rejection Attempts control how closely the points may sit together.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the OBJ mesh comes from, File, URL or Text. Default File. |
| Filename | Text | `—` | Path of the OBJ file. Shown when Input Source is File. |
| URL | Text | `—` | Address of an OBJ file. Hidden until Input Source is URL. |
| Input | Text | `—` | OBJ text. Hidden until Input Source is Text. |
| Scale File Units By | Float | `1` | Multiplier applied to the vertex coordinates. Default 1. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point Count | Integer | `1000` | Largest number of points to create. Minimum 2, default 1000. |
| Random Seed | Integer | `0` | Seed of the random generator. Minimum 0, default 0. |
| Minimum Distance | Float | `0.05` | Smallest distance allowed between two points. 0 turns the check off. Minimum 0, default 0.05. |
| Rejection Attempts | Integer | `30` | Number of candidates tried for each point before the node stops. Minimum 1, default 30. |
| Surface Offset | Float | `0` | Distance each point is moved along the triangle normal. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

The node reads the vertex and face lines of the OBJ text, multiplies the vertices by Scale File Units By, and splits faces with more than three vertices into triangles. Negative face indices are supported. Triangles with almost no area are ignored. If the mesh has no usable triangle, the node outputs nothing.

For each point, the node picks a random triangle with a probability proportional to its area and a random position inside it, then moves the position along the triangle normal by Surface Offset. The candidate is kept if it is at least Minimum Distance away, in 3D, from every point already kept. A Minimum Distance of 0 turns this check off.

If a candidate is rejected, the node tries again, up to Rejection Attempts times for each point. If all attempts fail for one point, the node stops and outputs the points found so far, so the result can hold fewer points than Point Count. A larger Minimum Distance, a higher Point Count or a smaller mesh makes this more likely.

The random generator is seeded with Random Seed, so the same Seed, mesh and settings give the same points. Point Count has a minimum of 2. The check compares each candidate with all earlier points, so large point counts get slower.

</details>

## Example Connections

<Tabs>
<TabItem value="scatter-on-a-loaded-mesh-and-draw" label="Scatter on a loaded mesh and draw" default>

```
vArrayPoissonOnMesh.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
vArrayPoissonOnMesh.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayScatterOnMesh">vArrayScatterOnMesh</a>
  <a className="node-chip" href="./vArrayRelaxScatterOnMesh">vArrayRelaxScatterOnMesh</a>
  <a className="node-chip" href="./vArrayMaskScatterOnMesh">vArrayMaskScatterOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
