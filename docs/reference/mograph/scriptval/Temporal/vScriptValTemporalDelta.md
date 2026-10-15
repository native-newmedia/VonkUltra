---
sidebar_position: 3
title: vScriptValTemporalDelta
description: "Per-element temporal delta between current and previous frame."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTemporalDelta

Per-element temporal delta between current and previous frame.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTemporalDelta.png" alt="vScriptValTemporalDelta node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Frame Step | Integer | `1` | Frames back to compare with. |
| Output Mode | Dropdown | `OUTPUT_MODE_DELTA` | Delta, or Position + Delta. |
| Fallback To Current | Integer | `1` | Uses the current frame when no earlier frame exists, so the first change is zero. |
| Offset X | Float | `0` | Added to every output point. |
| Offset Y | Float | `0` | Added to every output point. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Z | Float | `0` | Added to every output point. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulatorOBJ">vScriptValAccumulatorOBJ</a>
  <a className="node-chip" href="./vScriptValAccumulatorXform">vScriptValAccumulatorXform</a>
  <a className="node-chip" href="./vScriptValTemporalSmooth">vScriptValTemporalSmooth</a>
  <a className="node-chip" href="./vScriptValTemporalSolverStep">vScriptValTemporalSolverStep</a>
</div>

{/*
Generated page — node: vScriptValTemporalDelta (ScriptVal/Temporal).
Source: fuse vScriptValTemporalDelta.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
