---
sidebar_position: 42
title: vJSONModifyResamplePath
description: "Resample ordered paths to even spacing by count or distance."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONModifyResamplePath

Resample ordered paths to even spacing by count or distance.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONModifyResamplePath.png" alt="vJSONModifyResamplePath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Target Count` | — |
| Target Count | Integer | `32` | — |
| Target Spacing | Float | `0.05` | — |
| Closed Path | Integer | `0.0` | — |
| Interpolation | Dropdown | `Linear` | — |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Interp Steps | Integer | `8` | — |
| Tension | Float | `0.0` | — |
| Points | DATATYPE | `—` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONModifyResamplePath (JSON/Modify).
Source: fuse vJSONModifyResamplePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
