---
sidebar_position: 26
title: vArrayMaskByMesh
description: "Keeps only the points whose distance to the closest mesh vertex lies between Min and Max Distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayMaskByMesh

Keeps only the points whose distance to the closest mesh vertex lies between Min and Max Distance.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayMaskByMesh.png" alt="vArrayMaskByMesh node" />
</div>

vArrayMaskByMesh takes an array of XYZ points and a mesh, and outputs the points whose distance to the closest mesh vertex is inside a band. Invert Mask keeps the other points instead.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0.1` | Largest distance to the mesh that is kept. Minimum 0, slider 0 to 10, default 0.1. |
| Min Distance | Float | `0.0` | Points closer than this are removed. Minimum 0, slider 0 to 10, default 0. Limited to Max Distance. |
| Invert Mask | Integer | `0` | Keeps the points that fail the distance test instead. Default off. |
| Mask Mode | Dropdown | `Hard` | Hard (default) or Soft Falloff. Soft Falloff fades the weight only when the hidden Falloff Distance is above 0. |
| Falloff Distance | Float | `0.0` | Hidden control. In Soft Falloff, the distance over which the weight drops from 1 to 0 outside the band. Default 0. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Weight Power | Float | `1.0` | Hidden control. Exponent applied to the weight. Range from 0.01, default 1. |
| Min Output Weight | Float | `0.01` | Hidden control. Points with a weight at or below this value are removed. Range 0 to 1, default 0.01. |
| Append Weight As 4th Value | Integer | `0` | Hidden control. Adds the weight as a fourth value in Soft Falloff when on. Default off. |
| Keep Input If Mesh Missing | Integer | `1` | Passes the input through when there is no mesh data, if on (default). When off, the output is empty. |
| Output Position | Dropdown | `Original` | Original (default) keeps the position. Closest On Surface moves the point to the closest mesh vertex. |
| Surface Offset | Float | `0.0` | Hidden control. Offset along the estimated normal of the vertex for Closest On Surface. Slider -1 to 1, default 0. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the closest Mesh Points vertex and its distance. In Hard mode the point is kept when the distance is from Min Distance (default 0) up to Max Distance (default 0.1). Min Distance is limited to Max Distance. Invert Mask keeps the points that fail the test instead.

Output Position keeps the original position (default) or moves the point to the closest vertex. Five hidden controls are also read: Falloff Distance, Weight Power, Min Output Weight, Append Weight As 4th Value and Surface Offset. Soft Falloff fades the weight outside the band over the hidden Falloff Distance, which is 0 by default.

If there is no mesh, Keep Input If Mesh Missing (on by default) passes the points through, otherwise the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="keep-grid-points-near-a-mesh-and-draw" label="Keep grid points near a mesh and draw" default>

```
vArrayPointsOnGrid.Output -> vArrayMaskByMesh.ArrayPoints
vArrayFromOBJ.Points -> vArrayMaskByMesh.MeshPoints
vArrayMaskByMesh.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="filter-scattered-points" label="Filter scattered points">

```
vArrayRandom.Output -> vArrayMaskByMesh.ArrayPoints
vArrayFromOBJ.Points -> vArrayMaskByMesh.MeshPoints
vArrayMaskByMesh.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayClassifyByMesh">vArrayClassifyByMesh</a>
  <a className="node-chip" href="./vArrayTrimByMeshBounds">vArrayTrimByMeshBounds</a>
  <a className="node-chip" href="./vArrayWeightByMeshProx">vArrayWeightByMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
