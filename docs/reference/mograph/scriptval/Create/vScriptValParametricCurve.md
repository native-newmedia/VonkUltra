---
sidebar_position: 36
title: vScriptValParametricCurve
description: "Generate points from X(t), Y(t) and Z(t) expressions evaluated over a range of t."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValParametricCurve

Generate points from X(t), Y(t) and Z(t) expressions evaluated over a range of t.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValParametricCurve.png" alt="vScriptValParametricCurve node" />
</div>

vScriptValParametricCurve has no input and outputs an array of XYZ points. Each of the three coordinates is given by a text expression in the variable t, which runs from T Min to T Max.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X(t) | Text | `—` | Expression for X in the variable t. Default cos(t). |
| Y(t) | Text | `—` | Expression for Y in the variable t. Default sin(t). |
| Z(t) | Text | `—` | Expression for Z in the variable t. Default 0. |
| T Min | Float | `0` | Value of t for the first sample. Default 0. |
| T Max | Float | `2 * math.pi` | Value of t for the last sample. Default 2 * pi. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sample Count | Integer | `360` | Number of samples. Clamped to 8 or more, default 360. |
| Scale | Float | `1` | Multiplier applied to X, Y and Z of every point. Minimum 0.001, default 1. |

</details>

<details>
<summary>Read the full description</summary>

The node evaluates the three expressions for Sample Count values of t, spaced evenly from T Min to T Max with both ends included. Each result is multiplied by Scale and written as a point. With the defaults (X(t) = cos(t), Y(t) = sin(t), Z(t) = 0, T Min 0, T Max 2 * pi, 360 samples, Scale 1) the output is a circle of radius 1.

The expressions use Lua syntax with t as the variable. The available names are abs, acos, asin, atan, ceil, cos, deg, exp, floor, log, max, min, pi, pow, rad, sin, sqrt and tan. The node lists examples such as a helix (cos(t), sin(t), t / (2 * pi)), a trefoil knot (sin(t) + 2 * sin(2 * t), cos(t) - 2 * cos(2 * t), -sin(3 * t)) and a torus knot ((2 + cos(3 * t)) * cos(2 * t), (2 + cos(3 * t)) * sin(2 * t), sin(3 * t)).

All three expressions must be filled in. If one is empty, cannot be compiled, or uses one of the blocked words os, io, debug, package, require, dofile, loadfile, collectgarbage, getfenv or setfenv, the output is empty. If an expression gives a value that is not a finite number for some t, that sample is skipped, so the output can hold fewer points than Sample Count.

Sample Count is clamped to 8 or more. Use the constant 0 for an unused axis.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-curve" label="Draw the curve" default>

```
vScriptValParametricCurve.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-curve-before-drawing" label="Offset the curve before drawing">

```
vScriptValParametricCurve.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValLissajousSpline">vScriptValLissajousSpline</a>
  <a className="node-chip" href="./vScriptValRoseCurve">vScriptValRoseCurve</a>
  <a className="node-chip" href="./vScriptValHelix">vScriptValHelix</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
