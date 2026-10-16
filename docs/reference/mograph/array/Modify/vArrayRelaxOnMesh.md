---
sidebar_position: 47
title: vArrayRelaxOnMesh
description: "Moves each point toward the average of its 6 nearest points, then snaps it to the closest mesh vertex."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRelaxOnMesh

Moves each point toward the average of its 6 nearest points, then snaps it to the closest mesh vertex.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRelaxOnMesh.png" alt="vArrayRelaxOnMesh node" />
</div>

vArrayRelaxOnMesh takes an array of XYZ points and a mesh, and repeats a smoothing pass Relax Iterations times. Relax Strength sets how far each point moves in a pass.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Surface Offset | Float | `0` | Distance from the vertex along its estimated normal. Slider -1 to 1, default 0. |
| Relax Iterations | Integer | `10` | Number of passes. Minimum 1, slider 1 to 100, default 10. |
| Relax Strength | Float | `0.5` | How far a point moves toward the average of its neighbors in a pass. Range 0 to 1, default 0.5. |
| Affect X | Float | `1` | X comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the result when checked (default), otherwise it keeps the input value. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect Z | Float | `1` | Z comes from the result when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

In each pass every point finds its 6 nearest other points and moves toward their average by Relax Strength (0 to 1, default 0.5). The moved point is then replaced by the closest Mesh Points vertex, plus Surface Offset along the normal estimated there. Relax Iterations (default 10) is the number of passes.

This pulls points toward their neighbors and does not push them apart. After the last pass the points lie on mesh vertices, so points can share a vertex. Affect X, Y and Z keep unchecked axes at the input value. Only the vertex list of the mesh is used. If Points or Mesh Points is empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="relax-scattered-points-on-a-loaded-mesh-and-draw" label="Relax scattered points on a loaded mesh and draw" default>

```
vArrayRandom.Output -> vArrayRelaxOnMesh.ArrayPoints
vArrayFromOBJ.Points -> vArrayRelaxOnMesh.MeshPoints
vArrayRelaxOnMesh.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="relax-mesh-scatter" label="Relax mesh scatter">

```
vArrayScatterOnMesh.Output -> vArrayRelaxOnMesh.ArrayPoints
vArrayFromOBJ.Points -> vArrayRelaxOnMesh.MeshPoints
vArrayRelaxOnMesh.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayRelaxScatterOnMesh">vArrayRelaxScatterOnMesh</a>
  <a className="node-chip" href="./vArrayFuseClosePoints">vArrayFuseClosePoints</a>
  <a className="node-chip" href="./vArrayJitterOnMesh">vArrayJitterOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
