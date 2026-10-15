---
sidebar_position: 38
title: vScriptValPointAttractor
description: "2D/3D point attractor/repulsor with spring dynamics"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointAttractor

2D/3D point attractor/repulsor with spring dynamics

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointAttractor.png" alt="vScriptValPointAttractor node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Strength (+attract/-repel) | Float | `0.001` | Positive values pull points toward the attractor, negative values push them away. |
| Radius | Float | `1.0` | Radius of the effect. |
| Falloff Power | Float | `1.0` | Exponent of the falloff curve. |
| Spring Return | Float | `0.1` | — |
| Spring Bounce | Float | `0.01` | — |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Damping | Float | `0.98` | Reduces the movement speed over time. |
| Time Step | Float | `10.0` | Time step of the simulation. |
| Center | Point | `—` | — |
| Z Offset | Float | `0` | — |
| Attractor Position | Point | `—` | Position of the attractor in X and Y. |
| Attractor Z | Float | `0.5` | Position of the attractor along Z. |
| Axis | Point | `—` | — |
| Relative Flare Offset | Float | `1.5` | — |
| Multiplier | Float | `1` | Multiplies the strength. |
| Use 3D Points | Float | `1` | Uses X, Y and Z of the points instead of X and Y. |
| Input | ScriptVal | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValPointAttractor (ScriptVal/Modify).
Source: fuse vScriptValPointAttractor.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
