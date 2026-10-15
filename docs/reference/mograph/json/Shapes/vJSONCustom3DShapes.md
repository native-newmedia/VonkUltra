---
sidebar_position: 2
title: vJSONCustom3DShapes
description: "Dynamically create Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONCustom3DShapes

Dynamically create Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONCustom3DShapes.png" alt="vJSONCustom3DShapes node" />
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
vJSONPointsOnCircle.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    vJSONCustom3DShapes.Output -> vJSONShapeRender.JSONCustomShape
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnCircle">vJSONPointsOnCircle</a>
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONCustom3DShapes (JSON/Shapes).
Source: fuse vJSONCustom3DShapes.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
