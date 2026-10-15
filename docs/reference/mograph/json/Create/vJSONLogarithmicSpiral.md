---
sidebar_position: 31
title: vJSONLogarithmicSpiral
description: "Generate a Logarithmic Spiral spline"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLogarithmicSpiral

Generate a Logarithmic Spiral spline

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLogarithmicSpiral.png" alt="vJSONLogarithmicSpiral node" />
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
vJSONLogarithmicSpiral.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONLogarithmicSpiral (JSON/Create).
Source: fuse vJSONLogarithmicSpiral.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
