---
sidebar_position: 34
title: vJSONPathFrame
description: "Build tangent/normal/binormal frames along a path."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPathFrame

Build tangent/normal/binormal frames along a path.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPathFrame.png" alt="vJSONPathFrame node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Up Mode | Dropdown | `World Y` | Up direction used for the frames. Options: World Y, World Z, Custom. |
| Custom Up X | Float | `0` | Custom up vector X. Shown when the related option is enabled. |
| Custom Up Y | Float | `1` | Custom up vector Y. Shown when the related option is enabled. |
| Custom Up Z | Float | `0` | Custom up vector Z. Shown when the related option is enabled. |
| Flip Tangent | Integer | `0` | Reverses the tangent direction. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Closed Path | Integer | `0` | Treats the points as a closed loop. |
| Path/Packet | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONPathFrame (JSON/Modify).
Source: fuse vJSONPathFrame.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
