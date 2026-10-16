---
sidebar_position: 31
title: vJSONLogarithmicSpiral
description: "Generate a logarithmic spiral as segment points or polygon points, with growth, expansion, angle range and step controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLogarithmicSpiral

Generate a logarithmic spiral as segment points or polygon points, with growth, expansion, angle range and step controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLogarithmicSpiral.png" alt="vJSONLogarithmicSpiral node" />
</div>

vJSONLogarithmicSpiral has no input and outputs an array of XYZ points on a spiral r = a * e^(b * theta) that rises slowly along Z. Mode chooses between segment triplets and polygon pairs.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Spiral` | Spiral writes three points per step. Polygon writes two points per step, offset sideways from the curve. Default Spiral. |
| Growth coefficient | Float | `0.04` | Growth coefficient a in r = a * e^(b * theta). Minimum 0.01, default 0.04. |
| Expansion factor | Float | `0.22` | Expansion factor b in r = a * e^(b * theta). Minimum 0.01, default 0.22. |
| Max angle | Integer | `6` | Largest angle in units of pi. Minimum 1, default 6. |
| Step size | Float | `1.23` | Angle step in radians. Minimum 0.1, default 1.23. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rotation | Float | `0` | Angle the spiral is turned around the Z axis, in degrees. Default 0. |
| Scale Factor | Float | `1` | Hidden control. It is read by the node but has no effect on the output. Default 1. |

</details>

<details>
<summary>Read the full description</summary>

The node steps the angle theta from Step Size up to Max Angle * pi in increments of Step Size. At each step the radius is r = Growth Coefficient * e^(Expansion Factor * theta), the position is X = r * cos theta and Y = r * sin theta, and Z = theta * 0.05. X and Y are then rotated around the Z axis by Rotation, in degrees. The Z rise of 0.05 per radian is fixed.

In Spiral mode each step writes three points: the previous point, the midpoint between the previous and current points, and the current point. The first previous point is the origin. With the defaults (Growth Coefficient 0.04, Expansion Factor 0.22, Max Angle 6, Step Size 1.23) there are 15 steps, so the node outputs 45 points.

In Polygon mode each step writes two points: the current point moved by 0.05 in the direction (sin theta, -cos theta), and the previous point. The same defaults give 30 points. Z is the same as in Spiral mode.

Max Angle is a whole number counted in units of pi, so 6 gives three full turns. A smaller Step Size gives more steps and a smoother curve. The number of steps is about Max Angle * pi / Step Size. The hidden Scale Factor control is read by the node but not used in the calculation.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-spiral" label="Draw the spiral" default>

```
vJSONLogarithmicSpiral.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-spiral-before-drawing" label="Offset the spiral before drawing">

```
vJSONLogarithmicSpiral.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONGenerateSpirals">vJSONGenerateSpirals</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONHelix">vJSONHelix</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
