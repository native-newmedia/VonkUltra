---
sidebar_position: 16
title: vArrayDisplaceValues
description: "Offsets points by a hashed noise value, limited to a spherical falloff region."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayDisplaceValues

Offsets points by a hashed noise value, limited to a spherical falloff region.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayDisplaceValues.png" alt="vArrayDisplaceValues node" />
</div>

vArrayDisplaceValues takes an array of XYZ points and adds a noise offset to each. Amplitude sets the size, Noise Scale the noise frequency, and the falloff sphere limits where the offset applies.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Scale | Float | `0` | Multiplies the point position before the noise lookup. Slider -1 to 1, default 0. |
| Noise Rate | Float | `0.001` | Length of the modulo applied to each coordinate in the noise lookup. Slider 0 to 1, default 0.001. Values below about 0.005 give the same noise for every point. |
| Animation Speed | Float | `0` | Added to the noise lookup as this value times the render time. Slider 0 to 5, default 0. |
| Amplitude | Float | `0` | Size of the displacement. Slider -1 to 1, default 0. |
| FallOff Sphere X | Float | `0` | X of the falloff sphere center. Slider -1 to 1, default 0. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| FallOff Sphere Y | Float | `0` | Y of the falloff sphere center. Slider -1 to 1, default 0. |
| FallOff Sphere Z | Float | `0` | Z of the falloff sphere center. Slider -1 to 1, default 0. |
| FallOff Radius | Float | `0` | Radius of the falloff sphere. Minimum 0, slider 0 to 1, default 0. |
| FallOff Tightness | Float | `0.1` | Exponent in the falloff formula. Slider 0.01 to 1, default 0.1. |
| Invert falloff | Integer | `0.0` | Uses 1 minus the falloff when on. Default off. |
| Input | DATATYPE | `—` | Primary point array input. Connect the output of any vArray generator here to apply noise displacement to its points. |

</details>

<details>
<summary>Read the full description</summary>

Each point moves by noise * Amplitude * falloff on X, Y and Z. The noise is a hash of the point position times Noise Scale plus Animation Speed times the render time, with each coordinate wrapped by a modulo of Noise Rate. Its value lies between 0 and 1, so a positive Amplitude moves points toward positive values.

At the default Noise Rate of 0.001 the wrapped coordinates stay so small that every point gets the same noise value (about 0.72). Larger rates give variation between points. Amplitude and Noise Scale default to 0, so nothing moves until they are set.

The falloff is max(0, 1 - (distance / radius) ^ tightness), measured from the FallOff Sphere position. Invert falloff uses 1 minus that value. All three families displace X, Y and Z.

</details>

## Example Connections

<Tabs>
<TabItem value="disturb-a-grid-and-draw-it" label="Disturb a grid and draw it" default>

```
vArrayPointsOnGrid.Output -> vArrayDisplaceValues.ArrayA
vArrayDisplaceValues.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="disturb-a-circle" label="Disturb a circle">

```
vArrayPointsOnCircle.Output -> vArrayDisplaceValues.ArrayA
vArrayDisplaceValues.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayNoiseOnMesh">vArrayNoiseOnMesh</a>
  <a className="node-chip" href="../Animate/vArrayPointsJitter">vArrayPointsJitter</a>
  <a className="node-chip" href="./vArrayRippleDisplacer">vArrayRippleDisplacer</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
