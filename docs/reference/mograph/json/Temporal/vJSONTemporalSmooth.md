---
sidebar_position: 4
title: vJSONTemporalSmooth
description: "Temporal low-pass smoothing for JSON arrays."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTemporalSmooth

Temporal low-pass smoothing for JSON arrays.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTemporalSmooth.png" alt="vJSONTemporalSmooth node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Smooth Factor | Float | `0.2` | Weight of the current frame. 1 passes it through, 0 repeats the earlier frame. |
| Frame Step | Integer | `1` | Frames back to blend with. |
| Fallback To Current | Integer | `1` | Uses the current frame when no earlier frame exists. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONAccumulatorXform">vJSONAccumulatorXform</a>
  <a className="node-chip" href="./vJSONAccumulatorOBJ">vJSONAccumulatorOBJ</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSolverStep">vJSONTemporalSolverStep</a>
</div>

{/*
Generated page — node: vJSONTemporalSmooth (JSON/Temporal).
Source: fuse vJSONTemporalSmooth.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
