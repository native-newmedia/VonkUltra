---
sidebar_position: 46
title: vJSONRaycastToMesh
description: "Casts a ray from each point and moves it to the nearest mesh vertex that the ray passes close to."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRaycastToMesh

Casts a ray from each point and moves it to the nearest mesh vertex that the ray passes close to.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRaycastToMesh.png" alt="vJSONRaycastToMesh node" />
</div>

vJSONRaycastToMesh takes an array of XYZ points and a mesh, shoots a ray from each point, and outputs the mesh vertex that the ray hits first. Ray Mode picks a fixed direction, a target point or a direction per point.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Direction Array | DATATYPE | `—` | Direction per point for Dir Array mode. The port is shown only in that mode. |
| Ray Mode | Dropdown | `Global Dir` | Global Dir (default), Target Point or Dir Array. |
| Direction X | Float | `0` | X of the ray direction in Global Dir mode. Default 0. |
| Direction Y | Float | `-1` | Y of the ray direction in Global Dir mode. Default -1. |
| Direction Z | Float | `0` | Z of the ray direction in Global Dir mode. Default 0. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target X | Float | `0` | X of the target in Target Point mode. Default 0. |
| Target Y | Float | `0` | Y of the target in Target Point mode. Default 0. |
| Target Z | Float | `0` | Z of the target in Target Point mode. Default 0. |
| Miss Behavior | Dropdown | `Pass Through` | Pass Through (default) keeps the point when the ray misses. Drop Point removes it. |
| Affect X | Float | `1` | X comes from the hit when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the hit when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z comes from the hit when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

Each ray starts at a point. In Global Dir the direction is Direction X, Y, Z (default 0, -1, 0). In Target Point it runs toward Target X, Y, Z. In Dir Array it comes from the Direction Array input, one direction per point. Directions are made unit length.

A mesh vertex is a hit when it is ahead of the point and its distance from the ray line is at most the average spacing of the mesh vertices. The nearest hit along the ray gives the output, which is that vertex, for the checked axes of Affect X, Y and Z. On a miss, Pass Through (default) keeps the point and Drop Point removes it. The check compares every vertex for every point.

</details>

## Example Connections

<Tabs>
<TabItem value="drop-a-grid-onto-a-loaded-mesh-and-draw" label="Drop a grid onto a loaded mesh and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONRaycastToMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONRaycastToMesh.MeshPoints
vJSONRaycastToMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="aim-rays-with-a-direction-array" label="Aim rays with a direction array">

```
vJSONPointsOnGrid.Output -> vJSONRaycastToMesh.ArrayPoints
vJSONLookAt.Output -> vJSONRaycastToMesh.DirArray
vJSONFromOBJ.Points -> vJSONRaycastToMesh.MeshPoints
vJSONRaycastToMesh.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONSnapMeshVertex">vJSONSnapMeshVertex</a>
  <a className="node-chip" href="./vJSONProjectOnMesh">vJSONProjectOnMesh</a>
  <a className="node-chip" href="./vJSONLookAt">vJSONLookAt</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
