---
sidebar_position: 40
title: vArrayPointsConnect
description: "Connect points in an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointsConnect

Connect points in an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsConnect.png" alt="vArrayPointsConnect node" />
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
vArrayLissajouseSpline1.Output->  vArrayUnPacker1.ArrayA
    vArrayLissajouseSpline2.Output->  vArrayUnPacker2.ArrayA
    vArrayUnPacker1.OutputArray -> vArrayPointsConnect.ArrayA
    vArrayUnPacker2.OutputArray -> vArrayPointsConnect.ArrayB
    vArrayPointsConnect.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayPointsConnect (Array/Modify).
Source: fuse vArrayPointsConnect.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
