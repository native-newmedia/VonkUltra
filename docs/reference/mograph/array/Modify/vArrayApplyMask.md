---
sidebar_position: 2
title: vArrayApplyMask
description: "Blend Base and Modified points per-point using a 0-1 mask."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayApplyMask

Blend Base and Modified points per-point using a 0-1 mask.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vArrayApplyMask yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Base | DATATYPE | `—` | — |
| Modified | DATATYPE | `—` | — |
| Mask | DATATYPE | `—` | Mask with one 0 or 1 value per element. |
| Amount | Float | `1.0` | Overall strength of the mask effect. |
| Blend Tightness | Float | `1.0` | Sharpens the transition between Base and Modified. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Invert Mask | Integer | `0` | Swaps masked and unmasked areas. |
| Trim Zeros | Integer | `0` | Removes trailing zero values. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayApplyMask (Array/Modify).
Source: fuse vArrayApplyMask.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
