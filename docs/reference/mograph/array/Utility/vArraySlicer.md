---
sidebar_position: 10
title: vArraySlicer
description: "Trim the start and end of single or multi-dimensional arrays"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySlicer

Trim the start and end of single or multi-dimensional arrays

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySlicer.png" alt="vArraySlicer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Data to process. |
| Start | Integer | `1` | First entry of the range. |
| Stop | Integer | `1` | Last entry of the range. |
| Offset Range | Integer | `0` | Added to Start and Stop. |
| Continuous | Integer | `1.0` | Wraps the range around the end of the array. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `1.0` | Shows the Start, Stop and Offset Range input socket on the node. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayCircularPoints.Output -> vArraySlicer.Input
    vArraySlicer.Array -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
    vArrayShapeText.OutputValShape -> vArrayShapeRender.ArrayShape
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
  <a className="node-chip" href="../Shapes/vArrayShapeText">vArrayShapeText</a>
</div>

{/*
Generated page — node: vArraySlicer (Array/Utility).
Source: fuse vArraySlicer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
