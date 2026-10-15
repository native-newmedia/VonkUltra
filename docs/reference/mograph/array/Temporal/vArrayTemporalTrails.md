---
sidebar_position: 7
title: vArrayTemporalTrails
description: "Build temporal trails by concatenating point arrays across frames."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTemporalTrails

Build temporal trails by concatenating point arrays across frames.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTemporalTrails.png" alt="vArrayTemporalTrails node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| History Length | Integer | `12` | Number of frames to collect, including the current one. |
| Frame Step | Integer | `1` | Spacing between collected frames. |
| Oldest First | Integer | `1` | Orders the points from the oldest frame to the newest. Off puts the newest first. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayAccumulatorXform">vArrayAccumulatorXform</a>
  <a className="node-chip" href="./vArrayAccumulatorOBJ">vArrayAccumulatorOBJ</a>
  <a className="node-chip" href="./vArrayTemporalDelta">vArrayTemporalDelta</a>
  <a className="node-chip" href="./vArrayTemporalSmooth">vArrayTemporalSmooth</a>
</div>

{/*
Generated page — node: vArrayTemporalTrails (Array/Temporal).
Source: fuse vArrayTemporalTrails.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
