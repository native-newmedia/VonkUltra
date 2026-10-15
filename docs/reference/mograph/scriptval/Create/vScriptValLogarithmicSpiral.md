---
sidebar_position: 31
title: vScriptValLogarithmicSpiral
description: "Generate a Logarithmic Spiral spline"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValLogarithmicSpiral

Generate a Logarithmic Spiral spline

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValLogarithmicSpiral.png" alt="vScriptValLogarithmicSpiral node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Spiral` | Spiral or Polygon. |
| Growth coefficient | Float | `0.04` | Growth rate of the spiral. |
| Expansion factor | Float | `0.22` | Expansion rate of the spiral. |
| Max angle | Integer | `6` | Last angle of the spiral. |
| Step size | Float | `1.23` | Angle step between points. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rotation | Float | `0` | Rotation in degrees. |
| Scale Factor | Float | `1` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValLogarithmicSpiral.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValLogarithmicSpiral (ScriptVal/Create).
Source: fuse vScriptValLogarithmicSpiral.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
