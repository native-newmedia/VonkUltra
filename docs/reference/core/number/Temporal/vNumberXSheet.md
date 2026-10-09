---
sidebar_position: 3
title: vNumberXSheet
description: "Time based operation on numbers"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberXSheet

Time based operation on numbers

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberXSheet.png" alt="vNumberXSheet node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target Start Time | Integer | `0` | First frame the XSheet range should align to — normally set to the comp's Global Start Time. |
| Xsheet Size | Integer | `30` | Number of frames the XSheet covers. |
| Show Input | Integer | `1.0` | Reveals the wires for the XSheet/XFrameNumbers connections in the Flow view. |
| XSheet | Text | `—` | The exposure-sheet text data to read frame values from. |
| XFrameNumbers | Text | `—` | Output — the frame numbers derived from the XSheet data. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberTimeSpeed">vNumberTimeSpeed</a>
  <a className="node-chip" href="./vNumberTimeStretch">vNumberTimeStretch</a>
</div>

{/*
Generated page — node: vNumberXSheet (Core/Number/Temporal).
Source: fuse vNumberXSheet.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
