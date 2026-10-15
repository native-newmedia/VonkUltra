---
sidebar_position: 3
title: vScriptValAttrRandomize
description: "Deterministic randomization for scalar arrays or point coordinates."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAttrRandomize

Deterministic randomization for scalar arrays or point coordinates.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValAttrRandomize.png" alt="vScriptValAttrRandomize node" />
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
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValAttrRandomize (ScriptVal/Modify).
Source: fuse vScriptValAttrRandomize.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
