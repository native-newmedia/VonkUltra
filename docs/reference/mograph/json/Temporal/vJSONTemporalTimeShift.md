---
sidebar_position: 6
title: vJSONTemporalTimeShift
description: "Time-shift JSON arrays by frame offset."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTemporalTimeShift

Time-shift JSON arrays by frame offset.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTemporalTimeShift.png" alt="vJSONTemporalTimeShift node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Offset | Integer | `-1` | Frames to shift. Negative reads the past. |
| Fallback To Current | Integer | `1` | Uses the current frame when the shifted frame has no data. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONAccumulatorXform">vJSONAccumulatorXform</a>
  <a className="node-chip" href="./vJSONAccumulatorOBJ">vJSONAccumulatorOBJ</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSmooth">vJSONTemporalSmooth</a>
</div>

{/*
Generated page — node: vJSONTemporalTimeShift (JSON/Temporal).
Source: fuse vJSONTemporalTimeShift.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
