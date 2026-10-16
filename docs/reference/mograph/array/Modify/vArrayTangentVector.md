---
sidebar_position: 62
title: vArrayTangentVector
description: "Builds a tangent vector at each path point and outputs the start, end or flipped end points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTangentVector

Builds a tangent vector at each path point and outputs the start, end or flipped end points.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTangentVector.png" alt="vArrayTangentVector node" />
</div>

vArrayTangentVector takes an array of XYZ path points and outputs, for each point, one end of a tangent line: the point itself (Start), the point plus the tangent (End), or the point minus the tangent (flipped).

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Start` | Start (default), End or flipped. Start gives the path points, End adds the vector and flipped subtracts it. |
| Rotate Angle | Integer | `0` | Rotation of each vector around Z in degrees. Integer, slider 0 to 360, default 0. |
| Scale Factor | Float | `1` | Length of the vector. Range 0 to 1, default 1. |
| Path | DATATYPE | `—` | Path points, in order. |

<details>
<summary>Read the full description</summary>

The tangent at a point is the direction to the next point in X, Y and Z, made unit length and multiplied by Scale Factor. The last point reuses the direction of the last segment. Rotate Angle then rotates the vector around the Z axis by that many degrees.

Mode picks the output: Start gives the path points unchanged, End gives the point plus the vector, and flipped gives the point minus the vector. With Scale Factor 0 all three are the same. Scale Factor runs from 0 to 1 and defaults to 1. The path needs at least 2 points with exactly 3 numbers each.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-tangents-on-an-arc" label="Draw tangents on an arc" default>

```
vArrayPointsOnArc.Output -> vArrayTangentVector.ArrayPath
vArrayTangentVector.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="tangent-end-points-of-a-spiral" label="Tangent end points of a spiral">

```
vArrayLogarithmicSpiral.Output -> vArrayTangentVector.ArrayPath
vArrayTangentVector.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Shapes/vArrayTangentVectorItem">vArrayTangentVectorItem</a>
  <a className="node-chip" href="./vArrayPathFrame">vArrayPathFrame</a>
  <a className="node-chip" href="./vArrayLookAt">vArrayLookAt</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
