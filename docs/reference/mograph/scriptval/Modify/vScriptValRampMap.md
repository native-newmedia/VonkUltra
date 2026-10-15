---
sidebar_position: 45
title: vScriptValRampMap
description: "Map scalar sources to per-point RGBA colors using a 4-stop ramp."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRampMap

Map scalar sources to per-point RGBA colors using a 4-stop ramp.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRampMap.png" alt="vScriptValRampMap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Value that drives the result. Options: Index, Scalar Input, Position X, Position Y, Position Z, Distance From Center. |
| Auto Range | Integer | `1.0` | Uses the minimum and maximum of the data as the range. |
| RangeMin | Float | `0` | — |
| RangeMax | Float | `1` | — |
| Curve | Dropdown | `Linear` | Shape of the transition. Linear, Smooth or Power. |

<details>
<summary>+29 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Power | Float | `1` | Exponent of the curve. |
| Clamp 0-1 | Integer | `1.0` | Limits the result to the range 0 to 1. |
| Invert | Integer | `0.0` | Inverts the result. |
| Fallback Count | Integer | `100` | Number of values used when no input array is connected. |
| Center X | Float | `0` | Center position X. |
| Center Y | Float | `0` | Center position Y. |
| Center Z | Float | `0` | Center position Z. |
| Pos | Float | `0.0` | — |
| Red | Float | `0.05` | Color value for stop A Color. |
| Green | Float | `0.10` | Color value for stop A Color. |
| Blue | Float | `0.35` | Color value for stop A Color. |
| Alpha | Float | `1.0` | Color value for stop A Color. |
| Pos | Float | `0.33` | — |
| Red | Float | `0.10` | Color value for stop A Color. |
| Green | Float | `0.55` | Color value for stop A Color. |
| Blue | Float | `0.85` | Color value for stop A Color. |
| Alpha | Float | `1.0` | Color value for stop A Color. |
| Pos | Float | `0.66` | — |
| Red | Float | `0.95` | Color value for stop A Color. |
| Green | Float | `0.72` | Color value for stop A Color. |
| Blue | Float | `0.20` | Color value for stop A Color. |
| Alpha | Float | `1.0` | Color value for stop A Color. |
| Pos | Float | `1.0` | — |
| Red | Float | `1.00` | Color value for stop A Color. |
| Green | Float | `0.20` | Color value for stop A Color. |
| Blue | Float | `0.10` | Color value for stop A Color. |
| Alpha | Float | `1.0` | Color value for stop A Color. |
| Points | DATATYPE | `—` | Point positions. |
| Scalars | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValRampMap (ScriptVal/Modify).
Source: fuse vScriptValRampMap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
