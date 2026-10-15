---
sidebar_position: 47
title: vJSONRelaxOnMesh
description: "Iteratively relax scattered points toward even distribution on OBJ mesh surface."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRelaxOnMesh

Iteratively relax scattered points toward even distribution on OBJ mesh surface.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRelaxOnMesh.png" alt="vJSONRelaxOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Surface Offset | Float | `0` | Offset of the target from the mesh surface. |
| Relax Iterations | Integer | `10` | Number of smoothing passes. |
| Relax Strength | Float | `0.5` | Strength of each pass. |
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect Z | Float | `1` | Applies the effect to Z. |
| Points | DATATYPE | `—` | Point positions. |
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
Generated page — node: vJSONRelaxOnMesh (JSON/Modify).
Source: fuse vJSONRelaxOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
