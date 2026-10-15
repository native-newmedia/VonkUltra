---
sidebar_position: 1
title: vScriptValMaterialEasing
description: "Animate points using Material Design 3 easing with staggered offsets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMaterialEasing

Animate points using Material Design 3 easing with staggered offsets

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMaterialEasing.png" alt="vScriptValMaterialEasing node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Time | Float | `0.0` | Animation time. Animate this value to play the easing. |
| Start Offset | Float | `0.0` | Time before the animation starts. |
| Duration | Float | `1.0` | Time the easing takes to complete. |
| Easing Type | Dropdown | `Emphasized Accelerate` | One of 20 Material Design 3 easing curves. A preview is drawn in the Preview Curve section. |
| Offset X | Float | `0.0` | Distance each point moves along the axis by the end of the animation. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Y | Float | `0.0` | Distance each point moves along the axis by the end of the animation. |
| Offset Z | Float | `0.0` | Distance each point moves along the axis by the end of the animation. |
| Stagger Delay | Float | `0.1` | Start delay per point, multiplied by the delay from Stagger Mode. |
| Stagger Mode | Dropdown | `Index Order` | Index Order, Distance from Center, or Random. |
| Falloff X | Float | `0.0` | Shifts the center used by Distance from Center. |
| Falloff Y | Float | `0.0` | Shifts the center used by Distance from Center. |
| Falloff Z | Float | `0.0` | Shifts the center used by Distance from Center. |
| Scale factor | Float | `0.0` | Converts distance into delay for Distance from Center. |
| Input | ScriptVal | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsJitter">vScriptValPointsJitter</a>
  <a className="node-chip" href="./vScriptValStagger">vScriptValStagger</a>
</div>

{/*
Generated page — node: vScriptValMaterialEasing (ScriptVal/Animate).
Source: fuse vScriptValMaterialEasing.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
