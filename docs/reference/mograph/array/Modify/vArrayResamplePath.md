---
sidebar_position: 50
title: vArrayResamplePath
description: "Resample ordered paths to even spacing by count or distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayResamplePath

Resample ordered paths to even spacing by count or distance.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayResamplePath.png" alt="vArrayResamplePath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Target Count` | Resample to a point count or to a spacing. Options: Target Count, Target Spacing. |
| Target Count | Integer | `32` | Number of output points. Shown when Mode is Target Count. |
| Target Spacing | Float | `0.05` | Distance between output points. Shown when Mode is Target Spacing. Shown when the related option is enabled. |
| Closed Path | Integer | `0.0` | Treats the points as a closed loop. |
| Interpolation | Dropdown | `Linear` | Interpolation used between points. Options: Linear, Catmull-Rom, B-Spline, Cardinal. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Interp Steps | Integer | `8` | Interpolation subdivisions per segment. |
| Tension | Float | `0.0` | Tension of the spline. Shown when the related option is enabled. |
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
Generated page — node: vArrayResamplePath (Array/Modify).
Source: fuse vArrayResamplePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
