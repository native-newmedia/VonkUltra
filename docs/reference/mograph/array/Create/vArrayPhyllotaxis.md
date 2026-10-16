---
sidebar_position: 37
title: vArrayPhyllotaxis
description: "Generate a spiral of points where each point is turned by a fixed angle from the previous one."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPhyllotaxis

Generate a spiral of points where each point is turned by a fixed angle from the previous one.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPhyllotaxis.png" alt="vArrayPhyllotaxis node" />
</div>

vArrayPhyllotaxis has no input and outputs Count points on a flat spiral. Rotation is the angle added per point, in radians.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Count | Integer | `1` | Number of points. Range 1 to 1000, default 1. |
| Scale | Float | `0.01` | Scales the radius of the spiral. Range 0.01 to 1, default 0.01. |
| Rotation | Float | `0` | Angle added per point, in radians. Default 0. The golden angle is about 2.39996. |

<details>
<summary>Read the full description</summary>

Point i has angle a = i * Rotation and radius r = Scale * sqrt(i). X is r * cos(a), Y is r * sin(a) and Z is 0. The sqrt term keeps the area per point constant, so points spread out evenly across the disc.

Rotation decides the pattern. The golden angle, about 2.39996 radians, gives the familiar sunflower arrangement. Values near simple fractions of 2 * pi produce visible spokes. The default of 0 puts every point on the X axis.

Count ranges from 1 to 1000 and Scale from 0.01 to 1. The overall diameter grows with Scale * sqrt(Count).

The output is a point array for vArrayCameraProjection and vArrayShapeRender, or for the Modify nodes.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-a-sunflower-pattern" label="Draw a sunflower pattern" default>

```
vArrayPhyllotaxis.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="lift-the-pattern-off-the-plane" label="Lift the pattern off the plane">

```
vArrayPhyllotaxis.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayHelix">vArrayHelix</a>
  <a className="node-chip" href="./vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="./vArrayPointsOnGrid">vArrayPointsOnGrid</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
