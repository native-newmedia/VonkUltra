---
sidebar_position: 20
title: vNumberSmoothstep
description: "Generates a smoothstep function"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberSmoothstep

Generates a smoothstep function

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberSmoothstep.png" alt="vNumberSmoothstep node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Threshold1 | Float | `0` | Lower edge — Number at or below this returns 0. |
| Threshold2 | Float | `0` | Upper edge — Number at or above this returns 1. |
| Number | Float | `0` | Value to smoothly interpolate between Threshold1 and Threshold2, using an S-curve rather than a linear ramp. |
| Show Input | Integer | `1.0` | Reveals the wire for the Number connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberAbsolute">vNumberAbsolute</a>
  <a className="node-chip" href="./vNumberAdd">vNumberAdd</a>
  <a className="node-chip" href="./vNumberCeil">vNumberCeil</a>
  <a className="node-chip" href="./vNumberClamp">vNumberClamp</a>
</div>

{/*
Generated page — node: vNumberSmoothstep (Core/Number/Operators).
Source: fuse vNumberSmoothstep.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
