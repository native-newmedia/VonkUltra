---
sidebar_position: 3
title: vGradientTimeStretch
description: "Time based operation on Gradient objects"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientTimeStretch

Time based operation on Gradient objects

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientTimeStretch.png" alt="vGradientTimeStretch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Gradient | Gradient | `—` | Gradient to sample at a specific time. |
| Time | Float | `0.0` | The frame number to read Gradient's value at, regardless of the comp's current playhead position. |
| Set To Current Time | Float | `—` | Sets Time to the comp's current playhead position — a quick way to snapshot "now". |
| Show Input | Integer | `1.0` | Reveals the wire for the Gradient connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientAccumulator">vGradientAccumulator</a>
  <a className="node-chip" href="./vGradientTimeSpeed">vGradientTimeSpeed</a>
</div>

{/*
Generated page — node: vGradientTimeStretch (Core/Gradient/Temporal).
Source: fuse vGradientTimeStretch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
