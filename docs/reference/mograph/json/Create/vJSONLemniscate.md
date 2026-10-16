---
sidebar_position: 25
title: vJSONLemniscate
description: "Generate points on the polar curve r = amplitude * cos(2t), with rotation and scale controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLemniscate

Generate points on the polar curve r = amplitude * cos(2t), with rotation and scale controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLemniscate.png" alt="vJSONLemniscate node" />
</div>

vJSONLemniscate has no input and outputs an array of XY points on a closed curve in the Z = 0 plane. Amplitude sets the size, Sample Count sets the number of points, and Rotation turns the curve.

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

Sample Count is clamped to 8 or more. The curve is r = a * cos(2t), which is the polar rose with two as the frequency (see vJSONRoseCurve with Petals set to 2). It is not the figure-eight lemniscate of Bernoulli, which is defined by r squared = a squared * cos(2t).

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-curve" label="Draw the curve" default>

```
vJSONLemniscate.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-curve-before-drawing" label="Offset the curve before drawing">

```
vJSONLemniscate.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONRoseCurve">vJSONRoseCurve</a>
  <a className="node-chip" href="./vJSONSuperellipse">vJSONSuperellipse</a>
  <a className="node-chip" href="./vJSONLissajousSpline">vJSONLissajousSpline</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
