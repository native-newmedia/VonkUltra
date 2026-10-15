---
sidebar_position: 23
title: vArrayLookAt
description: "Build per-point look-at direction vectors."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayLookAt

Build per-point look-at direction vectors.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayLookAt.png" alt="vArrayLookAt node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target X | Float | `0` | Target position X. |
| Target Y | Float | `0` | Target position Y. |
| Target Z | Float | `0` | Target position Z. |
| Forward Axis | Dropdown | `+Z (default)` | Axis that points at the target. Options: +Z (default), -Z (flip), +Y, -Y, +X, -X. |
| Invert Direction | Integer | `0` | Reverses the direction. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Normalize | Integer | `1` | Outputs unit length vectors. |
| Up X | Integer | `0` | Up vector X. |
| Up Y | Integer | `1` | Up vector Y. |
| Up Z | Integer | `0` | Up vector Z. |
| Output Mode | Dropdown | `Direction Vector` | Type of the output. Options: Direction Vector, Euler Angles, Full Basis (9-component). |
| Per-Point Target | Integer | `0` | Uses the Targets input for each point. |
| Points | DATATYPE | `—` | Point positions. |
| Targets | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayLookAt (Array/Modify).
Source: fuse vArrayLookAt.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
