---
sidebar_position: 10
title: vJSONClampToMeshProx
description: "Clamp points farther than max distance from mesh down to that max distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONClampToMeshProx

Clamp points farther than max distance from mesh down to that max distance.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONClampToMeshProx.png" alt="vJSONClampToMeshProx node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `1` | Distance from the mesh at which the effect ends. |
| Clamp Mode | Dropdown | `Outside > Max` | Clamps points outside the maximum distance, or points inside it. Options: Outside > Max, Inside &lt; Max. |
| Reference | Dropdown | `Surface` | Measures the distance to the surface, the nearest vertex or the nearest centroid. Options: Surface, Vertex, Centroid. |
| Clamp Blend | Float | `1` | Mix between the original and the clamped position. |
| Distance Offset | Float | `0` | Added to Max Distance. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Preserve Extra Values | Float | `1` | Keeps values beyond X, Y, Z. |
| Pass Through If No Mesh | Float | `1` | Outputs the input unchanged when no mesh is connected. |
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
Generated page — node: vJSONClampToMeshProx (JSON/Modify).
Source: fuse vJSONClampToMeshProx.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
