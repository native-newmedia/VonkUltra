---
sidebar_position: 3
title: vScriptValCircularPoints
description: "Distributes points in circular form"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCircularPoints

Distributes points in circular form

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCircularPoints.png" alt="vScriptValCircularPoints node" />
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
vScriptValCircularPoints1.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValCircularPoints (ScriptVal/Create).
Source: fuse vScriptValCircularPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
