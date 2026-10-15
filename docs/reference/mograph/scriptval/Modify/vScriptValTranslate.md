---
sidebar_position: 64
title: vScriptValTranslate
description: "Transforms array positions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTranslate

Transforms array positions

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTranslate.png" alt="vScriptValTranslate node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `—` | Moves the points along X. |
| Y Offset | Float | `—` | Moves the points along Y. |
| Z Offset | Float | `—` | Moves the points along Z. |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale along X. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. Shown when the related option is enabled. |
| Input | DATATYPE | `—` | Data to process. |
| Show Input | Integer | `0.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnGrid.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValTranslate.ScriptVal
    vScriptValTranslate.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValWave.ScriptVal
    vScriptValWave.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="./vScriptValPacker">vScriptValPacker</a>
  <a className="node-chip" href="./vScriptValWave">vScriptValWave</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValTranslate (ScriptVal/Modify).
Source: fuse vScriptValTranslate.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
