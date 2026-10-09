---
sidebar_position: 1
title: vNumberDelay
description: "Creates a Delay while passing a Fusion Number object The delay effect is measured in seconds."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberDelay

Creates a Delay while passing a Fusion Number object The delay effect is measured in seconds. This node is implemented internally using the "`bmd.wait()`" function. Among several use cases one can find for a tool that can momentarily pause rendering; it can be used to simulate a slow to render comp task when testing a render farm program. It also has applications when running a command line task via the Vonk ProcessOpen node and the system requires a momentary pause.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberDelay.png" alt="vNumberDelay node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number | Float | `—` | The number value passed through unchanged, after the delay. |
| Delay | Float | `—` | Pause duration, in seconds, before Number is passed through. |
| Show Input | Integer | `1.0` | Reveals the wire for the Number connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberEndPID">vNumberEndPID</a>
  <a className="node-chip" href="./vNumberViewer">vNumberViewer</a>
</div>

{/*
Generated page — node: vNumberDelay (Core/Number/Utility).
Source: fuse vNumberDelay.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
