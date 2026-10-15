---
sidebar_position: 56
title: vArraySin
description: "Math Sin - Cos Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySin

Math Sin - Cos Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySin.png" alt="vArraySin node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Math Function | Dropdown | `Sin` | Sin or Cos. |
| Animation Speed | Float | `0` | Speed of the animation over time. 0 is static. |
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
vArrayPointsOnCircle.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="./vArrayUnPacker">vArrayUnPacker</a>
  <a className="node-chip" href="./vArrayPacker">vArrayPacker</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArraySin (Array/Modify).
Source: fuse vArraySin.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
