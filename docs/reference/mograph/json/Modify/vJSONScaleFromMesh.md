---
sidebar_position: 54
title: vJSONScaleFromMesh
description: "Scales the vector from the closest mesh vertex to each point by a multiplier."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONScaleFromMesh

Scales the vector from the closest mesh vertex to each point by a multiplier.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONScaleFromMesh.png" alt="vJSONScaleFromMesh node" />
</div>

vJSONScaleFromMesh takes an array of XYZ points and a mesh. For each point it finds the closest Mesh Points vertex and multiplies the distance to it by Distance Multiplier.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distance Multiplier | Float | `1` | Multiplier for the distance to the closest vertex. Slider 0 to 2, default 1. |
| Affect X | Float | `1` | X comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z comes from the result when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

Each point P becomes R + (P - R) * Distance Multiplier, where R is the closest Mesh Points vertex. A multiplier of 1 (the default) leaves the points where they are, 0 puts every point on its vertex, and a value above 1 pushes the points away from the vertex along the same line. A negative value would put the point on the opposite side.

Affect X, Y and Z are checked by default, and an unchecked axis keeps its input value. The slider runs from 0 to 2. Only the vertex list of the mesh is used. If the points or the mesh are empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="push-a-grid-away-from-a-loaded-mesh-and-draw" label="Push a grid away from a loaded mesh and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONScaleFromMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONScaleFromMesh.MeshPoints
vJSONScaleFromMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="scale-scattered-points" label="Scale scattered points">

```
vJSONRandom.Output -> vJSONScaleFromMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONScaleFromMesh.MeshPoints
vJSONScaleFromMesh.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONOffsetByNormal">vJSONOffsetByNormal</a>
  <a className="node-chip" href="./vJSONAttractToMesh">vJSONAttractToMesh</a>
  <a className="node-chip" href="./vJSONClampToMeshProx">vJSONClampToMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
