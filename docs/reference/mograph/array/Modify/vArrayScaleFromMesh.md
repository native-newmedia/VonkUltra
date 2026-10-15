---
sidebar_position: 54
title: vArrayScaleFromMesh
description: "Scale each point distance from nearest OBJ mesh surface point by multiplier."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayScaleFromMesh

Scale each point distance from nearest OBJ mesh surface point by multiplier.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayScaleFromMesh.png" alt="vArrayScaleFromMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Distance Multiplier | Float | `1` | Multiplies the distance to the mesh. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Points | DATATYPE | `—` | — |
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
Generated page — node: vArrayScaleFromMesh (Array/Modify).
Source: fuse vArrayScaleFromMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
