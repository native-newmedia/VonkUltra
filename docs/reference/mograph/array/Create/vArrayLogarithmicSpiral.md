---
sidebar_position: 31
title: vArrayLogarithmicSpiral
description: "Generate a logarithmic Spiral spline"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayLogarithmicSpiral

Generate a logarithmic Spiral spline

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayLogarithmicSpiral.png" alt="vArrayLogarithmicSpiral node" />
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
vArrayLogarithmicSpiral.Output -> vArrayCameraProjection.ArrayA
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
Generated page — node: vArrayLogarithmicSpiral (Array/Create).
Source: fuse vArrayLogarithmicSpiral.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
