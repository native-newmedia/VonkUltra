---
sidebar_position: 65
title: vJSONTrimByMeshBounds
description: "Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTrimByMeshBounds

Trim or clamp input points using the axis-aligned bounding box of an OBJ mesh or a second point array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTrimByMeshBounds.png" alt="vJSONTrimByMeshBounds node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Bounds Source | Dropdown | `Array Points` | Bounds from the mesh points or from a bounds array. Options: Array Points, Bounds Array. |
| AABB Padding | Float | `0` | Grows the bounding box on all sides. |
| Mode | Dropdown | `Drop` | Drop removes points outside the bounds. Clamp moves them to the bounds. |
| Test X | Integer | `1` | Tests the X axis. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Test Y | Integer | `1` | Tests the Y axis. |
| Test Z | Integer | `1` | Tests the Z axis. |
| JSON Points | DATATYPE | `—` | — |
| Bounds Array | DATATYPE | `—` | — |
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
Generated page — node: vJSONTrimByMeshBounds (JSON/Modify).
Source: fuse vJSONTrimByMeshBounds.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
