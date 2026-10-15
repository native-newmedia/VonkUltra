---
sidebar_position: 2
title: vScriptValCustom3DShapes
description: "Dynamically create Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCustom3DShapes

Dynamically create Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCustom3DShapes.png" alt="vScriptValCustom3DShapes node" />
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
| Input | DATATYPE | `—` | Data to process. |
| Show Input | Integer | `0.0` | Shows the transform input sockets on the node. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnCircle.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValCustom3DShapes.Output -> vScriptValShapeRender.ScriptValShape
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnCircle">vScriptValPointsOnCircle</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValCustom3DShapes (ScriptVal/Shapes).
Source: fuse vScriptValCustom3DShapes.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
