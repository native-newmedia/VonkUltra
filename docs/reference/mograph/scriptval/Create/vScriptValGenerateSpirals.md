---
sidebar_position: 19
title: vScriptValGenerateSpirals
description: "Generate points on one of seven spirals, Archimedean, Atom, Cornu, Galilean, Hyperbolic, Logarithmic or Lituus."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGenerateSpirals

Generate points on one of seven spirals, Archimedean, Atom, Cornu, Galilean, Hyperbolic, Logarithmic or Lituus.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValGenerateSpirals.png" alt="vScriptValGenerateSpirals node" />
</div>

vScriptValGenerateSpirals has no input and outputs an array of XYZ points on the spiral chosen by Spiral Type. The Growth coefficient, Expansion factor, Max angle and Step size controls change meaning with the type, and only the ones the type uses are shown.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Spiral Type | Dropdown | `Logarithmic Spiral` | Chooses the spiral formula. Changing it shows the controls the type uses and resets Scale Factor and Rotation. Default Logarithmic Spiral. |
| Shape Mode | Dropdown | `line` | Hidden control. It is read by the node but has no effect on the output. |
| Growth coefficient | Float | `0.04` | Growth coefficient. Constant a in the Archimedean, Logarithmic and Atom spirals, and the end of the t range in the Cornu spiral. Default 0.04. |
| Expansion factor | Float | `0.22` | Expansion factor. Constant b in the Archimedean and Logarithmic spirals, and 10 times it is the number of integration steps in the Cornu spiral. Default 0.22. |
| Max angle | Integer | `6` | Max angle in units of pi. The angle runs up to this value times pi. Not used by the Cornu spiral. Default 6. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Step size | Float | `1` | Angle step for most spirals. For Atom and Cornu, 10 times it is the number of points. Minimum 0.01, default 1. |
| Rotation | Float | `0` | Angle the spiral is turned around the Z axis, in degrees. Default 0. |
| Scale Factor | Float | `0.1` | Multiplier applied to the finished positions. Minimum 0, default 0.1. |

</details>

<details>
<summary>Read the full description</summary>

For Archimedean, Galilean, Hyperbolic, Logarithmic and Lituus the angle theta is stepped from Step size up to Max angle * pi in increments of Step size. The radius is r = a + b * theta (Archimedean), r = theta^1.5 (Galilean), r = 1 / theta (Hyperbolic), r = a * e^(b * theta) (Logarithmic) or r = 1 / sqrt(theta) (Lituus), where a is Growth coefficient and b is Expansion factor. X = r * cos theta and Y = r * sin theta are rotated around the Z axis by Rotation, in degrees, and multiplied by Scale Factor.

Archimedean, Galilean, Hyperbolic and Lituus write one point per step with Z = theta * 0.05 * Scale Factor. Logarithmic writes three points per step, the previous point, the midpoint and the current point, starting from the origin, with Z = 0. With the defaults (Logarithmic, Growth coefficient 0.04, Expansion factor 0.22, Max angle 6, Step size 1, Scale Factor 0.1) the node outputs 54 points.

Atom writes floor(10 * Step size) + 1 points with theta stepping evenly from 0 to Max angle * pi and r = Growth coefficient * sqrt(theta). Cornu writes floor(10 * Step size) + 1 points on the Euler spiral (C(t), S(t)), the Fresnel integrals of cos(pi * u^2 / 2) and sin(pi * u^2 / 2) from 0 to t. It uses Growth coefficient as the end of the t range and 10 * Expansion factor as the number of integration steps in a left-sided sum. Atom and Cornu write Z = 0.

Changing Spiral Type shows or hides the controls the type uses and resets Scale Factor to 0.1 and Rotation to 0. Archimedean and Logarithmic use all four. Atom uses Growth coefficient, Max angle and Step size. Cornu uses Growth coefficient, Expansion factor and Step size. Galilean, Hyperbolic and Lituus use Max angle and Step size. The hidden Shape Mode control is read but has no effect.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-spiral" label="Draw the spiral" default>

```
vScriptValGenerateSpirals.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-spiral-before-drawing" label="Offset the spiral before drawing">

```
vScriptValGenerateSpirals.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValLogarithmicSpiral">vScriptValLogarithmicSpiral</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValHelix">vScriptValHelix</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
