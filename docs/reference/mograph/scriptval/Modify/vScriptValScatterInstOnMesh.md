---
sidebar_position: 55
title: vScriptValScatterInstOnMesh
description: "Stamp a template point cloud at each surface scatter point, oriented to surface normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValScatterInstOnMesh

Stamp a template point cloud at each surface scatter point, oriented to surface normal.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValScatterInstOnMesh.png" alt="vScriptValScatterInstOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale | Float | `1` | Scale of the effect. |
| Align To Normals | Float | `1` | Rotates instances to the surface normal. |
| Normal Blend | Float | `1` | Mix between the world up axis and the normal. |
| Yaw Offset | Float | `0` | Rotation around the normal. |
| Random Yaw | Float | `0` | Random extra rotation around the normal. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale Randomness | Float | `0` | Random variation of the scale. |
| Seed | Integer | `0` | Seed of the random generator. |
| Preview Decimate | Integer | `0` | Outputs fewer points for faster preview. |
| Decimate Step | Integer | `2` | Keeps every Nth point when Preview Decimate is on. |
| Max Output Points | Integer | `0` | Upper limit of output points. |
| Surface Positions | DATATYPE | `—` | — |
| Template | DATATYPE | `—` | — |
| Surface Normals | DATATYPE | `—` | — |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValScatterInstOnMesh (ScriptVal/Modify).
Source: fuse vScriptValScatterInstOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
