---
sidebar_position: 29
title: vScriptValList
description: "Create an array by entering each value manually"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValList

Create an array by entering each value manually

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValList.png" alt="vScriptValList node" />
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
vScriptValList.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValList (ScriptVal/Create).
Source: fuse vScriptValList.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
