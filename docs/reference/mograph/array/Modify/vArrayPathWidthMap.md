---
sidebar_position: 36
title: vArrayPathWidthMap
description: "Generate per-point width/radius maps for path sweep."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPathWidthMap

Generate per-point width/radius maps for path sweep.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPathWidthMap.png" alt="vArrayPathWidthMap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Value that drives the result. Options: Index, Distance, Scalar Input. |
| Width Min | Float | `0.05` | Smallest width. |
| Width Max | Float | `0.2` | Largest width. |
| Power | Float | `1` | Exponent of the curve. |
| Invert | Integer | `0` | Inverts the result. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Clamp 0-1 | Integer | `1` | Limits the result to the range 0 to 1. |
| Path/Packet | DATATYPE | `—` | — |
| Scalars | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayPathWidthMap (Array/Modify).
Source: fuse vArrayPathWidthMap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
