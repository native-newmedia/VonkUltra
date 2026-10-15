---
sidebar_position: 65
title: vScriptValTrimByMeshBounds
description: "Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTrimByMeshBounds

Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTrimByMeshBounds.png" alt="vScriptValTrimByMeshBounds node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Bounds Source | Dropdown | `Array Points` | Bounds from the mesh points or from a bounds array. Options: Array Points, Bounds Array. |
| AABB Padding | Float | `0` | Grows the bounding box on all sides. |
| Mode | Dropdown | `Drop` | Drop removes points outside the bounds. Clamp moves them to the bounds. |
| Test X | Integer | `1` | Tests the X axis. |
| Test Y | Integer | `1` | Tests the Y axis. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Test Z | Integer | `1` | Tests the Z axis. |
| Points | DATATYPE | `—` | Point positions. |
| Bounds Array | DATATYPE | `—` | — |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValTrimByMeshBounds (ScriptVal/Modify).
Source: fuse vScriptValTrimByMeshBounds.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
