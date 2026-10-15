---
sidebar_position: 2
title: vScriptValPointsJitter
description: "Add jitter to ScriptVal array points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsJitter

Add jitter to ScriptVal array points.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsJitter.png" alt="vScriptValPointsJitter node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | ScriptVal | `—` | Data to process. |
| Jitter X | Float | `0.1` | Maximum jitter per axis. |
| Jitter Y | Float | `0.1` | Maximum jitter per axis. |
| Jitter Z | Float | `0.1` | Maximum jitter per axis. |
| Seed | Integer | `42` | Random seed. Each point gets its own offset from it. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Time | Float | `0` | Speed of the wobble. At 0 the wobble is frozen. |
| Uniform Jitter | Integer | `1.0` | On: even spread from minus to plus Jitter. Off: bell-curve spread. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValMaterialEasing">vScriptValMaterialEasing</a>
  <a className="node-chip" href="./vScriptValStagger">vScriptValStagger</a>
</div>

{/*
Generated page — node: vScriptValPointsJitter (ScriptVal/Animate).
Source: fuse vScriptValPointsJitter.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
