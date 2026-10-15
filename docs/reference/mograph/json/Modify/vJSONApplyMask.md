---
sidebar_position: 2
title: vJSONApplyMask
description: "Blend Base and Modified points per-point using a 0-1 mask."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONApplyMask

Blend Base and Modified points per-point using a 0-1 mask.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

{/* No screenshot available for vJSONApplyMask yet. */}

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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONApplyMask (JSON/Modify).
Source: fuse vJSONApplyMask.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
