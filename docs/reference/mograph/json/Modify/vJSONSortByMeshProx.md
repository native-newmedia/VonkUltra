---
sidebar_position: 61
title: vJSONSortByMeshProx
description: "Sorts points by their distance to the closest mesh vertex, and can pull them toward it."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSortByMeshProx

Sorts points by their distance to the closest mesh vertex, and can pull them toward it.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSortByMeshProx.png" alt="vJSONSortByMeshProx node" />
</div>

vJSONSortByMeshProx takes an array of XYZ points and a mesh, and outputs the points sorted by their distance to the mesh. Sort Order picks near first or far first.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Proximity To | Dropdown | `Surface` | Surface (default), Vertex or Face Centroid. Surface and Vertex measure to the closest vertex. Face Centroid measures to the closest patch point. |
| Sort Order | Dropdown | `Ascending` | Ascending (default) puts the nearest points first. Descending puts the farthest first. |
| Blend To Target | Float | `0` | Moves each point toward its reference by this share. Range 0 to 1, default 0. |
| Target Offset | Float | `0` | Offset of each written point along the normal, or along the line from the reference. Slider -5 to 5, default 0. |
| Points | DATATYPE | `—` | Point positions. |

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
vJSONPointsOnGrid.Output -> vJSONSortByMeshProx.ArrayPoints
vJSONFromOBJ.Points -> vJSONSortByMeshProx.MeshPoints
vJSONSortByMeshProx.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="sort-scattered-points" label="Sort scattered points">

```
vJSONRandom.Output -> vJSONSortByMeshProx.ArrayPoints
vJSONFromOBJ.Points -> vJSONSortByMeshProx.MeshPoints
vJSONSortByMeshProx.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONSortByDistance">vJSONSortByDistance</a>
  <a className="node-chip" href="./vJSONWeightByMeshProx">vJSONWeightByMeshProx</a>
  <a className="node-chip" href="./vJSONMaskByMesh">vJSONMaskByMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
