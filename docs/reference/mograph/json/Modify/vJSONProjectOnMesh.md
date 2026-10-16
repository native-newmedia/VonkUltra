---
sidebar_position: 44
title: vJSONProjectOnMesh
description: "Moves each point to the closest mesh vertex, with an offset, a blend and a distance limit."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONProjectOnMesh

Moves each point to the closest mesh vertex, with an offset, a blend and a distance limit.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONProjectOnMesh.png" alt="vJSONProjectOnMesh node" />
</div>

vJSONProjectOnMesh takes an array of XYZ points and a mesh, and moves each point to the closest Mesh Points vertex plus Surface Offset. Distance Mode can leave far points alone or limit the move.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Surface Offset | Float | `0` | Distance of the target from the vertex. Slider -1 to 1, default 0. |
| Projection Mode | Dropdown | `Closest Surface` | Closest Surface (default), Nearest Vertex or Face Center. All three find the closest vertex. |
| Offset Direction | Dropdown | `Surface Normal` | Surface Normal (default) or World +Y. The direction of the offset. |
| Projection Blend | Float | `1` | Mix between the point (0) and the target (1). Range 0 to 1, default 1. |
| Distance Mode | Dropdown | `No Limit` | No Limit (default), Hard Cutoff or Clamp. How Max Distance is used. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0` | Limit for Hard Cutoff and Clamp. Minimum 0, slider 0 to 5, default 0, which switches the limit off. |
| Affect X | Float | `1` | X comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z comes from the result when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the closest Mesh Points vertex. The target is that vertex plus Surface Offset along the estimated normal (Surface Normal) or along +Y (World +Y). Projection Blend (0 to 1, default 1) mixes between the point and the target. The three Projection Modes give the same result with this mesh data.

With Max Distance above 0, Hard Cutoff leaves a point where it is if the target is farther away than Max Distance, and Clamp moves it only up to that distance toward the target. No Limit ignores Max Distance. Affect X, Y and Z keep unchecked axes at the input value. Only the vertex list is used. If Points or Mesh Points is empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="project-a-grid-onto-a-loaded-mesh-and-draw" label="Project a grid onto a loaded mesh and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONProjectOnMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONProjectOnMesh.MeshPoints
vJSONProjectOnMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="project-scattered-points" label="Project scattered points">

```
vJSONRandom.Output -> vJSONProjectOnMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONProjectOnMesh.MeshPoints
vJSONProjectOnMesh.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONProject">vJSONProject</a>
  <a className="node-chip" href="./vJSONSnapMeshVertex">vJSONSnapMeshVertex</a>
  <a className="node-chip" href="./vJSONAttractToMesh">vJSONAttractToMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
