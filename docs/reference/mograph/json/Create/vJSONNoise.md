---
sidebar_position: 35
title: vJSONNoise
description: "Generate random XYZ points inside a cube, optionally moved over time by layered noise."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONNoise

Generate random XYZ points inside a cube, optionally moved over time by layered noise.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONNoise.png" alt="vJSONNoise node" />
</div>

vJSONNoise has no input and outputs an array of XYZ points scattered at random inside a cube centered on the origin. With Animated on, each point is displaced by noise that changes with the frame time.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number of Points | Integer | `100` | Number of points. Minimum 2, default 100. |
| Noise Scale | Float | `1` | Size of the cube the base positions are drawn from, and the size of the displacement when Animated is on. Minimum 0.01, default 1. |
| Seed | Integer | `0` | Seed of the random generator for the base positions and for the noise. Range 0 to 1,000,000, default 0. |
| Animated | Integer | `0` | When on, each point is displaced by noise that changes with the frame time. Default off. |
| Speed | Float | `1` | Rate of the time value for the noise. In a loop it is also the strength of the time swing. Range 0 to 100, default 1. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Frequency | Float | `1` | Multiplier on the point index used to look up the noise. Higher values make neighboring points move more differently. Range 0.001 to 100, default 1. |
| Evolution Offset | Float | `0` | Value added to the time value, which shifts the noise pattern in time. Default 0. |
| Loop Duration (frames) | Integer | `0` | Number of frames after which the animation repeats. 0 turns looping off. Range 0 to 10000, default 0. |
| Amplitude X | Float | `1` | Multiplier on the noise displacement along X. Range 0 to 100, default 1. |
| Amplitude Y | Float | `1` | Multiplier on the noise displacement along Y. Range 0 to 100, default 1. |
| Amplitude Z | Float | `1` | Multiplier on the noise displacement along Z. Range 0 to 100, default 1. |

</details>

<details>
<summary>Read the full description</summary>

The node seeds Lua's random generator with Seed and places Number of Points points. Each coordinate is a random value between -Noise Scale / 2 and +Noise Scale / 2. With Animated off, these base positions are the output. The same Seed gives the same positions.

With Animated on, each point is moved by a noise value on each axis. The noise is three layers of value noise, each layer half as strong and twice as fast as the one before. The displacement on an axis is the noise value, from -1 to 1, multiplied by Noise Scale, the amplitude for that axis and 0.5. The noise is looked up from the point index multiplied by Noise Frequency and from a time value. The Amplitude X, Y and Z controls and Noise Frequency have no effect while Animated is off.

The time value is the frame time * Speed * 0.1 + Evolution Offset. If Loop Duration is above 0, the time value is instead Evolution Offset + sin(2 * pi * (frame time mod Loop Duration) / Loop Duration) * Speed, which makes the motion repeat every Loop Duration frames.

With the defaults (100 points, Noise Scale 1, Seed 0, Animated off) the node outputs 100 points inside a unit cube. Number of Points has a minimum of 2.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-point-cloud" label="Draw the point cloud" default>

```
vJSONNoise.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-cloud-before-drawing" label="Offset the cloud before drawing">

```
vJSONNoise.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONRandom">vJSONRandom</a>
  <a className="node-chip" href="./vJSONPointsOnGrid">vJSONPointsOnGrid</a>
  <a className="node-chip" href="./vJSONPointsOnSphere">vJSONPointsOnSphere</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
