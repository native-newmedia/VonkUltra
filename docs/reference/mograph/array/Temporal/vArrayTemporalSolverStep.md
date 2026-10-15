---
sidebar_position: 5
title: vArrayTemporalSolverStep
description: "Temporal feedback solver step for Array text payloads."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTemporalSolverStep

Temporal feedback solver step for Array text payloads.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTemporalSolverStep.png" alt="vArrayTemporalSolverStep node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `Add` | Add, Multiply or Lerp. |
| Feedback Blend | Float | `0.5` | 0 returns the current value, 1 returns the combined result. |
| Lerp Amount | Float | `0.5` | Mix used when Operation is Lerp. |
| Clamp Displacement | Integer | `0` | Limits how far the combined value may move from the current value. |
| Max Displacement | Float | `0.1` | Largest allowed change per value. Used when Clamp Displacement is on. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Step | Integer | `1` | Frames back to combine with. |
| Reset | Integer | `0` | Ignores the earlier frame. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayAccumulatorXform">vArrayAccumulatorXform</a>
  <a className="node-chip" href="./vArrayAccumulatorOBJ">vArrayAccumulatorOBJ</a>
  <a className="node-chip" href="./vArrayTemporalDelta">vArrayTemporalDelta</a>
  <a className="node-chip" href="./vArrayTemporalSmooth">vArrayTemporalSmooth</a>
</div>

{/*
Generated page — node: vArrayTemporalSolverStep (Array/Temporal).
Source: fuse vArrayTemporalSolverStep.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
