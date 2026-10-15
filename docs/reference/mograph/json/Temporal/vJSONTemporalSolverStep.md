---
sidebar_position: 5
title: vJSONTemporalSolverStep
description: "Temporal feedback solver step for JSON arrays."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTemporalSolverStep

Temporal feedback solver step for JSON arrays.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTemporalSolverStep.png" alt="vJSONTemporalSolverStep node" />
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
  <a className="node-chip" href="./vJSONAccumulatorXform">vJSONAccumulatorXform</a>
  <a className="node-chip" href="./vJSONAccumulatorOBJ">vJSONAccumulatorOBJ</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSmooth">vJSONTemporalSmooth</a>
</div>

{/*
Generated page — node: vJSONTemporalSolverStep (JSON/Temporal).
Source: fuse vJSONTemporalSolverStep.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
