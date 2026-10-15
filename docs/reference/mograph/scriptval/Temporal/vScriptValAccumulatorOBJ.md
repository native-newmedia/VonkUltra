---
sidebar_position: 1
title: vScriptValAccumulatorOBJ
description: "Temporally concatenate Wavefront OBJ geometry with edge and point ScriptVal arrays"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAccumulatorOBJ

Temporally concatenate Wavefront OBJ geometry with edge and point ScriptVal arrays

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValAccumulatorOBJ.png" alt="vScriptValAccumulatorOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points 1 | ScriptVal | `—` | — |
| Edges 1 | ScriptVal | `—` | — |
| Start Frame | Integer | `0` | First frame to read. |
| End Frame | Integer | `0` | Last frame to read. |
| Step | Float | `1` | Frame increment between samples. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | Shows the frame range controls. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAccumulatorXform">vScriptValAccumulatorXform</a>
  <a className="node-chip" href="./vScriptValTemporalDelta">vScriptValTemporalDelta</a>
  <a className="node-chip" href="./vScriptValTemporalSmooth">vScriptValTemporalSmooth</a>
  <a className="node-chip" href="./vScriptValTemporalSolverStep">vScriptValTemporalSolverStep</a>
</div>

{/*
Generated page — node: vScriptValAccumulatorOBJ (ScriptVal/Temporal).
Source: fuse vScriptValAccumulatorOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
