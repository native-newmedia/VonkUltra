---
sidebar_position: 50
title: vScriptValModifyTrimByMeshBounds
description: "Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValModifyTrimByMeshBounds

Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValModifyTrimByMeshBounds.png" alt="vScriptValModifyTrimByMeshBounds node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | — |
| Bounds Source | Dropdown | `OBJ Mesh` | — |
| Bounds Array | DATATYPE | `—` | — |
| Mesh Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| URL | Text | `—` | — |
| OBJ Text | Text | `—` | — |
| Scale File Units By | Float | `1` | — |
| AABB Padding | Float | `0` | — |
| Mode | Dropdown | `Drop` | — |
| Test X | Integer | `1` | — |
| Test Y | Integer | `1` | — |
| Test Z | Integer | `1` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValModifyTrimByMeshBounds (ScriptVal/Modify).
Source: fuse vScriptValModifyTrimByMeshBounds.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
