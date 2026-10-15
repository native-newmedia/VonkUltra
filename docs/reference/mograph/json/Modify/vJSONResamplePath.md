---
sidebar_position: 50
title: vJSONResamplePath
description: "Resample ordered paths to even spacing by count or distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONResamplePath

Resample ordered paths to even spacing by count or distance.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONResamplePath.png" alt="vJSONResamplePath node" />
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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONResamplePath (JSON/Modify).
Source: fuse vJSONResamplePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
