---
sidebar_position: 26
title: vScriptValMaskByMesh
description: "Keep only input points within a distance threshold of the OBJ mesh surface."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMaskByMesh

Keep only input points within a distance threshold of the OBJ mesh surface.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMaskByMesh.png" alt="vScriptValMaskByMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0.1` | Distance from the mesh at which the effect ends. |
| Min Distance | Float | `0.0` | Distance from the mesh below which points are kept. |
| Invert Mask | Integer | `0` | Swaps masked and unmasked areas. |
| Mask Mode | Dropdown | `Hard` | Hard cut or soft falloff. Options: Hard, Soft Falloff. |
| Falloff Distance | Float | `0.0` | — |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Weight Power | Float | `1.0` | — |
| Min Output Weight | Float | `0.01` | — |
| Append Weight As 4th Value | Integer | `0` | — |
| Keep Input If Mesh Missing | Integer | `1` | Outputs the input unchanged when no mesh is connected. |
| Output Position | Dropdown | `Original` | Output the original position or the closest point on the surface. Options: Original, Closest On Surface. |
| Surface Offset | Float | `0.0` | — |
| Points | DATATYPE | `—` | Point positions. |
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
Generated page — node: vScriptValMaskByMesh (ScriptVal/Modify).
Source: fuse vScriptValMaskByMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
