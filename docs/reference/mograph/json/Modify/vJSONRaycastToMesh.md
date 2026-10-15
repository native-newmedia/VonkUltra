---
sidebar_position: 46
title: vJSONRaycastToMesh
description: "Cast rays from input points against OBJ mesh surface to find intersection hits."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRaycastToMesh

Cast rays from input points against OBJ mesh surface to find intersection hits.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRaycastToMesh.png" alt="vJSONRaycastToMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Direction Array | DATATYPE | `—` | — |
| Ray Mode | Dropdown | `Global Dir` | Ray from a global direction, toward a target point, or from a direction array. Options: Global Dir, Target Point, Dir Array. |
| Direction X | Float | `0` | Direction X. |
| Direction Y | Float | `-1` | Direction Y. |
| Direction Z | Float | `0` | Direction Z. |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target X | Float | `0` | Target position X. Shown when the related option is enabled. |
| Target Y | Float | `0` | Target position Y. Shown when the related option is enabled. |
| Target Z | Float | `0` | Target position Z. Shown when the related option is enabled. |
| Miss Behavior | Dropdown | `Pass Through` | Keeps the point or removes it when the ray misses. Options: Pass Through, Drop Point. |
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
Generated page — node: vJSONRaycastToMesh (JSON/Modify).
Source: fuse vJSONRaycastToMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
