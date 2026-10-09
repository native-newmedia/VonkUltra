---
sidebar_position: 16
title: vArrayModifyBooleanMaskOps
description: "Combine two mask or point arrays with boolean operations and point-aware output modes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayModifyBooleanMaskOps

Combine two mask or point arrays with boolean operations and point-aware output modes.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayModifyBooleanMaskOps.png" alt="vArrayModifyBooleanMaskOps node" />
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
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayModifyBooleanMaskOps (Array/Modify).
Source: fuse vArrayModifyBooleanMaskOps.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
