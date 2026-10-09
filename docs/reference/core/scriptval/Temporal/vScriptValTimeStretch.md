---
sidebar_position: 3
title: vScriptValTimeStretch
description: "Time based operation on ScriptVal objects"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTimeStretch

Time based operation on ScriptVal objects

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValTimeStretch.png" alt="vScriptValTimeStretch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | ScriptVal | `—` | ScriptVal to sample at a specific time. |
| Time | Float | `0.0` | The frame number to read ScriptVal's value at, regardless of the comp's current playhead position. |
| Set To Current Time | Float | `—` | Sets Time to the comp's current playhead position — a quick way to snapshot "now". |
| Show Input | Integer | `1.0` | Reveals the wire for the ScriptVal connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulator">vScriptValAccumulator</a>
  <a className="node-chip" href="./vScriptValTimeSpeed">vScriptValTimeSpeed</a>
</div>

{/*
Generated page — node: vScriptValTimeStretch (Core/ScriptVal/Temporal).
Source: fuse vScriptValTimeStretch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
