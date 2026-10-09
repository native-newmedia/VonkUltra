---
sidebar_position: 5
title: vGradientSort
description: "Sort the gradient by color"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientSort

Sort the gradient by color

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientSort.png" alt="vGradientSort node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Gradient | Gradient | `—` | Gradient whose colour stops are reordered by Sort Mode, keeping their original positions/values. |
| Sort Mode | Dropdown | `0.0` | Colour property to sort by: Hue & Saturation, Hue, Saturation, Value, or Brightness. |
| Threshold | Float | `0.1` | Minimum hue difference before two stops are treated as distinct when Sort Mode is Hue & Saturation — stops closer than this are compared by saturation instead. Hue & Saturation mode only. |
| Show Dump | Integer | `0.0` | Prints the sorted gradient to the console each frame. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientColorCount">vGradientColorCount</a>
  <a className="node-chip" href="./vGradientMerge">vGradientMerge</a>
  <a className="node-chip" href="./vGradientNormalizePosition">vGradientNormalizePosition</a>
  <a className="node-chip" href="./vGradientSlice">vGradientSlice</a>
</div>

{/*
Generated page — node: vGradientSort (Core/Gradient/Utility).
Source: fuse vGradientSort.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
