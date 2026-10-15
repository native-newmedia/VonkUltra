---
sidebar_position: 2
title: vJSONAccumulatorXform
description: "Temporally concatenate array elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAccumulatorXform

Temporally concatenate array elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAccumulatorXform.png" alt="vJSONAccumulatorXform node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Start Frame | Integer | `0` | First frame to read. |
| End Frame | Integer | `0` | Last frame to read. |
| Step | Float | `1` | Frame increment between samples. |
| Offset X | Float | `0` | — |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Y | Float | `0` | — |
| Offset Z | Float | `0` | — |
| Rotate X | Float | `0` | — |
| Rotate Y | Float | `0` | — |
| Rotate Z | Float | `0` | — |
| Show Input | Integer | `0.0` | Shows the frame range controls. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONAccumulatorOBJ">vJSONAccumulatorOBJ</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSmooth">vJSONTemporalSmooth</a>
  <a className="node-chip" href="./vJSONTemporalSolverStep">vJSONTemporalSolverStep</a>
</div>

{/*
Generated page — node: vJSONAccumulatorXform (JSON/Temporal).
Source: fuse vJSONAccumulatorXform.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
