---
sidebar_position: 53
title: vScriptValPacker
description: "Pack Operations on a ScriptVal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPacker

Pack Operations on a ScriptVal

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPacker.png" alt="vScriptValPacker node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Pack To: | Dropdown | `X` | — |
| Custom Group Size | Integer | `0` | — |
| Show Input | Integer | `0.0` | — |
| ScriptVal | DATATYPE | `—` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCircle.Output -> vScriptValUnPacker.ScriptVal
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
  <a className="node-chip" href="./vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="./vScriptValSin">vScriptValSin</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValPacker (ScriptVal/Modify).
Source: fuse vScriptValPacker.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
