---
sidebar_position: 44
title: vScriptValPointsOnSphere
description: "Generate points on Sphere"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnSphere

Generate points on Sphere

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnSphere.png" alt="vScriptValPointsOnSphere node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Create | Dropdown | `Fibonacci Sphere` | Fibonacci Sphere or Custom Sphere. |
| Amount of points | Integer | `100` | Number of points. |
| Sphere size | Float | `0.3` | Radius of the sphere. |
| Random distance | Float | `0` | Amount of random displacement. |
| Random seed | Float | `0` | Seed of the random generator. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distribution | Dropdown | `Uniform` | Uniform, Poles or Half. |
| Trim Top | Float | `-1` | Removes the top part of the sphere. |
| Trim Bottom | Float | `1` | Removes the bottom part of the sphere. |
| Random Distance | Dropdown | `False` | Amount of random displacement. |
| Scale Factor | Float | `1` | — |
| Rotate Factor | Float | `0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnSphere.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValPointsOnSphere (ScriptVal/Create).
Source: fuse vScriptValPointsOnSphere.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
