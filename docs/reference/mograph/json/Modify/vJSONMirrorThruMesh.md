---
sidebar_position: 29
title: vJSONMirrorThruMesh
description: "Reflect each input point through the nearest OBJ mesh surface point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMirrorThruMesh

Reflect each input point through the nearest OBJ mesh surface point.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMirrorThruMesh.png" alt="vJSONMirrorThruMesh node" />
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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONMirrorThruMesh (JSON/Modify).
Source: fuse vJSONMirrorThruMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
