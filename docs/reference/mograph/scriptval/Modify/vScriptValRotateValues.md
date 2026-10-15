---
sidebar_position: 53
title: vScriptValRotateValues
description: "Rotate ScriptVals Between Operations on a ScriptVal Object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRotateValues

Rotate ScriptVals Between Operations on a ScriptVal Object

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRotateValues.png" alt="vScriptValRotateValues node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rotate Amount | Integer | `1` | Number of positions the values are shifted. |
| Pass Thru: 0 or 1 | Integer | `0.0` | — |
| Show Input | Integer | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnHexagon.Output -> vScriptValRotateValues.ScriptVal
    vScriptValRotateValues.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnHexagon">vScriptValPointsOnHexagon</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValRotateValues (ScriptVal/Modify).
Source: fuse vScriptValRotateValues.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
