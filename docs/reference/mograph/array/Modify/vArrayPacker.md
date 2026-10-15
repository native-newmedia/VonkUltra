---
sidebar_position: 32
title: vArrayPacker
description: "Pack Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPacker

Pack Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPacker.png" alt="vArrayPacker node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Pack To: | Dropdown | `X` | Group size: X, X Y or X Y Z. |
| Custom Group Size | Integer | `0` | Group size used instead of the Pack To value. |
| Input | DATATYPE | `—` | Data to process. |

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
  <a className="node-chip" href="./vArraySin">vArraySin</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayPacker (Array/Modify).
Source: fuse vArrayPacker.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
