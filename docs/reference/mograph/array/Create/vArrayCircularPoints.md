---
sidebar_position: 3
title: vArrayCircularPoints
description: "Distributes points in circular form"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayCircularPoints

Distributes points in circular form

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCircularPoints.png" alt="vArrayCircularPoints node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.1` | Radius. |
| Round Segments | Float | `40` | Number of segments. |
| Rounds | Float | `0.1` | Number of rounds. |
| Radius Add Round | Float | `0.1` | — |
| Radius Add Point | Float | `0.0` | Radius added per point. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset | Float | `0.0` | Angular offset. |
| Point Offset XY | Float | `0.1` | Offset applied to each point in X and Y. |
| Point Offset Z | Float | `0.1` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayCircularPoints1.Output -> vArrayCameraProjection.ArrayA
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
Generated page — node: vArrayCircularPoints (Array/Create).
Source: fuse vArrayCircularPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
