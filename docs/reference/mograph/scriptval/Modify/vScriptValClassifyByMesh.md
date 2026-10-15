---
sidebar_position: 11
title: vScriptValClassifyByMesh
description: "Classify input points as inside or outside a closed OBJ mesh using ray casting."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValClassifyByMesh

Classify input points as inside or outside a closed OBJ mesh using ray casting.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValClassifyByMesh.png" alt="vScriptValClassifyByMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Space | Dropdown | `Normal` | Surface offset is applied along the normal or in world space. Options: Normal, World. |
| Surface Offset Distance | Float | `0` | Moves the classification plane along the normal. |
| Flip Normal | Float | `0` | Reverses the mesh normal direction. |
| World Offset X | Float | `0` | World space offset X. Shown when the related option is enabled. |
| World Offset Y | Float | `0` | World space offset Y. Shown when the related option is enabled. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| World Offset Z | Float | `0` | World space offset Z. Shown when the related option is enabled. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Surface Band Thickness | Float | `0` | Points within this distance of the surface are treated as inside. |
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
Generated page — node: vScriptValClassifyByMesh (ScriptVal/Modify).
Source: fuse vScriptValClassifyByMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
