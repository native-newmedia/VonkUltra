---
sidebar_position: 35
title: vJSONPathTwist
description: "Apply roll/twist along path frames."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPathTwist

Apply roll/twist along path frames.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPathTwist.png" alt="vJSONPathTwist node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Twist Mode | Dropdown | `Linear Start-End` | Linear from start to end, or constant. Options: Linear Start-End, Constant. |
| Start Twist (deg) | Float | `0` | Twist at the start in degrees. |
| End Twist (deg) | Float | `180` | Twist at the end in degrees. |
| Closed Path | Integer | `0` | Treats the points as a closed loop. |
| Path/Frame Packet | DATATYPE | `—` | — |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONPathTwist (JSON/Modify).
Source: fuse vJSONPathTwist.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
