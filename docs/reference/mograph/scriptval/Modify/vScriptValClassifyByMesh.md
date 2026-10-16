---
sidebar_position: 11
title: vScriptValClassifyByMesh
description: "Splits points into inside, outside and on-surface-band outputs relative to a mesh."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValClassifyByMesh

Splits points into inside, outside and on-surface-band outputs relative to a mesh.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValClassifyByMesh.png" alt="vScriptValClassifyByMesh node" />
</div>

vScriptValClassifyByMesh takes an array of XYZ points and a mesh, and writes each point to one of three outputs. The inside test checks which side of the plane at the nearest mesh point the point is on.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Space | Dropdown | `Normal` | Normal (default) shifts the test position along the normal of the closest vertex. World shifts it by the World Offset values. |
| Surface Offset Distance | Float | `0` | Shift along the normal in Normal space. Slider -1 to 1, default 0. Hidden in World space. |
| Flip Normal | Float | `0` | Reverses the normal used for the shift. Default off. Hidden in World space. |
| World Offset X | Float | `0` | X shift of the test position in World space. Default 0. Hidden in Normal space. |
| World Offset Y | Float | `0` | Y shift of the test position in World space. Default 0. Hidden in Normal space. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| World Offset Z | Float | `0` | Z shift of the test position in World space. Default 0. Hidden in Normal space. |
| Affect X | Float | `1` | The shift applies to X when checked (default). |
| Affect Y | Float | `1` | The shift applies to Y when checked (default). |
| Affect Z | Float | `1` | The shift applies to Z when checked (default). |
| Surface Band Thickness | Float | `0` | Points whose test position is within this distance of the closest mesh vertex go to the On Surface Band output. Minimum 0, slider 0 to 1, default 0 (no band). |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the closest patch point (the average of a vertex and its 7 nearest neighbors) and the normal estimated there, which points away from the center of the mesh. Points behind that normal go to Inside, others to Outside. With no mesh, every point goes to Outside. The output points are the input points, with their first three values only.

The test position can be shifted first. Normal offset space moves it along the normal of the closest vertex by Surface Offset Distance, reversed by Flip Normal. World space adds World Offset X, Y and Z. Affect X, Y and Z limit the shift to the checked axes.

Surface Band Thickness (default 0) sends points whose test position is within that distance of the closest mesh vertex to On Surface Band instead of Inside or Outside.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-only-the-points-inside-a-mesh" label="Draw only the points inside a mesh" default>

```
vScriptValPointsOnGrid.Output -> vScriptValClassifyByMesh.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValClassifyByMesh.MeshPoints
vScriptValClassifyByMesh.Inside -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="use-the-outside-points" label="Use the outside points">

```
vScriptValRandom.Output -> vScriptValClassifyByMesh.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValClassifyByMesh.MeshPoints
vScriptValClassifyByMesh.Outside -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValMaskByMesh">vScriptValMaskByMesh</a>
  <a className="node-chip" href="./vScriptValTrimByMeshBounds">vScriptValTrimByMeshBounds</a>
  <a className="node-chip" href="./vScriptValClampToMeshProx">vScriptValClampToMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
