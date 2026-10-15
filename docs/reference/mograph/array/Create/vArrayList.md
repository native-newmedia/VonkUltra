---
sidebar_position: 29
title: vArrayList
description: "Creates an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayList

Creates an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayList.png" alt="vArrayList node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Length | Integer | `1` | Number of values. |
| Pack To: | Dropdown | `X` | Groups the values as X, X Y or X Y Z. |
|  [ " .. j .. " ]  | Float | `0` | — |
| Reverse Array | Integer | `0.0` | Reverses the order of the values. |
| Show Input | Integer | `1.0` | Shows the input sockets of the controls. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayList.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayList (Array/Create).
Source: fuse vArrayList.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
