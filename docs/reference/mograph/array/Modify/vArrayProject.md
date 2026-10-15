---
sidebar_position: 43
title: vArrayProject
description: "Project point arrays to plane/sphere/cylinder."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayProject

Project point arrays to plane/sphere/cylinder.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayProject.png" alt="vArrayProject node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Plane Z` | Shape of the projection. Options: Plane Z, Sphere, Cylinder Z, Plane X, Plane Y, Cylinder X, Cylinder Y. |
| Plane Z | Float | `0` | Position of the projection plane. |
| Center X | Float | `0` | Center position X. |
| Center Y | Float | `0` | Center position Y. |
| Center Z | Float | `0` | Center position Z. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.5` | Radius of the effect. |
| Blend | Float | `1.0` | Mix between the original points (0) and the result (1). |
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
Generated page — node: vArrayProject (Array/Modify).
Source: fuse vArrayProject.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
