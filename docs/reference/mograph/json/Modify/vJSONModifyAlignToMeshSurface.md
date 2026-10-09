---
sidebar_position: 11
title: vJSONModifyAlignToMeshSurface
description: "Replace input points with the surface normal of the nearest OBJ mesh triangle."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONModifyAlignToMeshSurface

Replace input points with the surface normal of the nearest OBJ mesh triangle.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONModifyAlignToMeshSurface.png" alt="vJSONModifyAlignToMeshSurface node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | — |
| Scale File Units By | Float | `1` | — |
| Output Mode | Dropdown | `Normals` | — |
| Normal Length | Float | `1` | — |
| Normal Anchor | Dropdown | `Vector` | — |

<details>
<summary>+9 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Flip Normals | Float | `0` | — |
| Blend To Surface | Float | `1` | — |
| Affect X | Float | `1` | — |
| Affect Y | Float | `1` | — |
| Affect Z | Float | `1` | — |
| Mesh Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |
| URL | Text | `—` | — |
| OBJ Text | Text | `—` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONModifyAlignToMeshSurface (JSON/Modify).
Source: fuse vJSONModifyAlignToMeshSurface.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
