---
sidebar_position: 1
title: v3DDelay
description: "Creates a delay while passing a Fusion 3D object."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# v3DDelay

Creates a delay while passing a Fusion 3D object. The "Input 3D" field is used to connect 3D nodes that interact with Fusion's 3D workspace. The delay effect is measured in seconds. This node is implemented internally using the "bmd.wait()" function. Among several use cases one can find for a tool that can momentarily pause rendering; it can be used to simulate a slow to render comp task when testing a render farm program. It also has applications when running a command line task via the Vonk 3DProcessOpen node the system requires a momentary pause to work reliably.

<div className="node-badge-row">
  <span className="node-badge">Core / 3D</span>
  <span className="node-badge">3D</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/3d/v3DDelay.png" alt="v3DDelay node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input 3D | DataType3D | `—` | 3D data passed through unchanged after the delay. |
| Delay | Float | `—` | Pause duration in seconds, implemented via `bmd.wait()`. Useful for throttling command-line tasks (e.g. v3DProcessOpen) that need a moment to complete, or for simulating a slow render step. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input 3D connection in the Flow view. |



{/*
Generated page — node: v3DDelay (Core/3D/Utility).
Source: fuse v3DDelay.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
