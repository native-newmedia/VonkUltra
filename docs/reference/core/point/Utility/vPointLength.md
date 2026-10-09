---
sidebar_position: 3
title: vPointLength
description: "Measure the distance between two Fusion Point objects The output from this node is a Number datatype that reports the distance between Point1 and Point2."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointLength

Measure the distance between two Fusion Point objects The output from this node is a Number datatype that reports the distance between Point1 and Point2. If you have an image loaded in the viewer window, and then select the vPointLength node to edit its attributes in the Inspector tab, you will see the Point1 and Point2 locator handle overlays onscreen.

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointLength.png" alt="vPointLength node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point1 | Point | `—` | First point. |
| Point2 | Point | `—` | Second point — Output is the distance between Point1 and Point2. Selecting this node shows both locator handles overlaid in the viewer. |
| Show Input | Integer | `1.0` | Reveals the wires for the Point1/Point2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointAngle">vPointAngle</a>
  <a className="node-chip" href="./vPointDelay">vPointDelay</a>
  <a className="node-chip" href="./vPointTween">vPointTween</a>
</div>

{/*
Generated page — node: vPointLength (Core/Point/Utility).
Source: fuse vPointLength.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
