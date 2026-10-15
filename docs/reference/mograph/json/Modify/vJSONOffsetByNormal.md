---
sidebar_position: 31
title: vJSONOffsetByNormal
description: "Offset each input point along the nearest OBJ mesh surface normal."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONOffsetByNormal

Offset each input point along the nearest OBJ mesh surface normal.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONOffsetByNormal.png" alt="vJSONOffsetByNormal node" />
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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONOffsetByNormal (JSON/Modify).
Source: fuse vJSONOffsetByNormal.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
