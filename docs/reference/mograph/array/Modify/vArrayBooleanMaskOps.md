---
sidebar_position: 6
title: vArrayBooleanMaskOps
description: "Combine two mask or point arrays with boolean operations and point-aware output modes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayBooleanMaskOps

Combine two mask or point arrays with boolean operations and point-aware output modes.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayBooleanMaskOps.png" alt="vArrayBooleanMaskOps node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `AND` | Boolean operation. Options: AND, OR, XOR, A AND NOT B, NOT A, NOT B. |
| Output Mode | Dropdown | `Mask Scalars (0/1, any axis true)` | Type of the result. Options: Mask Scalars (0/1, any axis true), Per-Axis XYZ Mask (&#123;0/1,0/1,0/1&#125;), Pass A Points When True, Pass B Points When True, Average A/B Points When True. |
| Threshold | Float | `0` | Values above this count as true. |
| Output Amount | Float | `1` | Strength of the output. |
| X Amount | Float | `1` | Strength on X. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Amount | Float | `1` | Strength on Y. |
| Z Amount | Float | `1` | Strength on Z. |
| Trim Zeros | Integer | `0` | Removes trailing zero values. |
| Mask A | DATATYPE | `—` | First mask, one 0 or 1 value per element. |
| Mask B | DATATYPE | `—` | Second mask, one 0 or 1 value per element. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayBooleanMaskOps (Array/Modify).
Source: fuse vArrayBooleanMaskOps.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
