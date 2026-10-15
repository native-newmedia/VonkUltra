---
sidebar_position: 3
title: vArrayAttrRandomize
description: "Deterministic randomization for scalar arrays or point coordinates."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayAttrRandomize

Deterministic randomization for scalar arrays or point coordinates.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayAttrRandomize.png" alt="vArrayAttrRandomize node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distribution | Dropdown | `Uniform` | Uniform or Gaussian random values. |
| Apply To | Dropdown | `XYZ Coordinates` | Randomizes the XYZ coordinates or the scalar values. Options: XYZ Coordinates, Scalar Values. |
| Min Offset | Float | `-0.1` | Lower end of the random offset. |
| Max Offset | Float | `0.1` | Upper end of the random offset. |
| Seed | Integer | `0` | Seed of the random generator. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Randomize X | Integer | `1` | Randomizes X. |
| Randomize Y | Integer | `1` | Randomizes Y. |
| Randomize Z | Integer | `1` | Randomizes Z. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayAttrRandomize (Array/Modify).
Source: fuse vArrayAttrRandomize.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
