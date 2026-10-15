---
sidebar_position: 2
title: vArrayAccumulatorXform
description: "Temporally concatenate array elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayAccumulatorXform

Temporally concatenate array elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayAccumulatorXform.png" alt="vArrayAccumulatorXform node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Start Frame | Integer | `0` | First frame to read. |
| End Frame | Integer | `0` | Last frame to read. |
| Step | Float | `1` | Frame increment between samples. |
| Offset X | Float | `0` | — |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Y | Float | `0` | — |
| Offset Z | Float | `0` | — |
| Rotate X | Float | `0` | — |
| Rotate Y | Float | `0` | — |
| Rotate Z | Float | `0` | — |
| Show Input | Integer | `0.0` | Shows the frame range controls. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayTextFont.Output -> vArrayAccumulatorXform.ArrayA
    vNumberCompRenderStart.Output -> vArrayAccumulatorXform.StartFrame
    vNumberCompRenderEnd.Output -> vArrayAccumulatorXform.EndFrame
    vArrayAccumulatorXform.Output -> vArrayUnPacker.ArrayA
    vArrayUnPacker.OutputArray_1 -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayTextFont">vArrayTextFont</a>
  <a className="node-chip" href="../Modify/vArrayUnPacker">vArrayUnPacker</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayAccumulatorXform (Array/Temporal).
Source: fuse vArrayAccumulatorXform.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
