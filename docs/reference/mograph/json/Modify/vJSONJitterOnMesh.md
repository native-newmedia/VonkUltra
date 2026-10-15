---
sidebar_position: 22
title: vJSONJitterOnMesh
description: "Jitter input points randomly in the mesh surface tangent plane then reproject onto OBJ mesh surface."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONJitterOnMesh

Jitter input points randomly in the mesh surface tangent plane then reproject onto OBJ mesh surface.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONJitterOnMesh.png" alt="vJSONJitterOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Jitter Radius | Float | `0.05` | Maximum random distance along the surface. |
| Random Seed | Integer | `0` | Seed of the random generator. |
| Animate Jitter | Float | `0` | Changes the jitter over time. |
| Animation Speed | Float | `1` | Speed of the animation over time. 0 is static. |
| Surface Offset | Float | `0` | Offset of the target from the mesh surface. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
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
Generated page — node: vJSONJitterOnMesh (JSON/Modify).
Source: fuse vJSONJitterOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
