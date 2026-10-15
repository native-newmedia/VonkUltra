---
sidebar_position: 17
title: vScriptValForEachIndexed
description: "Apply indexed/grouped transforms per point in a single pass."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValForEachIndexed

Apply indexed/grouped transforms per point in a single pass.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValForEachIndexed.png" alt="vScriptValForEachIndexed node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Offset X by Index` | Transform applied per index or per group. Options: Offset X by Index, Offset Y by Index, Offset Z by Index, Offset X by Group, Offset Y by Group, Offset Z by Group, Scale by Index, Rotate X by Group, Rotate Y by Group, Rotate Z by Group, Random Offset X by Group, Random Offset Y by Group, Random Offset Z by Group, Random Offset X by Index, Random Offset Y by Index, Random Offset Z by Index. |
| Group Size | Integer | `8` | Number of points per group. |
| Index Amount | Float | `0.01` | Amount applied per index. |
| Group Amount | Float | `0.1` | Amount applied per group. |
| Random Min | Float | `-0.1` | Lower end of the random range. Shown when the related option is enabled. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Max | Float | `0.1` | Upper end of the random range. Shown when the related option is enabled. |
| Auto Animate | Integer | `0` | Animates the effect over time. |
| Speed | Float | `1.0` | Speed of the animation. Shown when the related option is enabled. |
| Duration (frames) | Integer | `30` | Length of the animation in frames. Shown when the related option is enabled. |
| Easing | Dropdown | `Linear` | Easing of the animation. Options: Linear, Ease In, Ease Out, Ease In-Out, Ease Out-Back. Shown when the related option is enabled. |
| Loop Mode | Dropdown | `Off` | Looping or waveform of the animation. Options: Off, Loop, Ping-Pong, Step Mode, Sine Wave, Triangle Wave, Sawtooth Wave. Shown when the related option is enabled. |
| Input | DATATYPE | `—` | Data to process. |
| Mask | DATATYPE | `—` | Mask with one 0 or 1 value per element. |
| Invert Mask | Integer | `0` | Swaps masked and unmasked areas. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValForEachIndexed (ScriptVal/Modify).
Source: fuse vScriptValForEachIndexed.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
