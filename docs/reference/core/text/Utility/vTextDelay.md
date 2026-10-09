---
sidebar_position: 1
title: vTextDelay
description: "Creates a Delay while passing a Fusion Text object The delay effect is measured in seconds."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextDelay

Creates a Delay while passing a Fusion Text object The delay effect is measured in seconds. This node is implemented internally using the "`bmd.wait()`" function. Among several use cases one can find for a tool that can momentarily pause rendering; it can be used to simulate a slow to render comp task when testing a render farm program. It also has applications when running a command line task via the Vonk ProcessOpen node and the system requires a momentary pause.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextDelay.png" alt="vTextDelay node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The text value passed through unchanged, after the delay. |
| Delay | Float | `—` | Pause duration, in seconds, before Text is passed through. |
| Show Input | Integer | `1.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDump">vTextDump</a>
  <a className="node-chip" href="./vTextExpandEscapedCharacters">vTextExpandEscapedCharacters</a>
  <a className="node-chip" href="./vTextFromCSVViewer">vTextFromCSVViewer</a>
  <a className="node-chip" href="./vTextFromFilename">vTextFromFilename</a>
</div>

{/*
Generated page — node: vTextDelay (Core/Text/Utility).
Source: fuse vTextDelay.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
