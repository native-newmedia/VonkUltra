---
sidebar_position: 37
title: vArrayPerlin3Noise
description: "Replaces every number of an array with a Perlin or fractal noise value."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPerlin3Noise

Replaces every number of an array with a Perlin or fractal noise value.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPerlin3Noise.png" alt="vArrayPerlin3Noise node" />
</div>

vArrayPerlin3Noise takes an array of points and outputs a noise value for each coordinate. Time, Frequency and Scale shape the noise, and Noise Type switches to a fractal sum.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Points whose coordinates are replaced by noise. |
| Noise Type | Dropdown | `Perlin` | Perlin (default) or Fractal. |
| Time | Float | `1` | Added to the lookup coordinate. Slider -10 to 10, default 1. |
| Frequency | Float | `1` | Multiplies each value before the lookup. Slider 0 to 100, default 1. |
| Scale | Float | `1` | Multiplies the noise. Slider 0 to 10, default 1. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Octaves | Float | `1` | Number of noise layers in Fractal mode. Minimum 1, slider 1 to 10, default 1. Hidden for Perlin. |
| Persistence | Float | `0.5` | Weight multiplier per layer in Fractal mode. Range 0 and up, slider 0 to 1, default 0.5. Hidden for Perlin. |
| Show Input | Integer | `1.0` | Shows the Frequency, Scale and Time input ports when on (default). |

</details>

<details>
<summary>Read the full description</summary>

Each coordinate v of each input point is replaced by noise(v * Frequency + Time) * Scale, so the output holds noise values and not the original positions. The noise is sampled along the diagonal of the noise grid, with the same value on both lookup axes. With Time 1 and whole-number coordinates the lookup falls on grid points where Perlin noise is 0.

Fractal adds Octaves of the noise, each with twice the frequency and Persistence times the weight of the one before, divided by the total weight. Octaves and Persistence are hidden for Perlin. Every output point has as many values as its input point, in all three families.

Show Input exposes the Frequency, Scale and Time ports on the node.

</details>

## Example Connections

<Tabs>
<TabItem value="noise-on-a-grid-then-draw" label="Noise on a grid, then draw" default>

```
vArrayPointsOnGrid.Output -> vArrayPerlin3Noise.Input
vArrayPerlin3Noise.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="noise-values-as-a-mask" label="Noise values as a mask">

```
vArrayRandom.Output -> vArrayPerlin3Noise.Input
vArrayPerlin3Noise.Output -> vArrayApplyMask.Mask
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayNoise">vArrayNoise</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
  <a className="node-chip" href="./vArraySin">vArraySin</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
