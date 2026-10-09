---
sidebar_position: 2
title: vPointDelay
description: "Creates a Delay while passing a Fusion Point object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointDelay

Creates a Delay while passing a Fusion Point object

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointDelay.png" alt="vPointDelay node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point | Point | `—` | Point passed through unchanged after the delay. |
| Delay | Float | `—` | Pause duration in seconds, implemented via `bmd.wait()`. Useful for throttling command-line tasks that need a moment to complete, or for simulating a slow render step. |
| Show Input | Integer | `1.0` | Reveals the wire for the Point connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointAngle">vPointAngle</a>
  <a className="node-chip" href="./vPointLength">vPointLength</a>
  <a className="node-chip" href="./vPointTween">vPointTween</a>
</div>

{/*
Generated page — node: vPointDelay (Core/Point/Utility).
Source: fuse vPointDelay.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
