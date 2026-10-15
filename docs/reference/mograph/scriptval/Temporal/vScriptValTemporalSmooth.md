---
sidebar_position: 4
title: vScriptValTemporalSmooth
description: "Temporal low-pass smoothing using previous frame data."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTemporalSmooth

Temporal low-pass smoothing using previous frame data.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTemporalSmooth.png" alt="vScriptValTemporalSmooth node" />
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
  <a className="node-chip" href="./vScriptValAccumulatorOBJ">vScriptValAccumulatorOBJ</a>
  <a className="node-chip" href="./vScriptValAccumulatorXform">vScriptValAccumulatorXform</a>
  <a className="node-chip" href="./vScriptValTemporalDelta">vScriptValTemporalDelta</a>
  <a className="node-chip" href="./vScriptValTemporalSolverStep">vScriptValTemporalSolverStep</a>
</div>

{/*
Generated page — node: vScriptValTemporalSmooth (ScriptVal/Temporal).
Source: fuse vScriptValTemporalSmooth.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
