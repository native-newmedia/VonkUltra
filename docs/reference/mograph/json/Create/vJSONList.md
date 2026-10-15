---
sidebar_position: 29
title: vJSONList
description: "Create an array by entering each value manually"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONList

Create an array by entering each value manually

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONList.png" alt="vJSONList node" />
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
vJSONList.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONList (JSON/Create).
Source: fuse vJSONList.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
