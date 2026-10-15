---
sidebar_position: 6
title: vArrayTemporalTimeShift
description: "Time-shift Array text payloads by frame offset."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTemporalTimeShift

Time-shift Array text payloads by frame offset.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTemporalTimeShift.png" alt="vArrayTemporalTimeShift node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Offset | Integer | `-1` | Frames to shift. Negative reads the past. |
| Fallback To Current | Integer | `1` | Uses the current frame when the shifted frame has no data. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayAccumulatorXform">vArrayAccumulatorXform</a>
  <a className="node-chip" href="./vArrayAccumulatorOBJ">vArrayAccumulatorOBJ</a>
  <a className="node-chip" href="./vArrayTemporalDelta">vArrayTemporalDelta</a>
  <a className="node-chip" href="./vArrayTemporalSmooth">vArrayTemporalSmooth</a>
</div>

{/*
Generated page — node: vArrayTemporalTimeShift (Array/Temporal).
Source: fuse vArrayTemporalTimeShift.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
