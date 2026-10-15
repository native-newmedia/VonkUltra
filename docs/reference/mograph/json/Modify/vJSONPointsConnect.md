---
sidebar_position: 40
title: vJSONPointsConnect
description: "Connect points in an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPointsConnect

Connect points in an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPointsConnect.png" alt="vJSONPointsConnect node" />
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
vJSONLissajouseSpline1.Output->  vJSONUnPacker1.ArrayA
    vJSONLissajouseSpline2.Output->  vJSONUnPacker2.ArrayA
    vJSONUnPacker1.OutputArray -> vJSONPointsConnect.ArrayA
    vJSONUnPacker2.OutputArray -> vJSONPointsConnect.ArrayB
    vJSONPointsConnect.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONPointsConnect (JSON/Modify).
Source: fuse vJSONPointsConnect.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
