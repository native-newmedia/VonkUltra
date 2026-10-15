---
sidebar_position: 41
title: vJSONPointsOnGrid
description: "Generate point on Array Grid"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPointsOnGrid

Generate point on Array Grid

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPointsOnGrid.png" alt="vJSONPointsOnGrid node" />
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
vJSONPointsOnGrid.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONPointsOnGrid (JSON/Create).
Source: fuse vJSONPointsOnGrid.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
