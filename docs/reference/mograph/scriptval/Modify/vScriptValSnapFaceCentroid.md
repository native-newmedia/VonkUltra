---
sidebar_position: 58
title: vScriptValSnapFaceCentroid
description: "Snap each input point to the nearest OBJ triangle face centroid."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValSnapFaceCentroid

Snap each input point to the nearest OBJ triangle face centroid.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValSnapFaceCentroid.png" alt="vScriptValSnapFaceCentroid node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Blend | Float | `1` | Mix between the original points (0) and the result (1). |
| Max Distance | Float | `0` | Distance from the mesh at which the effect ends. |
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
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValSnapFaceCentroid (ScriptVal/Modify).
Source: fuse vScriptValSnapFaceCentroid.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
