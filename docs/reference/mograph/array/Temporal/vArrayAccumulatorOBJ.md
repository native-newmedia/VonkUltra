---
sidebar_position: 1
title: vArrayAccumulatorOBJ
description: "Temporally concatenate Wavefront OBJ geometry with edge and point array elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayAccumulatorOBJ

Temporally concatenate Wavefront OBJ geometry with edge and point array elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayAccumulatorOBJ.png" alt="vArrayAccumulatorOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points 1 | DATATYPE | `—` | — |
| Edges 1 | DATATYPE | `—` | — |
| Start Frame | Integer | `0` | First frame to read. |
| End Frame | Integer | `0` | Last frame to read. |
| Step | Float | `1` | Frame increment between samples. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | Shows the frame range controls. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayFromOBJ.Edges -> vArrayAccumulatorOBJ.Edges1
    vArrayFromOBJ.Points -> vArrayMath.ArrayA
    vMatrixCreateTRS1.Output -> vArrayMath.ArrayB
    vArrayMath.Operation = "Matrix Multiply"
    vArrayMath.Output -> vArrayAccumulatorOBJ.Points1
    vArrayAccumulatorOBJ.OutputEdges -> vArrayShapeRender.ArrayEdge
    vArrayAccumulatorOBJ.OutputPoints -> -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayFromOBJ">vArrayFromOBJ</a>
  <a className="node-chip" href="../Modify/vArrayMath">vArrayMath</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
</div>

{/*
Generated page — node: vArrayAccumulatorOBJ (Array/Temporal).
Source: fuse vArrayAccumulatorOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
