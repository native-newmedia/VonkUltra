---
sidebar_position: 41
title: vArrayPointsOnArc
description: "Builds an arc of points between each pair of consecutive input points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointsOnArc

Builds an arc of points between each pair of consecutive input points.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsOnArc.png" alt="vArrayPointsOnArc node" />
</div>

vArrayPointsOnArc takes an array of points and outputs Smoothness + 1 points on an arc between each consecutive pair. With the default Height Factor of 0 each arc is a half circle in the XY plane with the two points as its diameter.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Smoothness | Float | `20` | Number of segments per arc. Range 1 to 100, default 20. |
| Height Factor | Float | `0.0` | Hidden control. Bends the arc sideways and lifts it on Z. Slider 0.001 to 1, default 0. |
| Multiplier | Float | `0.0` | Hidden control. Multiplier. Read by the code but not used. Default 0. |
| Input | DATATYPE | `—` | Points that the arcs connect, in order. Each needs 3 values. |

<details>
<summary>Read the full description</summary>

For every pair of neighboring input points the node places Smoothness - 1 points between them and keeps the two input points at the ends. Each point is the start point turned around a center by an angle that runs from 0 to 180 degrees. With Height Factor 0 the center is the middle of the pair, so the arc is a half circle in the XY plane, and Z follows a cosine between the two Z values.

Height Factor (hidden, default 0) moves the center sideways by half the distance times the factor and lifts the middle of the arc on Z by the factor times the distance. Smoothness runs from 1 to 100 with a default of 20. A point shared by two pairs is written twice. Fewer than 2 input points give an empty output.

</details>

## Example Connections

<Tabs>
<TabItem value="arcs-between-line-points-and-draw" label="Arcs between line points and draw" default>

```
vArrayLine.Output -> vArrayPointsOnArc.ArrayA
vArrayPointsOnArc.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="arcs-through-rectangle-corners" label="Arcs through rectangle corners">

```
vArrayPointsOnRectangle.Output -> vArrayPointsOnArc.ArrayA
vArrayPointsOnArc.Output -> vArrayClosePath.Points
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="../Create/vArrayCubicBezier">vArrayCubicBezier</a>
  <a className="node-chip" href="./vArrayResamplePath">vArrayResamplePath</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
