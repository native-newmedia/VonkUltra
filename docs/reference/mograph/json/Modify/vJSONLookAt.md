---
sidebar_position: 23
title: vJSONLookAt
description: "Build per-point look-at direction vectors."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLookAt

Build per-point look-at direction vectors.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLookAt.png" alt="vJSONLookAt node" />
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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONLookAt (JSON/Modify).
Source: fuse vJSONLookAt.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
