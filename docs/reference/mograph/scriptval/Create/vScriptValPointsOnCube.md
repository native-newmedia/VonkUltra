---
sidebar_position: 40
title: vScriptValPointsOnCube
description: "Generate points on cube"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnCube

Generate points on cube

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnCube.png" alt="vScriptValPointsOnCube node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number X | Integer | `10` | Points along X. |
| Number Y | Integer | `10` | Points along Y. |
| Number Z | Integer | `10` | Points along Z. |
| Multiplier | Float | `0.05` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCube.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValPointsOnCube (ScriptVal/Create).
Source: fuse vScriptValPointsOnCube.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
