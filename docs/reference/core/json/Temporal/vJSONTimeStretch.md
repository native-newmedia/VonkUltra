---
sidebar_position: 2
title: vJSONTimeStretch
description: "Time based operation on JSON"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTimeStretch

Time based operation on JSON

<div className="node-badge-row">
  <span className="node-badge">Core / JSON</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/json/vJSONTimeStretch.png" alt="vJSONTimeStretch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | JSON text to sample at a specific time. |
| Time | Float | `0.0` | The frame number to read Input's value at, regardless of the comp's current playhead position. |
| Set To Current Time | Float | `—` | Sets Time to the comp's current playhead position — a quick way to snapshot "now". |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONTimeSpeed">vJSONTimeSpeed</a>
</div>

{/*
Generated page — node: vJSONTimeStretch (Core/JSON/Temporal).
Source: fuse vJSONTimeStretch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
