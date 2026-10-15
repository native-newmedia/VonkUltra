---
sidebar_position: 7
title: vJSONTemporalTrails
description: "Build temporal trails by concatenating point arrays across frames."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTemporalTrails

Build temporal trails by concatenating point arrays across frames.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTemporalTrails.png" alt="vJSONTemporalTrails node" />
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
  <a className="node-chip" href="./vJSONAccumulatorXform">vJSONAccumulatorXform</a>
  <a className="node-chip" href="./vJSONAccumulatorOBJ">vJSONAccumulatorOBJ</a>
  <a className="node-chip" href="./vJSONTemporalDelta">vJSONTemporalDelta</a>
  <a className="node-chip" href="./vJSONTemporalSmooth">vJSONTemporalSmooth</a>
</div>

{/*
Generated page — node: vJSONTemporalTrails (JSON/Temporal).
Source: fuse vJSONTemporalTrails.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
