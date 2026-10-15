---
sidebar_position: 67
title: vScriptValWave
description: "Animates an Array Wave options include: - Line - Saw - Tri - Square - Sine - Noise"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValWave

Animates an Array Wave options include: - Line - Saw - Tri - Square - Sine - Noise

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValWave.png" alt="vScriptValWave node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wave | FuID | `—` | Wave shape. |
| Start At Frame | Integer | `0` | Frame at which the wave starts. |
| Period | Float | `5.0` | Length of one cycle in frames. |
| Strength | Float | `1.0` | Strength of the wave. |
| Delay | Float | `0.0` | — |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset | Float | `—` | — |
| Repeat Limit | Integer | `1.0` | Number of cycles when Limit is on. Shown when the related option is enabled. |
| Limit | Float | `0.0` | Stops the wave after Repeat Limit cycles. |
| Reverse | Float | `0.0` | Reverses the direction. |
| Falloff | Float | `0.0` | Shape of the falloff. |
| Point Delay | Float | `0.0` | Delay per point index. |
| X Position | Float | `0.0` | Wave offset on X. |
| Y Position | Float | `0.0` | Wave offset on Y. |
| Z Position | Float | `0.0` | Wave offset on Z. |
| Show Input | Integer | `1.0` | — |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnGrid.Output -> vScriptValWave.ScriptVal
    vScriptValWave.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValWave (ScriptVal/Modify).
Source: fuse vScriptValWave.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
