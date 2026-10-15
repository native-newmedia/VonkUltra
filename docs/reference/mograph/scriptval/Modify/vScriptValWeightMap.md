---
sidebar_position: 69
title: vScriptValWeightMap
description: "Generate normalized per-point weight arrays."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValWeightMap

Generate normalized per-point weight arrays.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValWeightMap.png" alt="vScriptValWeightMap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Value that drives the result. Options: Index, Scalar Input, Position X, Position Y, Position Z, Distance From Center. |
| Auto Range | Integer | `1.0` | Uses the minimum and maximum of the data as the range. |
| RangeMin | Float | `0` | — |
| RangeMax | Float | `1` | — |
| OutMin | Float | `0` | — |

<details>
<summary>+13 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| OutMax | Float | `1` | — |
| Curve | Dropdown | `Linear` | Shape of the transition. Linear, Smooth or Power. |
| Power | Float | `1` | Exponent of the curve. |
| Clamp 0-1 | Integer | `1.0` | Limits the result to the range 0 to 1. |
| Invert | Integer | `0.0` | Inverts the result. |
| Fallback Count | Integer | `100` | Number of values used when no input array is connected. |
| Center X | Float | `0` | Center position X. |
| Center Y | Float | `0` | Center position Y. |
| Center Z | Float | `0` | Center position Z. |
| Output Mode | Dropdown | `Weights Only` | How the weight is output. Options: Weights Only, Store Weight in 4th Value, Multiply XYZ by Weight, Blend Toward Center, Offset XYZ by Weight. |
| Apply Amount | Float | `1` | Amount of the result applied to the points. |
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
Generated page — node: vScriptValWeightMap (ScriptVal/Modify).
Source: fuse vScriptValWeightMap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
