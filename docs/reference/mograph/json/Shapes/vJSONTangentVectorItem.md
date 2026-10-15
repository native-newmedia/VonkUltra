---
sidebar_position: 7
title: vJSONTangentVectorItem
description: "Create a vector that is tangent to a curve or surface at a given point"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTangentVectorItem

Create a vector that is tangent to a curve or surface at a given point

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTangentVectorItem.png" alt="vJSONTangentVectorItem node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max angle | Integer | `0` | Rotates each tangent by this angle. |
| Line length | Float | `1` | Base length of each tangent. |
| Scale Factor | Float | `1` | Multiplies the length. |
| Amplitude | Float | `0` | Strength of the wave added to the length. |
| Frequency | Float | `0` | Frequency of the wave. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Phase | Float | `0` | Phase of the wave. |
| Damping Mode | Dropdown | `--` | --, DMP (damped sine), Sin, SQU (square), TRI (triangle), or SAW (sawtooth). |
| Damping | Float | `0` | Decay rate for DMP. |
| Node Sides | Float | `6` | Sides of the polygon at the tangent end. |
| Node Size | Float | `0.01` | Size of the polygon. |
| Node Rotation | Float | `0` | Rotation of the polygon. |
| Time | Float | `0` | Time value that drives the wave. |
| Path | DATATYPE | `—` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONLogarithmicSpiral.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONTangentVectorItem.JSON_Path
    vJSONTangentVectorItem.Output -> vJSONShapeRender.JSONCustomShape
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONLogarithmicSpiral">vJSONLogarithmicSpiral</a>
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONTangentVectorItem (JSON/Shapes).
Source: fuse vJSONTangentVectorItem.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
