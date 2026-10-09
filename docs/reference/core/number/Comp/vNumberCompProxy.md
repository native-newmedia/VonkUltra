---
sidebar_position: 6
title: vNumberCompProxy
description: "Returns the comp's Proxy state The True and False inputs on the node let you define a custom value that is returned for the Proxy logic state."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberCompProxy

Returns the comp's Proxy state The True and False inputs on the node let you define a custom value that is returned for the Proxy logic state. Setting the True and False inputs to a value of "True = 2" & "False = 1" makes it easier to directly connect the vNumberCompProxy output to a Switch node's Which input that starts the first switchable input connection as "Which = 1". Note: There is a slight instability that can occur with this node if you rapidly toggle the "Prx" state On/Off while playing back footage in the Fusion timeline with the vNumberCompProxy node active. A solution to this issue is being explored.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberCompProxy.png" alt="vNumberCompProxy node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| True | Float | `1` | Custom value returned when the comp's Proxy state is on. |
| False | Float | `0` | Custom value returned when the comp's Proxy state is off. |
| Show Input | Integer | `0.0` | Reveals the wires for the True/False connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberCompCurrentTime">vNumberCompCurrentTime</a>
  <a className="node-chip" href="./vNumberCompFPS">vNumberCompFPS</a>
  <a className="node-chip" href="./vNumberCompFrameFormat">vNumberCompFrameFormat</a>
  <a className="node-chip" href="./vNumberCompGlobalEnd">vNumberCompGlobalEnd</a>
</div>

{/*
Generated page — node: vNumberCompProxy (Core/Number/Comp).
Source: fuse vNumberCompProxy.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
