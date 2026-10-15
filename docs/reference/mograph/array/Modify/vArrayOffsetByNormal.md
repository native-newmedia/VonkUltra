---
sidebar_position: 31
title: vArrayOffsetByNormal
description: "Offset each input point along the nearest OBJ mesh surface normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayOffsetByNormal

Offset each input point along the nearest OBJ mesh surface normal.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayOffsetByNormal.png" alt="vArrayOffsetByNormal node" />
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
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayOffsetByNormal (Array/Modify).
Source: fuse vArrayOffsetByNormal.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
