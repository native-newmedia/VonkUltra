---
sidebar_position: 22
title: vArrayGridPolar
description: "Generate points on concentric rings with a set number of rings, points per ring, spacing and sweep angle."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayGridPolar

Generate points on concentric rings with a set number of rings, points per ring, spacing and sweep angle.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayGridPolar.png" alt="vArrayGridPolar node" />
</div>

vArrayGridPolar has no input and outputs an array of XYZ points arranged on concentric rings around the Z axis. Number of Rings and Points per Ring set the point count.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number of Rings | Integer | `5` | Number of concentric rings. Minimum 1, default 5. |
| Points per Ring | Integer | `12` | Number of points on each ring. Minimum 1, default 12. |
| Inner Radius | Float | `0.5` | Radius of the first ring. Minimum 0, default 0.5. |
| Ring Spacing | Float | `0.5` | Radius added for each further ring. Minimum 0, default 0.5. |
| Start Angle (deg) | Float | `0` | Angle of the first point on each ring, in degrees. Default 0. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sweep Angle (deg) | Float | `360` | Angle covered by the points on each ring, in degrees. Range 0 to 360, default 360. |
| Z Offset per Ring | Float | `0` | Z distance added for each further ring. Default 0. |
| Base Z | Float | `0` | Z position of the first ring. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

Ring r (counting from 0) has the radius Inner Radius + r * Ring Spacing and sits at Z = Base Z + r * Z Offset per Ring. Point i on a ring is at the angle Start Angle + (i / Points per Ring) * Sweep Angle, with X = radius * cos(angle) and Y = radius * sin(angle). The output holds Number of Rings * Points per Ring points, ring by ring.

With the defaults (5 rings, 12 points per ring, Inner Radius 0.5, Ring Spacing 0.5, Start Angle 0, Sweep Angle 360, Z Offset 0, Base Z 0) the node outputs 60 points on rings with radii 0.5, 1.0, 1.5, 2.0 and 2.5, all in the Z = 0 plane.

The angle step is the sweep divided by Points per Ring, not by Points per Ring - 1. A 360 degree sweep therefore does not repeat the first point, and a smaller sweep ends one step short of the sweep angle. Setting Z Offset per Ring to a value other than 0 stacks the rings along Z and gives a cone or a stepped spiral surface.

Number of Rings and Points per Ring are used as entered, with a minimum of 1 set on the controls. Angles are in degrees. Inner Radius of 0 puts every point of the first ring on the origin.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-grid" label="Draw the grid" default>

```
vArrayGridPolar.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-grid-before-drawing" label="Offset the grid before drawing">

```
vArrayGridPolar.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayPointsOnGrid">vArrayPointsOnGrid</a>
  <a className="node-chip" href="./vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
