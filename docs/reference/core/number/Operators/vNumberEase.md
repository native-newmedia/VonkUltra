---
sidebar_position: 6
title: vNumberEase
description: "Performs a specific interpolation between two numbers during a defined time duration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberEase

Performs a specific interpolation between two numbers during a defined time duration

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberEase.png" alt="vNumberEase node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target Start Time | Float | `1` | Frame the eased interpolation begins on. |
| Duration | Float | `24` | Length of the eased interpolation, in frames. |
| Function | FuID | `—` | Easing curve applied over the interpolation, set via Fusion's native ease-curve picker. |
| Affect | FuID | `—` | Which portion of the interpolation the ease curve is applied to, set via Fusion's native picker. |
| Show Input | Integer | `0.0` | Reveals the wire for the Target Start Time connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberAbsolute">vNumberAbsolute</a>
  <a className="node-chip" href="./vNumberAdd">vNumberAdd</a>
  <a className="node-chip" href="./vNumberCeil">vNumberCeil</a>
  <a className="node-chip" href="./vNumberClamp">vNumberClamp</a>
</div>

{/*
Generated page — node: vNumberEase (Core/Number/Operators).
Source: fuse vNumberEase.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
