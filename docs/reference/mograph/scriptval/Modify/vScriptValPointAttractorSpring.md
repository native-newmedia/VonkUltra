---
sidebar_position: 57
title: vScriptValPointAttractorSpring
description: "2D/3D point attractor/repulsor with a PERSISTENT spring-damper simulation (velocity carries across frames, so motion can overshoot and jiggle before settling, unlike the plain Point Attractor)."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointAttractorSpring

2D/3D point attractor/repulsor with a PERSISTENT spring-damper simulation (velocity carries across frames, so motion can overshoot and jiggle before settling, unlike the plain Point Attractor).

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vScriptValPointAttractorSpring yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Strength (+attract/-repel) | Float | `0.001` | — |
| Radius | Float | `1.0` | — |
| Falloff Power | Float | `1.0` | — |
| Spring Return | Float | `0.1` | — |
| Spring Bounce | Float | `0.9` | — |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Damping | Float | `0.9` | — |
| Center | Point | `—` | — |
| Z Offset | Float | `0` | — |
| Attractor Position | Point | `—` | — |
| Attractor Z | Float | `0.5` | — |
| Axis | Point | `—` | — |
| Relative Flare Offset | Float | `1.5` | — |
| Multiplier | Float | `1` | — |
| Use 3D Points | Float | `1` | — |
| Reset Simulation | Integer | `0.0` | — |
| ScriptVal | ScriptVal | `—` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValPointAttractorSpring (ScriptVal/Modify).
Source: fuse vScriptValPointAttractorSpring.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
