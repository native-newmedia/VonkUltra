---
sidebar_position: 59
title: vJSONSnapMeshVertex
description: "Snap each input point to the nearest OBJ mesh vertex."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSnapMeshVertex

Snap each input point to the nearest OBJ mesh vertex.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSnapMeshVertex.png" alt="vJSONSnapMeshVertex node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Snap Mode | Dropdown | `Vertex` | Snap to the nearest vertex, the surface or the nearest centroid. Options: Vertex, Surface, Centroid. |
| Blend | Float | `1` | Mix between the original points (0) and the result (1). |

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
Generated page — node: vJSONSnapMeshVertex (JSON/Modify).
Source: fuse vJSONSnapMeshVertex.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
