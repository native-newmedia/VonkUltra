---
sidebar_position: 52
title: vScriptValRippleDisplacer
description: "Creates animated displacement with time-offset arrays"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRippleDisplacer

Creates animated displacement with time-offset arrays

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRippleDisplacer.png" alt="vScriptValRippleDisplacer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | ScriptVal | `—` | Data to process. |
| Time | Float | `0.0` | Offsets the noise or wave in time. |
| Animation Speed | Float | `1.0` | Speed of the animation over time. 0 is static. |
| Auto Animate | Integer | `1.0` | Animates the effect over time. |
| Displacement Mode | Dropdown | `Radial (from center)` | Direction of the displacement. Options: Radial (from center), Z-Axis Only, XYZ Uniform. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Amplitude | Float | `2.0` | Strength of the displacement. |
| Frequency | Float | `1.0` | Frequency of the noise or wave. |
| Wave Type | Dropdown | `Sine` | Shape of the wave. Options: Sine, Cosine, Triangle, Square. |
| Offset Multiplier | Float | `0.3` | Multiplies the displacement. |
| "Enable Array " .. i | Integer | `1.0` | — |
| "Amplitude " .. i | Float | `1.0` | — |
| "Frequency " .. i | Float | `1.0` | — |
| "Time Offset " .. i | Float | `0.0` | — |
| Debug Mode | Integer | `0.0` | Prints debug information to the console. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValRippleDisplacer (ScriptVal/Modify).
Source: fuse vScriptValRippleDisplacer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
