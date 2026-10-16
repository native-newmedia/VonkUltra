---
sidebar_position: 25
title: vArrayLemniscate
description: "Generate points on the polar curve r = amplitude * cos(2t), with rotation and scale controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayLemniscate

Generate points on the polar curve r = amplitude * cos(2t), with rotation and scale controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayLemniscate.png" alt="vArrayLemniscate node" />
</div>

vArrayLemniscate has no input and outputs an array of XY points on a closed curve in the Z = 0 plane. Amplitude sets the size, Sample Count sets the number of points, and Rotation turns the curve.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Amplitude | Float | `0.25` | Radius multiplier in r = Amplitude * cos(2t). Minimum 0.001, default 0.25. |
| Sample Count | Integer | `360` | Number of points sampled over the curve. Clamped to 8 or more, default 360. |
| Rotation | Float | `0` | Angle added to the polar angle, in degrees. Default 0. |
| Scale | Float | `1` | Multiplier applied to X and Y after the radius is computed. Minimum 0.001, default 1. |

<details>
<summary>Read the full description</summary>

The node samples t from 0 to 2 * pi in Sample Count points, including both ends. For each t the radius is r = Amplitude * cos(2t) and the polar angle is t + Rotation. The point is X = r * cos(angle) * Scale and Y = r * sin(angle) * Scale, with Z = 0.

With the defaults (Amplitude 0.25, 360 samples, Rotation 0, Scale 1) the curve has four lobes along the X and Y axes, each reaching 0.25 from the origin. The first and last points are the same point.

Rotation is in degrees and is added to the polar angle, so it turns the whole curve around the origin. Amplitude and Scale both multiply the result, so they change the size in the same way.

Sample Count is clamped to 8 or more. The curve is r = a * cos(2t), which is the polar rose with two as the frequency (see vArrayRoseCurve with Petals set to 2). It is not the figure-eight lemniscate of Bernoulli, which is defined by r squared = a squared * cos(2t).

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-curve" label="Draw the curve" default>

```
vArrayLemniscate.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-curve-before-drawing" label="Offset the curve before drawing">

```
vArrayLemniscate.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayRoseCurve">vArrayRoseCurve</a>
  <a className="node-chip" href="./vArraySuperellipse">vArraySuperellipse</a>
  <a className="node-chip" href="./vArrayLissajousSpline">vArrayLissajousSpline</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
