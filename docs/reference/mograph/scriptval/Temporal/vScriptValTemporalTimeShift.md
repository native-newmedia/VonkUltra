---
sidebar_position: 6
title: vScriptValTemporalTimeShift
description: "Time-shift ScriptVal arrays by frame offset."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTemporalTimeShift

Time-shift ScriptVal arrays by frame offset.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTemporalTimeShift.png" alt="vScriptValTemporalTimeShift node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Offset | Integer | `-1` | Frames to shift. Negative reads the past. |
| Fallback To Current | Integer | `1` | Uses the current frame when the shifted frame has no data. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulatorOBJ">vScriptValAccumulatorOBJ</a>
  <a className="node-chip" href="./vScriptValAccumulatorXform">vScriptValAccumulatorXform</a>
  <a className="node-chip" href="./vScriptValTemporalDelta">vScriptValTemporalDelta</a>
  <a className="node-chip" href="./vScriptValTemporalSmooth">vScriptValTemporalSmooth</a>
</div>

{/*
Generated page — node: vScriptValTemporalTimeShift (ScriptVal/Temporal).
Source: fuse vScriptValTemporalTimeShift.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
