---
sidebar_position: 12
title: vNumberTwoArgumentArcTangent
description: "Returns the arc tangent of y/x (in radians) but uses the signs of both parameters to find the quadrant of the result"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberTwoArgumentArcTangent

Returns the arc tangent of y/x (in radians) but uses the signs of both parameters to find the quadrant of the result

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberTwoArgumentArcTangent.png" alt="vNumberTwoArgumentArcTangent node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X | Float | `0` | Horizontal component. |
| Y | Float | `0` | Vertical component — Output is `atan2(Y, X)` in radians, the two-argument arc tangent that correctly resolves the angle across all four quadrants using the sign of both X and Y. |
| Show Input | Integer | `0.0` | Reveals the wires for the X/Y connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberArcCosine">vNumberArcCosine</a>
  <a className="node-chip" href="./vNumberArcSine">vNumberArcSine</a>
  <a className="node-chip" href="./vNumberArcTangent">vNumberArcTangent</a>
  <a className="node-chip" href="./vNumberCosine">vNumberCosine</a>
</div>

{/*
Generated page — node: vNumberTwoArgumentArcTangent (Core/Number/Trigonometry).
Source: fuse vNumberTwoArgumentArcTangent.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
