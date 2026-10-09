---
sidebar_position: 2
title: vScriptValTimeSpeed
description: "Time based operation on ScriptVal objects"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTimeSpeed

Time based operation on ScriptVal objects

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValTimeSpeed.png" alt="vScriptValTimeSpeed node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | ScriptVal | `—` | ScriptVal to re-time. |
| Speed | Float | `0.0` | Playback rate multiplier applied when reading the value across frames — 1.0 is normal speed, 0 with Delay 0 freezes it (useful to stop a vScriptValAccumulator from re-rendering every frame). |
| Delay | Float | `0.0` | Time offset in frames applied before the speed change. |
| Show Input | Integer | `0.0` | Reveals the wire for the ScriptVal connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulator">vScriptValAccumulator</a>
  <a className="node-chip" href="./vScriptValTimeStretch">vScriptValTimeStretch</a>
</div>

{/*
Generated page — node: vScriptValTimeSpeed (Core/ScriptVal/Temporal).
Source: fuse vScriptValTimeSpeed.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
