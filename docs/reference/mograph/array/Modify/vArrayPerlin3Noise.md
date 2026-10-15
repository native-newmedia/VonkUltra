---
sidebar_position: 37
title: vArrayPerlin3Noise
description: "Perlin Noise function on array values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPerlin3Noise

Perlin Noise function on array values

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPerlin3Noise.png" alt="vArrayPerlin3Noise node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Data to process. |
| Noise Type | Dropdown | `Perlin` | Perlin or Fractal noise. |
| Time | Float | `1` | Offsets the noise or wave in time. |
| Frequency | Float | `1` | Frequency of the noise or wave. |
| Scale | Float | `1` | Scale of the effect. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Octaves | Float | `1` | Number of noise layers added together. Shown when the related option is enabled. |
| Persistence | Float | `0.5` | Amplitude multiplier per octave. Shown when the related option is enabled. |
| Show Input | Integer | `1.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayCircularPoints.Output->  vArrayUnPacker.ArrayA
    vArrayUnPacker.OutputArray -> vArrayPerlin3Noise.Input
    vArrayPerlin3Noise.Array ->  vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayUnPacker">vArrayUnPacker</a>
  <a className="node-chip" href="./vArrayPacker">vArrayPacker</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayPerlin3Noise (Array/Modify).
Source: fuse vArrayPerlin3Noise.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
