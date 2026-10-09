---
sidebar_position: 5
title: vPointMix
description: "Performs linear interpolation between two Fusion Point objects"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointMix

Performs linear interpolation between two Fusion Point objects

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointMix.png" alt="vPointMix node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point1 | Point | `—` | Point at Weight = 0. |
| Point2 | Point | `—` | Point at Weight = 1. |
| Weight | Float | `0` | Interpolation factor between Point1 (0) and Point2 (1). Values outside 0–1 extrapolate beyond either point. |
| Show Input | Integer | `1.0` | Reveals the wires for the Point1/Point2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointAbsolute">vPointAbsolute</a>
  <a className="node-chip" href="./vPointAdd">vPointAdd</a>
  <a className="node-chip" href="./vPointClamp">vPointClamp</a>
  <a className="node-chip" href="./vPointDivide">vPointDivide</a>
</div>

{/*
Generated page — node: vPointMix (Core/Point/Operators).
Source: fuse vPointMix.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
