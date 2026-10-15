---
sidebar_position: 2
title: vScriptValAccumulatorXform
description: "Temporally concatenate array elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAccumulatorXform

Temporally concatenate array elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vScriptValAccumulatorXform yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Start Frame | Integer | `0` | First frame to read. |
| End Frame | Integer | `0` | Last frame to read. |
| Step | Float | `1` | Frame increment between samples. |
| Offset X | Float | `0` | Offset added per sample. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Y | Float | `0` | Offset added per sample. |
| Offset Z | Float | `0` | Offset added per sample. |
| Rotate X | Float | `0` | Rotation added per sample. |
| Rotate Y | Float | `0` | Rotation added per sample. |
| Rotate Z | Float | `0` | Rotation added per sample. |
| Show Input | Integer | `0.0` | Shows the frame range and transform controls. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulatorOBJ">vScriptValAccumulatorOBJ</a>
  <a className="node-chip" href="./vScriptValTemporalDelta">vScriptValTemporalDelta</a>
  <a className="node-chip" href="./vScriptValTemporalSmooth">vScriptValTemporalSmooth</a>
  <a className="node-chip" href="./vScriptValTemporalSolverStep">vScriptValTemporalSolverStep</a>
</div>

{/*
Generated page — node: vScriptValAccumulatorXform (ScriptVal/Temporal).
Source: fuse vScriptValAccumulatorXform.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
