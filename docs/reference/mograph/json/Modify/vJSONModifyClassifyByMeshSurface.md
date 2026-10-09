---
sidebar_position: 19
title: vJSONModifyClassifyByMeshSurface
description: "Classify input points as inside or outside a closed OBJ mesh using ray casting."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONModifyClassifyByMeshSurface

Classify input points as inside or outside a closed OBJ mesh using ray casting.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONModifyClassifyByMeshSurface.png" alt="vJSONModifyClassifyByMeshSurface node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | — |
| Mesh Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |
| URL | Text | `—` | — |
| OBJ Text | Text | `—` | — |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale File Units By | Float | `1` | — |
| Offset Space | Dropdown | `Normal` | — |
| Surface Offset Distance | Float | `0` | — |
| Flip Normal | Float | `0` | — |
| World Offset X | Float | `0` | — |
| World Offset Y | Float | `0` | — |
| World Offset Z | Float | `0` | — |
| Affect X | Float | `1` | — |
| Affect Y | Float | `1` | — |
| Affect Z | Float | `1` | — |
| Surface Band Thickness | Float | `0` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONModifyClassifyByMeshSurface (JSON/Modify).
Source: fuse vJSONModifyClassifyByMeshSurface.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
