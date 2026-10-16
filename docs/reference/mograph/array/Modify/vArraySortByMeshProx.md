---
sidebar_position: 61
title: vArraySortByMeshProx
description: "Sorts points by their distance to the closest mesh vertex, and can pull them toward it."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySortByMeshProx

Sorts points by their distance to the closest mesh vertex, and can pull them toward it.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySortByMeshProx.png" alt="vArraySortByMeshProx node" />
</div>

vArraySortByMeshProx takes an array of XYZ points and a mesh, and outputs the points sorted by their distance to the mesh. Sort Order picks near first or far first.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Proximity To | Dropdown | `Surface` | Surface (default), Vertex or Face Centroid. Surface and Vertex measure to the closest vertex. Face Centroid measures to the closest patch point. |
| Sort Order | Dropdown | `Ascending` | Ascending (default) puts the nearest points first. Descending puts the farthest first. |
| Blend To Target | Float | `0` | Moves each point toward its reference by this share. Range 0 to 1, default 0. |
| Target Offset | Float | `0` | Offset of each written point along the normal, or along the line from the reference. Slider -5 to 5, default 0. |
| Points | DATATYPE | `—` | Points to sort. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mesh Points | DATATYPE | `—` | Mesh vertices that distances are measured to. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the reference on the mesh: the closest Mesh Points vertex (Surface and Vertex) or the closest patch point (Face Centroid). The points are sorted by the distance to it, nearest first for Ascending (default) or farthest first for Descending. Equal distances keep their input order.

The written points can also move: Blend To Target (0 to 1, default 0) mixes each point toward its reference, and Target Offset (default 0) adds an offset along the normal or along the line from the reference. Only the vertex list of the mesh is used. With no mesh data, the points are output in their original order.

</details>

## Example Connections

<Tabs>
<TabItem value="sort-a-grid-by-distance-to-a-loaded-mesh-and-draw" label="Sort a grid by distance to a loaded mesh and draw" default>

```
vArrayPointsOnGrid.Output -> vArraySortByMeshProx.ArrayPoints
vArrayFromOBJ.Points -> vArraySortByMeshProx.MeshPoints
vArraySortByMeshProx.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="sort-scattered-points" label="Sort scattered points">

```
vArrayRandom.Output -> vArraySortByMeshProx.ArrayPoints
vArrayFromOBJ.Points -> vArraySortByMeshProx.MeshPoints
vArraySortByMeshProx.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArraySortByDistance">vArraySortByDistance</a>
  <a className="node-chip" href="./vArrayWeightByMeshProx">vArrayWeightByMeshProx</a>
  <a className="node-chip" href="./vArrayMaskByMesh">vArrayMaskByMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
