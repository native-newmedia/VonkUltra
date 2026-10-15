---
sidebar_position: 40
title: vArrayPointsOnCube
description: "Generate points on cube"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointsOnCube

Generate points on cube

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsOnCube.png" alt="vArrayPointsOnCube node" />
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
vArrayPointsOnCube.Output -> vArrayCameraProjection.ArrayA
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
Generated page — node: vArrayPointsOnCube (Array/Create).
Source: fuse vArrayPointsOnCube.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
