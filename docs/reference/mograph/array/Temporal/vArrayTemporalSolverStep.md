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
| Operation | Dropdown | `Add` | — |
| Feedback Blend | Float | `0.5` | — |
| Lerp Amount | Float | `0.5` | — |
| Clamp Displacement | Integer | `0` | — |
| Max Displacement | Float | `0.1` | — |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Step | Integer | `1` | — |
| Reset | Integer | `0` | — |
| Input | DATATYPE | `—` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayAccumulator">vArrayAccumulator</a>
  <a className="node-chip" href="./vArrayAccumulatorOBJ">vArrayAccumulatorOBJ</a>
  <a className="node-chip" href="./vArrayTemporalDelta">vArrayTemporalDelta</a>
  <a className="node-chip" href="./vArrayTemporalSmooth">vArrayTemporalSmooth</a>
</div>

{/*
Generated page — node: vArrayTemporalSolverStep (Array/Temporal).
Source: fuse vArrayTemporalSolverStep.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
