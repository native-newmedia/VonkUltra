---
sidebar_position: 1
title: vScriptValAppend
description: "Append Array to an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAppend

Append Array to an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValAppend.png" alt="vScriptValAppend node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number | Integer | `1` | — |
| Show Input | Integer | `0.0` | — |
| ScriptVal | DATATYPE | `—` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCircle.Output -> vScriptValAppend.In_Array
    vScriptValAppend.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnCircle">vScriptValPointsOnCircle</a>
  <a className="node-chip" href="../Modify/vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="../Modify/vScriptValSin">vScriptValSin</a>
  <a className="node-chip" href="../Modify/vScriptValPacker">vScriptValPacker</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValAppend (ScriptVal/Utility).
Source: fuse vScriptValAppend.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
