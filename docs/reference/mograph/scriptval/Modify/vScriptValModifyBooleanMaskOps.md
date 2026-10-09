---
sidebar_position: 16
title: vScriptValModifyBooleanMaskOps
description: "Combine two mask or point arrays with boolean operations and point-aware output modes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValModifyBooleanMaskOps

Combine two mask or point arrays with boolean operations and point-aware output modes.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValModifyBooleanMaskOps.png" alt="vScriptValModifyBooleanMaskOps node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `AND` | — |
| Show Input | Integer | `0.0` | — |
| Output Mode | Dropdown | `Mask Scalars (0/1, any axis true)` | — |
| Threshold | Float | `0` | — |
| Output Amount | Float | `1` | — |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Amount | Float | `1` | — |
| Y Amount | Float | `1` | — |
| Z Amount | Float | `1` | — |
| Trim Zeros | Integer | `0` | — |
| Mask A | DATATYPE | `—` | — |
| Mask B | DATATYPE | `—` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValModifyBooleanMaskOps (ScriptVal/Modify).
Source: fuse vScriptValModifyBooleanMaskOps.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
