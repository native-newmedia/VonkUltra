---
sidebar_position: 29
title: vArrayMirrorThruMesh
description: "Reflect each input point through the nearest OBJ mesh surface point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayMirrorThruMesh

Reflect each input point through the nearest OBJ mesh surface point.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayMirrorThruMesh.png" alt="vArrayMirrorThruMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mirror Through | Dropdown | `Surface` | Reflect through the surface, the nearest vertex or the nearest face centroid. Options: Surface, Vertex, Face Centroid. |
| Blend | Float | `1` | Mix between the original points (0) and the result (1). |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
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
Generated page — node: vArrayMirrorThruMesh (Array/Modify).
Source: fuse vArrayMirrorThruMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
