---
sidebar_position: 13
title: vScriptValColorMap
description: "Map scalar sources to per-point RGBA colors."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValColorMap

Map scalar sources to per-point RGBA colors.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValColorMap.png" alt="vScriptValColorMap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Value that drives the result. Options: Index, Scalar Input, Position X, Position Y, Position Z, Distance From Center. |
| Auto Range | Integer | `1.0` | Uses the minimum and maximum of the data as the range. |
| RangeMin | Float | `0` | — |
| RangeMax | Float | `1` | — |
| Clamp 0-1 | Integer | `1.0` | Limits the result to the range 0 to 1. |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Invert | Integer | `0.0` | Inverts the result. |
| Fallback Count | Integer | `100` | Number of values used when no input array is connected. |
| Center X | Float | `0` | Center position X. |
| Center Y | Float | `0` | Center position Y. |
| Center Z | Float | `0` | Center position Z. |
| Red | Float | `0.1` | Color value for color A. |
| Green | Float | `0.4` | Color value for color A. |
| Blue | Float | `1.0` | Color value for color A. |
| Alpha | Float | `1.0` | Color value for color A. |
| Red | Float | `1.0` | Color value for color A. |
| Green | Float | `0.2` | Color value for color A. |
| Blue | Float | `0.2` | Color value for color A. |
| Alpha | Float | `1.0` | Color value for color A. |
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
Generated page — node: vScriptValColorMap (ScriptVal/Modify).
Source: fuse vScriptValColorMap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
