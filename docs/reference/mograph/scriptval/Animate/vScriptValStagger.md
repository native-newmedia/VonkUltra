---
sidebar_position: 3
title: vScriptValStagger
description: "Animate points using staggered offsets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValStagger

Animate points using staggered offsets

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValStagger.png" alt="vScriptValStagger node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Linear` | Offset curve: Linear, Wave, Exponential, Pulse Wave, Triangle Wave, Sawtooth Wave. |
| Stagger X | Float | `0.0` | Per-axis strength of the stagger. |
| Stagger Y | Float | `0.0` | Per-axis strength of the stagger. |
| Stagger Z | Float | `0.0` | Per-axis strength of the stagger. |
| Stagger Amount X | Float | `0.0` | Per-axis offset size, multiplied by Stagger. |

<details>
<summary>+12 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Stagger Amount Y | Float | `0.0` | Per-axis offset size, multiplied by Stagger. |
| Stagger Amount Z | Float | `0.0` | Per-axis offset size, multiplied by Stagger. |
| Stagger Delay | Float | `0.0` | Delay between consecutive points. |
| Wave Frequency | Float | `0.01` | Curve speed. Shown for Wave, Pulse Wave, Triangle Wave and Sawtooth Wave. |
| Clamp Output | Float | `0.0` | — |
| Min Value | Float | `0` | — |
| Max Value | Float | `1` | — |
| Reverse Index | Float | `1.0` | — |
| Yoyo | Float | `1.0` | — |
| Steps (for Step/Staircase) | Float | `5` | — |
| Pulse Width (for Pulse Wave) | Float | `0.5` | — |
| Input | ScriptVal | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValMaterialEasing">vScriptValMaterialEasing</a>
  <a className="node-chip" href="./vScriptValPointsJitter">vScriptValPointsJitter</a>
</div>

{/*
Generated page — node: vScriptValStagger (ScriptVal/Animate).
Source: fuse vScriptValStagger.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
