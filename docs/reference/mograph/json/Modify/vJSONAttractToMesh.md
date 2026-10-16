---
sidebar_position: 5
title: vJSONAttractToMesh
description: "Moves each point toward the closest mesh vertex by a Blend amount."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAttractToMesh

Moves each point toward the closest mesh vertex by a Blend amount.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAttractToMesh.png" alt="vJSONAttractToMesh node" />
</div>

vJSONAttractToMesh takes an array of XYZ points and a mesh, and outputs each point moved toward the closest Mesh Points vertex. Blend sets how far, from 0 (no move) to 1 (on the vertex).

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Blend | Float | `1` | Mix between the input point (0) and the closest vertex (1). Clamped to 0 to 1 in the code, default 1. |
| Affect X | Float | `1` | X moves toward the vertex when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y moves toward the vertex when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z moves toward the vertex when checked (default), otherwise it keeps the input value. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| JSON Points | DATATYPE | `—` | JSON family only. The points input that the node reads. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For every input point the node finds the closest vertex of Mesh Points. The output is the input point plus (vertex - input point) * Blend, so Blend 0 keeps the input and Blend 1 puts the point on the vertex.

Blend is clamped to 0 to 1 even though the control accepts other values, and its default is 1. Affect X, Y and Z are checked by default. An unchecked axis keeps the input value, so the point moves only within the checked axes.

The search compares every point with every vertex. Only the vertex list is used, not edges or faces. If Points or Mesh Points is empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="pull-a-grid-toward-a-loaded-mesh-and-draw" label="Pull a grid toward a loaded mesh and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONAttractToMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONAttractToMesh.MeshPoints
vJSONAttractToMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="attract-scattered-points" label="Attract scattered points">

```
vJSONRandom.Output -> vJSONAttractToMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONAttractToMesh.MeshPoints
vJSONAttractToMesh.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONAlignToMesh">vJSONAlignToMesh</a>
  <a className="node-chip" href="./vJSONProjectOnMesh">vJSONProjectOnMesh</a>
  <a className="node-chip" href="./vJSONClampToMeshProx">vJSONClampToMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
