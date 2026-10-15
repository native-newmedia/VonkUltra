---
sidebar_position: 56
title: vScriptValSin
description: "Math Sin - Cos Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValSin

Math Sin - Cos Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValSin.png" alt="vScriptValSin node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Math Function | Dropdown | `Sin` | Sin or Cos. |
| Animation Speed | Float | `0` | — |
| Frequency | Float | `0.1` | Frequency of the wave. |
| Amplitude | Float | `0.01` | Amplitude of the wave. |
| Offset | Float | `0.0` | Offset added per point index. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCircle.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnCircle">vScriptValPointsOnCircle</a>
  <a className="node-chip" href="./vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="./vScriptValPacker">vScriptValPacker</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValSin (ScriptVal/Modify).
Source: fuse vScriptValSin.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
