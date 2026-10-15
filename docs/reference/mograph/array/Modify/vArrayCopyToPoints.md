---
sidebar_position: 15
title: vArrayCopyToPoints
description: "Copies a template point set onto each target point with scale and seeded rotation variation."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayCopyToPoints

Copies a template point set onto each target point with scale and seeded rotation variation.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCopyToPoints.png" alt="vArrayCopyToPoints node" />
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
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayCopyToPoints (Array/Modify).
Source: fuse vArrayCopyToPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
