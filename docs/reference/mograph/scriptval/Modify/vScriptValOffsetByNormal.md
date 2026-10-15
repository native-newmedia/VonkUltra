---
sidebar_position: 31
title: vScriptValOffsetByNormal
description: "Offset each input point along the nearest OBJ mesh surface normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValOffsetByNormal

Offset each input point along the nearest OBJ mesh surface normal.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValOffsetByNormal.png" alt="vScriptValOffsetByNormal node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Distance | Float | `0` | Distance along the normal. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
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
Generated page — node: vScriptValOffsetByNormal (ScriptVal/Modify).
Source: fuse vScriptValOffsetByNormal.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
