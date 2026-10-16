---
sidebar_position: 59
title: vScriptValSnapMeshVertex
description: "Moves each point to the closest mesh vertex, patch point or sample, by a Blend amount."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValSnapMeshVertex

Moves each point to the closest mesh vertex, patch point or sample, by a Blend amount.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValSnapMeshVertex.png" alt="vScriptValSnapMeshVertex node" />
</div>

vScriptValSnapMeshVertex takes an array of XYZ points and a mesh, and moves each point toward the closest Mesh Points vertex. Snap Mode can switch the target to the patch points.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect X | Float | `1` | X moves when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y moves when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z moves when checked (default), otherwise it keeps the input value. |
| Snap Mode | Dropdown | `Vertex` | Vertex (default), Surface or Centroid. Vertex and Surface give the same result. |
| Blend | Float | `1` | Mix between the point (0) and the target (1). Range 0 to 1, default 1. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Mesh vertices that the points snap to. |

</details>

<details>
<summary>Read the full description</summary>

Vertex (the default) and Surface both find the closest Mesh Points vertex. Centroid finds the closest patch point, the average of a vertex and its 7 nearest neighbors. The output is the point plus (target - point) * Blend, so Blend 1 (the default) puts the point on the target.

Blend runs from 0 to 1, and the output has 3 values per point. Affect X, Y and Z keep unchecked axes at the input value. Only the vertex list of Mesh Points is used, not edges or faces. If the points or the mesh are empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="snap-a-grid-to-a-loaded-mesh-and-draw" label="Snap a grid to a loaded mesh and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValSnapMeshVertex.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValSnapMeshVertex.MeshPoints
vScriptValSnapMeshVertex.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="snap-scattered-points" label="Snap scattered points">

```
vScriptValRandom.Output -> vScriptValSnapMeshVertex.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValSnapMeshVertex.MeshPoints
vScriptValSnapMeshVertex.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValSnapFaceCentroid">vScriptValSnapFaceCentroid</a>
  <a className="node-chip" href="./vScriptValProjectOnMesh">vScriptValProjectOnMesh</a>
  <a className="node-chip" href="./vScriptValRaycastToMesh">vScriptValRaycastToMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
