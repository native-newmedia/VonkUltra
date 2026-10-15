---
sidebar_position: 49
title: vScriptValRepeatTransform
description: "Repeat a ScriptVal array by transforming it x times (v8: Instance IDs)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRepeatTransform

Repeat a ScriptVal array by transforming it x times (v8: Instance IDs)

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRepeatTransform.png" alt="vScriptValRepeatTransform node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Mode | Dropdown | `Linear` | Arrangement of the copies. Options: Linear, Circular, Spiral, Grid 2D, Grid 3D. |
| Number of Times | Integer | `1` | Number of copies. |
| Radius | Float | `0.1` | Radius of the effect. Shown when the related option is enabled. |
| Spiral Height | Float | `0.1` | Height of the spiral. Shown when the related option is enabled. |
| Grid Columns (X) | Integer | `2` | Columns of the grid. Shown when the related option is enabled. |

<details>
<summary>+39 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Grid Rows (Y) | Integer | `2` | Rows of the grid. Shown when the related option is enabled. |
| Grid Depth (Z) | Integer | `3` | Layers of the grid. Shown when the related option is enabled. |
| Grid Spacing X | Float | `0.1` | Spacing along X. Shown when the related option is enabled. |
| Grid Spacing Y | Float | `0.1` | Spacing along Y. Shown when the related option is enabled. |
| Grid Spacing Z | Float | `0.1` | Spacing along Z. Shown when the related option is enabled. |
| Translate X | Float | `0` | Translation along X. |
| Translate Y | Float | `0` | Translation along Y. |
| Translate Z | Float | `0` | Translation along Z. |
| Scale X | Float | `0` | Scale along X. |
| Scale Y | Float | `0` | Scale along Y. |
| Scale Z | Float | `0` | Scale along Z. |
| Rotation X | Float | `0` | Rotation per copy around X. |
| Rotation Y | Float | `0` | Rotation per copy around Y. |
| Rotation Z | Float | `0` | Rotation per copy around Z. |
| Rotation Order | Dropdown | `XYZ` | Order in which the rotations are applied. Options: XYZ, YXZ, ZYX, XZY, YZX, ZXY. |
| Pivot X | Float | `0` | Pivot X. |
| Pivot Y | Float | `0` | Pivot Y. |
| Pivot Z | Float | `0` | Pivot Z. |
| Enable Random | Float | `0` | Adds random variation to each copy. |
| Random Seed | Integer | `0` | Seed of the random generator. |
| Random Translate | Float | `0` | Random translation range. |
| Random Rotate | Float | `0` | Random rotation range. |
| Random Scale | Float | `0` | Random scale range. |
| Enable Shake | Float | `0` | Animates a shake on each copy. |
| Position Amplitude | Float | `0.0` | Shake amplitude for position. |
| Rotation Amplitude | Float | `0.0` | Shake amplitude for rotation. |
| Scale Amplitude | Float | `0.0` | Shake amplitude for scale. |
| Frequency | Float | `1.0` | Frequency of the noise or wave. |
| Speed | Float | `0.0` | Speed of the animation. |
| Phase | Float | `0.0` | Shifts the wave in phase. |
| Seed | Integer | `0.0` | Seed of the random generator. |
| Lag | Float | `0.0` | Delay between copies in the animation. |
| Cumulative Lag | Float | `0.0` | Adds the lag of every previous copy. |
| Reverse | Float | `0.0` | Reverses the direction. |
| Mirror X Every Other | Float | `0` | Mirrors every second copy along X. |
| Mirror Y Every Other | Float | `0` | Mirrors every second copy along Y. |
| Mirror Z Every Other | Float | `0` | Mirrors every second copy along Z. |
| Input Array | ScriptVal | `—` | — |
| Position Array | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValRepeatTransform (ScriptVal/Modify).
Source: fuse vScriptValRepeatTransform.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
