---
sidebar_position: 61
title: vScriptValSortByMeshProx
description: "Sort points by ascending distance to nearest OBJ mesh surface point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValSortByMeshProx

Sort points by ascending distance to nearest OBJ mesh surface point.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValSortByMeshProx.png" alt="vScriptValSortByMeshProx node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Proximity To | Dropdown | `Surface` | Distance is measured to the surface, the nearest vertex or the nearest face centroid. Options: Surface, Vertex, Face Centroid. |
| Sort Order | Dropdown | `Ascending` | Ascending or Descending. |
| Blend To Target | Float | `0` | Mix between the original and the target position. |
| Target Offset | Float | `0` | Offset of the target position. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
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
Generated page — node: vScriptValSortByMeshProx (ScriptVal/Modify).
Source: fuse vScriptValSortByMeshProx.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
