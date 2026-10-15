---
sidebar_position: 2
title: vArrayCustom3DShapes
description: "Dynamically create Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayCustom3DShapes

Dynamically create Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCustom3DShapes.png" alt="vArrayCustom3DShapes node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Shape Selector | Dropdown | `Cube` | None, Cube, Tetrahedron, Octahedron, Dodecahedron, or Sphere. |
| X Offset | Float | `—` | — |
| Y Offset | Float | `—` | Moves the shape along X and Y. |
| Z Offset | Float | `—` | — |
| X Rotation | Float | `—` | — |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Rotation | Float | `—` | — |
| Z Rotation | Float | `—` | Rotates the shape. |
| XY Scale | Float | `1.0` | Uniform scale. |
| Sphere Detail Level | Integer | `1.0` | Number of subdivisions of the sphere. |
| Input | ScriptVal | `—` | Data to process. |
| Show Input | Integer | `0.0` | Shows the transform input sockets on the node. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayPointsOnCircle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayCustom3DShapes.Output -> vArrayShapeRender.ArrayShape
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayCustom3DShapes (Array/Shapes).
Source: fuse vArrayCustom3DShapes.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
