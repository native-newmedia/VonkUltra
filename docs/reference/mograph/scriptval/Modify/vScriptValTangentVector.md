---
sidebar_position: 62
title: vScriptValTangentVector
description: "Create a vector that is tangent to a curve or surface at a given point"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTangentVector

Create a vector that is tangent to a curve or surface at a given point

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTangentVector.png" alt="vScriptValTangentVector node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Start` | Tangent selection. Options: Start, End, flipped. |
| Max angle | Integer | `0` | Largest angle between neighbouring segments in degrees. |
| Scale Factor | Float | `0` | Scale of the tangent vectors. |
| Path | DATATYPE | `—` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValLogarithmicSpiral.Output -> vScriptValTangentVector.ScriptVal1
    vScriptValTangentVector.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValLogarithmicSpiral">vScriptValLogarithmicSpiral</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValTangentVector (ScriptVal/Modify).
Source: fuse vScriptValTangentVector.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
