---
sidebar_position: 1
title: vArrayCustom2DShapes
description: "Dynamically create 2D Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayCustom2DShapes

Dynamically create 2D Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCustom2DShapes.png" alt="vArrayCustom2DShapes node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Shape Type | Dropdown | `Ticks` | None, Ticks, Lines, Frames, Symbols, or Others. |
| Shape Selector | Integer | `1` | Which outline of the chosen set is used. |
| X Offset | Float | `—` | — |
| Y Offset | Float | `—` | Moves the shape along X and Y. |
| Z Offset | Float | `—` | — |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Rotation | Float | `—` | — |
| Y Rotation | Float | `—` | — |
| Z Rotation | Float | `—` | Rotates the shape. |
| XY Scale | Float | `0.05` | Uniform scale. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayPointsOnCircle1.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayCustom2DShapes.Output -> vArrayShapeRender.ArrayShape
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayUnPacker">vArrayUnPacker</a>
  <a className="node-chip" href="../Modify/vArraySin">vArraySin</a>
  <a className="node-chip" href="../Modify/vArrayPacker">vArrayPacker</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayCustom2DShapes (Array/Shapes).
Source: fuse vArrayCustom2DShapes.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
