---
sidebar_position: 2
title: vPointTimeStretch
description: "Time based operations on a Fusion Point object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointTimeStretch

Time based operations on a Fusion Point object

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointTimeStretch.png" alt="vPointTimeStretch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point | Point | `—` | Point to sample at a specific time. |
| Time | Float | `0.0` | The frame number to read Point's value at, regardless of the comp's current playhead position. |
| Set To Current Time | Float | `—` | Sets Time to the comp's current playhead position — a quick way to snapshot "now". |
| Show Input | Integer | `1.0` | Reveals the wire for the Point connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointTimeSpeed">vPointTimeSpeed</a>
</div>

{/*
Generated page — node: vPointTimeStretch (Core/Point/Temporal).
Source: fuse vPointTimeStretch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
