---
sidebar_position: 55
title: vJSONScatterInstOnMesh
description: "Stamp a template point cloud at each surface scatter point, oriented to surface normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONScatterInstOnMesh

Stamp a template point cloud at each surface scatter point, oriented to surface normal.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONScatterInstOnMesh.png" alt="vJSONScatterInstOnMesh node" />
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
| Surface Positions | Text | `—` | — |
| Template | Text | `—` | — |
| Surface Normals | Text | `—` | — |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONScatterInstOnMesh (JSON/Modify).
Source: fuse vJSONScatterInstOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
