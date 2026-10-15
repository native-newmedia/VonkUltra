---
sidebar_position: 44
title: vArrayProjectOnMesh
description: "Project input points onto the nearest OBJ mesh surface."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayProjectOnMesh

Project input points onto the nearest OBJ mesh surface.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayProjectOnMesh.png" alt="vArrayProjectOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Surface Offset | Float | `0` | Offset of the target from the mesh surface. |
| Projection Mode | Dropdown | `Closest Surface` | Closest surface point, nearest vertex or face center. Options: Closest Surface, Nearest Vertex, Face Center. |
| Offset Direction | Dropdown | `Surface Normal` | Direction of the offset. Options: Surface Normal, World +Y. |
| Projection Blend | Float | `1` | Mix between the original and the projected position. |
| Distance Mode | Dropdown | `No Limit` | How Max Distance is applied. Options: No Limit, Hard Cutoff, Clamp. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0` | Distance from the mesh at which the effect ends. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayProjectOnMesh (Array/Modify).
Source: fuse vArrayProjectOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
