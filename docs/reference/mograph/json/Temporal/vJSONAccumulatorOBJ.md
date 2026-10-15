---
sidebar_position: 1
title: vJSONAccumulatorOBJ
description: "Temporally concatenate Wavefront OBJ geometry with edge and point array elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAccumulatorOBJ

Temporally concatenate Wavefront OBJ geometry with edge and point array elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAccumulatorOBJ.png" alt="vJSONAccumulatorOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points 1 | DATATYPE | `—` | — |
| Edges 1 | DATATYPE | `—` | — |
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
  <a className="node-chip" href="./vJSONAccumulatorXform">vJSONAccumulatorXform</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSmooth">vJSONTemporalSmooth</a>
  <a className="node-chip" href="./vJSONTemporalSolverStep">vJSONTemporalSolverStep</a>
</div>

{/*
Generated page — node: vJSONAccumulatorOBJ (JSON/Temporal).
Source: fuse vJSONAccumulatorOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
