---
sidebar_position: 4
title: vGradientSlice
description: "Extracts a range of color indexes from a Gradient"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientSlice

Extracts a range of color indexes from a Gradient

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientSlice.png" alt="vGradientSlice node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Gradient | Gradient | `—` | Gradient to slice. |
| Start | Integer | `1` | 1-based index of the first colour stop to keep. |
| Stop | Integer | `1` | 1-based index of the last colour stop to keep. |
| Show Dump | Integer | `0.0` | Prints the sliced gradient to the console each frame. |
| Show Input | Integer | `1.0` | Reveals the wire for the Gradient connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientColorCount">vGradientColorCount</a>
  <a className="node-chip" href="./vGradientMerge">vGradientMerge</a>
  <a className="node-chip" href="./vGradientNormalizePosition">vGradientNormalizePosition</a>
  <a className="node-chip" href="./vGradientSort">vGradientSort</a>
</div>

{/*
Generated page — node: vGradientSlice (Core/Gradient/Utility).
Source: fuse vGradientSlice.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
