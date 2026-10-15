---
sidebar_position: 4
title: vArrayTemporalSmooth
description: "Temporal low-pass smoothing for Array text payloads."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTemporalSmooth

Temporal low-pass smoothing for Array text payloads.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTemporalSmooth.png" alt="vArrayTemporalSmooth node" />
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
  <a className="node-chip" href="./vArrayAccumulatorXform">vArrayAccumulatorXform</a>
  <a className="node-chip" href="./vArrayAccumulatorOBJ">vArrayAccumulatorOBJ</a>
  <a className="node-chip" href="./vArrayTemporalDelta">vArrayTemporalDelta</a>
  <a className="node-chip" href="./vArrayTemporalSolverStep">vArrayTemporalSolverStep</a>
</div>

{/*
Generated page — node: vArrayTemporalSmooth (Array/Temporal).
Source: fuse vArrayTemporalSmooth.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
