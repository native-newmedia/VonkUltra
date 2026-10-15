---
sidebar_position: 37
title: vScriptValPerlin3Noise
description: "Perlin Noise function on array values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPerlin3Noise

Perlin Noise function on array values

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPerlin3Noise.png" alt="vScriptValPerlin3Noise node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
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
vScriptValCircularPoints.Output->  vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValPerlin3Noise.Input
    vScriptValPerlin3Noise.Output ->  vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="./vScriptValPacker">vScriptValPacker</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValPerlin3Noise (ScriptVal/Modify).
Source: fuse vScriptValPerlin3Noise.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
