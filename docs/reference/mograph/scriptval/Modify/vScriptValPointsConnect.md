---
sidebar_position: 40
title: vScriptValPointsConnect
description: "Connect points in an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsConnect

Connect points in an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsConnect.png" alt="vScriptValPointsConnect node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Alternate` | How the two arrays are combined. Options: Alternate, Append. |
| Reverse B | Integer | `0` | Reverses the order of the second array. |
| Connection | Float | `1` | Connection style. |
| Hide Unconnected | Integer | `0` | Removes points that have no connection. |
| Close Loop | Integer | `0` | Connects the last point to the first. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Drop Duplicate Seam | Integer | `1` | Removes the repeated point at the seam. Shown when the related option is enabled. |
| Input A | DATATYPE | `—` | First input. |
| Input B | DATATYPE | `—` | Second input. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValLissajouseSpline1.Output-> vScriptValUnPacker1.ScriptVal
    vScriptValLissajouseSpline2.Output-> vScriptValUnPacker2.ScriptVal
    vScriptValUnPacker1.ScriptVal1 -> vScriptValPointsConnect.ScriptVal1
    vScriptValUnPacker2.ScriptVal1 -> vScriptValPointsConnect.ScriptVal2
    vScriptValPointsConnect.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValPointsConnect (ScriptVal/Modify).
Source: fuse vScriptValPointsConnect.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
