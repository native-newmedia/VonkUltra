---
sidebar_position: 3
title: vPointClamp
description: "Clamp a Fusion Point object to specific boundaries This acts as a hard limiter on the range of numbers that can pass through the Point control."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointClamp

Clamp a Fusion Point object to specific boundaries This acts as a hard limiter on the range of numbers that can pass through the Point control. Numbers that exist below the minimum range, or above the maximum range are clipped to those boundaries.

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointClamp.png" alt="vPointClamp node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point | Point | `—` | Point to clamp. |
| Minimum | Float | `0` | Lower bound — X/Y values below this are clipped up to it. |
| Maximum | Float | `1.0` | Upper bound — X/Y values above this are clipped down to it. |
| Show Input | Integer | `1.0` | Reveals the wire for the Point connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointAbsolute">vPointAbsolute</a>
  <a className="node-chip" href="./vPointAdd">vPointAdd</a>
  <a className="node-chip" href="./vPointDivide">vPointDivide</a>
  <a className="node-chip" href="./vPointMix">vPointMix</a>
</div>

{/*
Generated page — node: vPointClamp (Core/Point/Operators).
Source: fuse vPointClamp.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
