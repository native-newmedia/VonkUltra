---
sidebar_position: 30
title: vJSONNoiseOnMesh
description: "Displace input points with Perlin/Fractal noise along mesh surface normal or in 3D."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONNoiseOnMesh

Displace input points with Perlin/Fractal noise along mesh surface normal or in 3D.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONNoiseOnMesh.png" alt="vJSONNoiseOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Mode | Dropdown | `Normal Only` | Normal Only displaces along the surface normal. 3D Reproject displaces in 3D and projects back. |
| Noise Type | Dropdown | `Perlin` | Perlin or Fractal noise. |
| Amplitude | Float | `0.1` | Strength of the displacement. |
| Frequency | Float | `1` | Frequency of the noise or wave. |
| Octaves | Integer | `4` | Number of noise layers added together. Shown when the related option is enabled. |

<details>
<summary>+10 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Lacunarity | Float | `2` | Frequency multiplier per octave. Shown when the related option is enabled. |
| Gain | Float | `0.5` | Amplitude multiplier per octave. Shown when the related option is enabled. |
| Animation Speed | Float | `0` | Speed of the animation over time. 0 is static. |
| Random Seed | Integer | `0` | Seed of the random generator. |
| Surface Offset | Float | `0` | Offset of the target from the mesh surface. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONNoiseOnMesh (JSON/Modify).
Source: fuse vJSONNoiseOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
