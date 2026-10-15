---
sidebar_position: 68
title: vScriptValWeightByMeshProx
description: "Output a 1D weight per input point based on distance to the closest point on an OBJ mesh surface."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValWeightByMeshProx

Output a 1D weight per input point based on distance to the closest point on an OBJ mesh surface.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValWeightByMeshProx.png" alt="vScriptValWeightByMeshProx node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0.5` | Distance from the mesh at which the effect ends. |
| Falloff | Dropdown | `Linear` | Shape of the falloff. Options: Linear, Squared, Root. |
| Invert Weight | Integer | `0` | Inverts the weights. |
| Project Amount | Float | `1` | Mix between the original and the surface position. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
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
Generated page — node: vScriptValWeightByMeshProx (ScriptVal/Modify).
Source: fuse vScriptValWeightByMeshProx.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
