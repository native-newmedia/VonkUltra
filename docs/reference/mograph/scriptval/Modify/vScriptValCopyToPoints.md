---
sidebar_position: 15
title: vScriptValCopyToPoints
description: "Copies a template point set onto each target point with scale and seeded rotation variation."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCopyToPoints

Copies a template point set onto each target point with scale and seeded rotation variation.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCopyToPoints.png" alt="vScriptValCopyToPoints node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Template Scale | Float | `1` | Scale of each copy. |
| Scale X | Float | `1` | Scale along X. |
| Scale Y | Float | `1` | Scale along Y. |
| Scale Z | Float | `1` | Scale along Z. |
| Base Rotate Z | Float | `0` | Rotation of each copy around Z. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Rotate Z | Float | `0` | Random extra rotation around Z. |
| Seed | Integer | `0` | Seed of the random generator. |
| Random Offset X | Float | `0` | Random offset along X. |
| Random Offset Y | Float | `0` | Random offset along Y. |
| Random Offset Z | Float | `0` | Random offset along Z. |
| Template | DATATYPE | `—` | — |
| Points | DATATYPE | `—` | Point positions. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValCopyToPoints (ScriptVal/Modify).
Source: fuse vScriptValCopyToPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
