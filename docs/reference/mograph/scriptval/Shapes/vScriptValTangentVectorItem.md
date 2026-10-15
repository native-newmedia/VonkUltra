---
sidebar_position: 6
title: vScriptValTangentVectorItem
description: "Create a vector that is tangent to a curve or surface at a given point"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTangentVectorItem

Create a vector that is tangent to a curve or surface at a given point

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTangentVectorItem.png" alt="vScriptValTangentVectorItem node" />
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
vScriptValLogarithmicSpiral.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValTangentVectorItem.ScriptVal1
    vScriptValTangentVectorItem.Output -> vScriptValShapeRender.ScriptValShape
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValLogarithmicSpiral">vScriptValLogarithmicSpiral</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValTangentVectorItem (ScriptVal/Shapes).
Source: fuse vScriptValTangentVectorItem.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
