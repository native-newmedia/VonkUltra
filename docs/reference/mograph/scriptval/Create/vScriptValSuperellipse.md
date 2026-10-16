---
sidebar_position: 51
title: vScriptValSuperellipse
description: "Generate points on a superellipse with separate X and Y amplitudes, an exponent, rotation and scale."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValSuperellipse

Generate points on a superellipse with separate X and Y amplitudes, an exponent, rotation and scale.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValSuperellipse.png" alt="vScriptValSuperellipse node" />
</div>

vScriptValSuperellipse has no input and outputs an array of XY points on a closed curve in the Z = 0 plane. The exponent moves the shape between a diamond, an ellipse and a rounded rectangle.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Amplitude X | Float | `0.25` | Half width of the shape before scale. Minimum 0.001, default 0.25. |
| Amplitude Y | Float | `0.25` | Half height of the shape before scale. Minimum 0.001, default 0.25. |
| Exponent | Float | `2` | Shape exponent. 2 gives an ellipse, 1 gives a diamond, larger values approach a rectangle. Clamped to 0.001 or more, default 2. |
| Sample Count | Integer | `360` | Number of points sampled over the curve. Clamped to 8 or more, default 360. |
| Rotation | Float | `0` | Angle the finished shape is turned around the origin, in degrees. Default 0. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale | Float | `1` | Multiplier applied to X and Y before rotation. Minimum 0.001, default 1. |

</details>

<details>
<summary>Read the full description</summary>

The node samples t from 0 to 2 * pi in Sample Count points, including both ends. With p = 2 / Exponent, each point is X = Amplitude X * sign(cos t) * |cos t|^p * Scale and Y = Amplitude Y * sign(sin t) * |sin t|^p * Scale. The point is then rotated around the origin by Rotation and written with Z = 0.

The points satisfy |x / Amplitude X|^Exponent + |y / Amplitude Y|^Exponent = 1 before scale and rotation. An Exponent of 2 gives an ellipse, 1 gives a diamond with straight edges, and larger values move the curve toward a rectangle.

With the defaults (Amplitude X and Y 0.25, Exponent 2, 360 samples, Rotation 0, Scale 1) the output is a circle of radius 0.25. The first and last points are the same point.

Exponent is clamped to 0.001 or more and Sample Count to 8 or more. Points are spaced evenly in the angle t, so they bunch up near the corners when the Exponent is large.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-shape" label="Draw the shape" default>

```
vScriptValSuperellipse.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-shape-before-drawing" label="Offset the shape before drawing">

```
vScriptValSuperellipse.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnCircle">vScriptValPointsOnCircle</a>
  <a className="node-chip" href="./vScriptValPointsOnRectangle">vScriptValPointsOnRectangle</a>
  <a className="node-chip" href="./vScriptValRoseCurve">vScriptValRoseCurve</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
