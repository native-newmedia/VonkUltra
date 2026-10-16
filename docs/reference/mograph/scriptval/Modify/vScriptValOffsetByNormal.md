---
sidebar_position: 31
title: vScriptValOffsetByNormal
description: "Moves each point along the normal estimated at the closest mesh vertex by Offset Distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValOffsetByNormal

Moves each point along the normal estimated at the closest mesh vertex by Offset Distance.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValOffsetByNormal.png" alt="vScriptValOffsetByNormal node" />
</div>

vScriptValOffsetByNormal takes an array of XYZ points and a mesh, and adds the normal estimated at the closest mesh vertex times Offset Distance to each point. Offset Distance is the only value that matters, and it defaults to 0.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Distance | Float | `0` | Distance along the normal. Slider -1 to 1, default 0. |
| Affect X | Float | `1` | X is offset when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y is offset when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z is offset when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For every point the node finds the closest Mesh Points vertex and reads the normal estimated there, which is fitted to the 8 nearest vertices and points away from the center of the mesh. The output point is the input point plus that normal times Offset Distance, so the point moves along the normal from where it is, not from the mesh.

Offset Distance has a slider from -1 to 1 and defaults to 0, which leaves the points where they are. A negative value moves the points against the normal. Affect X, Y and Z are checked by default, and an unchecked axis keeps its input value.

If the points or the mesh are empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="push-a-grid-away-from-a-loaded-mesh-and-draw" label="Push a grid away from a loaded mesh and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValOffsetByNormal.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValOffsetByNormal.MeshPoints
vScriptValOffsetByNormal.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-scattered-points" label="Offset scattered points">

```
vScriptValScatterOnMesh.Output -> vScriptValOffsetByNormal.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValOffsetByNormal.MeshPoints
vScriptValOffsetByNormal.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAlignToMesh">vScriptValAlignToMesh</a>
  <a className="node-chip" href="./vScriptValProjectOnMesh">vScriptValProjectOnMesh</a>
  <a className="node-chip" href="./vScriptValNoiseOnMesh">vScriptValNoiseOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
