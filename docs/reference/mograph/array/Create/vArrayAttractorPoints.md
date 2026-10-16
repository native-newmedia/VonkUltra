---
sidebar_position: 1
title: vArrayAttractorPoints
description: "Generate a point path by integrating the Lorenz or Rossler system with a fixed step size."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayAttractorPoints

Generate a point path by integrating the Lorenz or Rossler system with a fixed step size.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayAttractorPoints.png" alt="vArrayAttractorPoints node" />
</div>

vArrayAttractorPoints has no input and outputs an array of XYZ points along a Lorenz or Rossler trajectory. System picks the equations, and Point Count, Step Size and Scale shape the path.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| System | Dropdown | `Lorenz` | Chooses the Lorenz or Rossler equations. Changing it also sets Param A, B and C to that system's standard values. Default Lorenz. |
| Point Count | Integer | `2000` | Number of points written. Clamped to 2 or more, default 2000. |
| Warmup Steps | Integer | `100` | Number of steps computed and discarded before the first point is written. Clamped to 0 or more, default 100. |
| Step Size | Float | `0.01` | Time step of each Euler integration step. Clamped to 0.000001 or more, default 0.01. |
| Scale | Float | `0.02` | Multiplier applied to X, Y and Z of every written point. Default 0.02. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Param A | Float | `10` | Lorenz uses it as the factor on y - x. Rossler uses it as the factor on y in dy. Default 10, set to 0.2 for Rossler. |
| Param B | Float | `28` | Lorenz uses it in dy = x * (B - z) - y. Rossler uses it as the constant term in dz. Default 28, set to 0.2 for Rossler. |
| Param C | Float | `2.6666666667` | Lorenz uses it as the factor on z in dz. Rossler subtracts it from x in dz. Default 2.6667, set to 5.7 for Rossler. |

</details>

<details>
<summary>Read the full description</summary>

The node starts at a fixed position and advances it with Euler steps of Step Size. Lorenz starts at (0.1, 0, 0) and uses dx = A * (y - x), dy = x * (B - z) - y and dz = x * y - C * z. Rossler starts at (1, 1, 1) and uses dx = -y - z, dy = x + A * y and dz = B + z * (x - C). Each written point is the current position multiplied by Scale.

The first Warmup Steps steps are computed and discarded, and the next Point Count steps are written. With the defaults (Lorenz, 2000 points, 100 warmup steps, Step Size 0.01, Scale 0.02) the node outputs 2000 points that follow the two lobes of the Lorenz trajectory.

Changing System sets Param A, B and C to the standard values of that system: 10, 28 and 2.6667 for Lorenz, 0.2, 0.2 and 5.7 for Rossler. The three parameters can be changed afterwards. Both systems use all three parameters, but each parameter sits in a different term, so values are not interchangeable between the systems.

Point Count is clamped to 2 or more, Warmup Steps to 0 or more and Step Size to 0.000001 or more. A large Step Size makes the Euler integration inaccurate and the path can diverge.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-attractor" label="Draw the attractor" default>

```
vArrayAttractorPoints.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-path-before-drawing" label="Offset the path before drawing">

```
vArrayAttractorPoints.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayLissajousSpline">vArrayLissajousSpline</a>
  <a className="node-chip" href="./vArrayParametricCurve">vArrayParametricCurve</a>
  <a className="node-chip" href="./vArrayHelix">vArrayHelix</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
