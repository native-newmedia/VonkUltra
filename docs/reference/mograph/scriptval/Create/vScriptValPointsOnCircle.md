---
sidebar_position: 39
title: vScriptValPointsOnCircle
description: "Generate points on a circle"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnCircle

Generate points on a circle

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnCircle.png" alt="vScriptValPointsOnCircle node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.1` | Radius. |
| Round Segments | Integer | `3` | Number of segments. |
| Rounds | Float | `0` | — |
| Point Offset | Float | `0` | — |
| Rotate Amount | Float | `0` | Rotation of the circle. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Close Path | Integer | `1.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCircle.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValPointsOnCircle (ScriptVal/Create).
Source: fuse vScriptValPointsOnCircle.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
