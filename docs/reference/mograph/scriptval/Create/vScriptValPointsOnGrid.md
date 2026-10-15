---
sidebar_position: 41
title: vScriptValPointsOnGrid
description: "Generate point on Array Grid"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnGrid

Generate point on Array Grid

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnGrid.png" alt="vScriptValPointsOnGrid node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number X | Integer | `1` | Points along X. |
| Number Y | Integer | `1` | Points along Y. |
| Number Z | Integer | `1` | Points along Z. |
| Multiplier | Float | `0.05` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnGrid.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValPointsOnGrid (ScriptVal/Create).
Source: fuse vScriptValPointsOnGrid.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
