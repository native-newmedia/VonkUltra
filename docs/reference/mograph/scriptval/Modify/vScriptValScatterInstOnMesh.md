---
sidebar_position: 55
title: vScriptValScatterInstOnMesh
description: "Stamps a template point cloud at every mesh vertex or given position, tilted to the normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValScatterInstOnMesh

Stamps a template point cloud at every mesh vertex or given position, tilted to the normal.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValScatterInstOnMesh.png" alt="vScriptValScatterInstOnMesh node" />
</div>

vScriptValScatterInstOnMesh takes a Template point cloud and places a copy at each mesh vertex, or at each point of Surface Positions. Each copy can be turned to the surface normal, scaled and yawed with seeded variation.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale | Float | `1` | Scale of each copy. Minimum 0, slider 0 to 10, default 1. |
| Align To Normals | Float | `1` | Tilts the copies to the normal when on (default). When off, they are not tilted. |
| Normal Blend | Float | `1` | Mix from the up axis (0) to the normal (1). Range 0 to 1, default 1. |
| Yaw Offset | Float | `0` | Rotation of each copy around its Y axis in degrees. Slider -180 to 180, default 0. |
| Random Yaw | Float | `0` | Random extra yaw in degrees, between minus and plus this value. Minimum 0, slider 0 to 180, default 0. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale Randomness | Float | `0` | Random scale variation, up to this share of the scale in either direction. Range 0 to 1, default 0. |
| Seed | Integer | `0` | Integer, range 0 to 1000000, default 0. |
| Preview Decimate | Integer | `0` | Keeps only every Decimate Step position when on. Default off. |
| Decimate Step | Integer | `2` | Step for Preview Decimate. Range 1 to 1024, slider 1 to 32, default 2. |
| Max Output Points | Integer | `0` | Limits the number of output points. 0 means no limit. Default 0. |
| Surface Positions | DATATYPE | `—` | Positions for the copies. Used when Mesh Points is empty. |
| Template | DATATYPE | `—` | The point cloud to copy, with Y as its up axis. |
| Surface Normals | DATATYPE | `—` | Normals for the positions. Used when Mesh Points is empty. Optional. |
| Mesh Points | DATATYPE | `—` | Mesh vertices. When connected, they give the positions and the estimated normals. |

</details>

<details>
<summary>Read the full description</summary>

With Mesh Points connected, the positions are the mesh vertices and the normals are estimated at them. Otherwise the positions come from Surface Positions and the normals from Surface Normals. For each position the template is turned around its Y axis by Yaw Offset (degrees) plus a random amount up to Random Yaw, rotated so that its Y axis follows the normal, scaled by Scale (times a random factor up to Scale Randomness), and moved to the position.

Align To Normals (on) and Normal Blend (0 to 1, default 1) decide how far the Y axis follows the normal; with Align off it stays at 0, 1, 0. Preview Decimate keeps every Decimate Step position, and Max Output Points stops the output at that number of points (0 means no limit). The random values come from Seed and the position number. Without positions or template the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="stamp-a-template-on-a-loaded-mesh-and-draw" label="Stamp a template on a loaded mesh and draw" default>

```
vScriptValFromOBJ.Points -> vScriptValScatterInstOnMesh.MeshPoints
vScriptValLine.Output -> vScriptValScatterInstOnMesh.Template
vScriptValScatterInstOnMesh.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="stamp-on-scattered-positions" label="Stamp on scattered positions">

```
vScriptValScatterOnMesh.Output -> vScriptValScatterInstOnMesh.SurfacePositions
vScriptValPointsOnCircle.Output -> vScriptValScatterInstOnMesh.Template
vScriptValScatterInstOnMesh.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCopyToPoints">vScriptValCopyToPoints</a>
  <a className="node-chip" href="../Create/vScriptValScatterOnMesh">vScriptValScatterOnMesh</a>
  <a className="node-chip" href="./vScriptValRepeat">vScriptValRepeat</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
