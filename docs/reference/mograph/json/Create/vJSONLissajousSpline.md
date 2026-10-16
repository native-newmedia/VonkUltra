---
sidebar_position: 27
title: vJSONLissajousSpline
description: "Generate points on a 3D Lissajous-style curve from one of three formulas and four whole-number frequencies."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLissajousSpline

Generate points on a 3D Lissajous-style curve from one of three formulas and four whole-number frequencies.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLissajousSpline.png" alt="vJSONLissajousSpline node" />
</div>

vJSONLissajousSpline has no input and outputs an array of XYZ points on a closed 3D curve. Formula picks the equations, Numbers A to D set the frequencies, and Points Count and Step set how finely the curve is sampled.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Formula | Dropdown | `Formula A` | Chooses Formula A, B or C. Default Formula A. |
| Number A | Integer | `5` | Frequency number A, used by all three formulas. Range 1 to 6, default 5. |
| Number B | Integer | `4` | Frequency number B, used by all three formulas. Range 1 to 6, default 4. |
| Number C | Integer | `1` | Frequency number C, used by all three formulas. Range 1 to 10, default 1. |
| Number D | Integer | `2` | Frequency number D, used by Formulas B and C only. Range 1 to 6, default 2. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points Count | Integer | `1500` | Upper limit of the counter i. The loop runs while i is at most this value minus Step. Minimum 1, default 1500. |
| Step | Integer | `40` | Increment of the counter i for each point. Minimum 1, default 40. |
| Scale Factor | Float | `0.5` | Multiplier applied to X, Y and Z. Range 0 to 1, default 0.5. |

</details>

<details>
<summary>Read the full description</summary>

The node steps a counter i from 0 in increments of Step while i is at most Points Count - Step. For each i it computes the point from the formula, multiplies it by Scale Factor and writes it. With u(n) = i * n * 0.001, Formula A gives X = sin(u(A)), Y = cos(u(B)) and Z = sin(u(C)). Formula B gives X = (cos(u(A)) + cos(u(B))) / 2, Y = (sin(u(A)) + sin(u(C))) / 2 and Z = sin(u(D)). Formula C gives X = sin(u(A)) * (1 + cos(u(B))) / 2, Y = sin(u(A)) * (1 + sin(u(C))) / 2 and Z = sin(u(D)).

Number D is used only by Formulas B and C. The curve advances by Step * 0.001 * Number radians per point, so a larger Step spaces the points further apart along the curve. With the defaults (Formula A, A 5, B 4, C 1, D 2, 1500 points, Step 40, Scale Factor 0.5) the loop runs for i = 0, 40, ... 1440 and writes 37 points.

The node stops early when the curve comes back to its start. After the first 11 points, if the scaled X, Y and Z of a point are all within 0.02 of the first point, that point is written and the loop ends. Points Count is therefore a limit and not an exact count.

The output is a point list, not a smooth spline. Reduce Step to get more points on the same curve.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-curve" label="Draw the curve" default>

```
vJSONLissajousSpline.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-curve-before-drawing" label="Offset the curve before drawing">

```
vJSONLissajousSpline.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONParametricCurve">vJSONParametricCurve</a>
  <a className="node-chip" href="./vJSONRoseCurve">vJSONRoseCurve</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
