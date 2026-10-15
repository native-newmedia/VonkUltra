---
sidebar_position: 39
title: vArrayPointAttractorSpring
description: "2D/3D point attractor/repulsor with a PERSISTENT spring-damper simulation (velocity carries across frames, so motion can overshoot and jiggle before settling, unlike the plain Point Attractor)."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointAttractorSpring

2D/3D point attractor/repulsor with a PERSISTENT spring-damper simulation (velocity carries across frames, so motion can overshoot and jiggle before settling, unlike the plain Point Attractor).

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vArrayPointAttractorSpring yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Strength (+attract/-repel) | Float | `0.001` | Positive values pull points toward the attractor, negative values push them away. |
| Radius | Float | `1.0` | Radius of the effect. |
| Falloff Power | Float | `1.0` | Exponent of the falloff curve. |
| Spring Return | Float | `0.1` | Strength of the pull back to the start position. |
| Spring Bounce | Float | `0.9` | Amount of overshoot. |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Damping | Float | `0.9` | Reduces the movement speed over time. |
| Center | Point | `—` | — |
| Z Offset | Float | `0` | — |
| Attractor Position | Point | `—` | Position of the attractor in X and Y. |
| Attractor Z | Float | `0.5` | Position of the attractor along Z. |
| Axis | Point | `—` | — |
| Relative Flare Offset | Float | `1.5` | — |
| Multiplier | Float | `1` | Multiplies the strength. |
| Use 3D Points | Float | `1` | Uses X, Y and Z of the points instead of X and Y. |
| Reset Simulation | Integer | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayPointAttractorSpring (Array/Modify).
Source: fuse vArrayPointAttractorSpring.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
