---
sidebar_position: 1
title: vImageDelay
description: "Creates a Delay while passing a Fusion Image object The delay effect is measured in seconds."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageDelay

Creates a Delay while passing a Fusion Image object The delay effect is measured in seconds. This node is implemented internally using the "`bmd.wait()`" function. Among several use cases one can find for a tool that can momentarily pause rendering; it can be used to simulate a slow to render comp task when testing a render farm program. It also has applications when running a command line task via the Vonk ProcessOpen node and the system requires a momentary pause.

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageDelay.png" alt="vImageDelay node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image passed through unchanged after the delay. |
| Delay | Float | `—` | Pause duration in seconds, implemented via `bmd.wait()`. Useful for throttling command-line tasks (e.g. vImageProcessOpen) that need a moment to complete, or for simulating a slow render step. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |



{/*
Generated page — node: vImageDelay (Core/Image/Utility).
Source: fuse vImageDelay.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
