---
sidebar_position: 7
title: vScriptValTemporalTrails
description: "Build temporal trails by concatenating point arrays across frames."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTemporalTrails

Build temporal trails by concatenating point arrays across frames.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTemporalTrails.png" alt="vScriptValTemporalTrails node" />
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
  <a className="node-chip" href="./vScriptValAccumulatorOBJ">vScriptValAccumulatorOBJ</a>
  <a className="node-chip" href="./vScriptValAccumulatorXform">vScriptValAccumulatorXform</a>
  <a className="node-chip" href="./vScriptValTemporalDelta">vScriptValTemporalDelta</a>
  <a className="node-chip" href="./vScriptValTemporalSmooth">vScriptValTemporalSmooth</a>
</div>

{/*
Generated page — node: vScriptValTemporalTrails (ScriptVal/Temporal).
Source: fuse vScriptValTemporalTrails.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
