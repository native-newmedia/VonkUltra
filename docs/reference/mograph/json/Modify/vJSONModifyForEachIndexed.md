---
sidebar_position: 23
title: vJSONModifyForEachIndexed
description: "Apply indexed/grouped transforms per point in a single pass."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONModifyForEachIndexed

Apply indexed/grouped transforms per point in a single pass.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONModifyForEachIndexed.png" alt="vJSONModifyForEachIndexed node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Offset X by Index` | — |
| Group Size | Integer | `8` | — |
| Index Amount | Float | `0.01` | — |
| Group Amount | Float | `0.1` | — |
| Random Min | Float | `-0.1` | — |

<details>
<summary>+10 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Max | Float | `0.1` | — |
| animSeparator | Float | `—` | — |
| Auto Animate | Integer | `0` | — |
| Speed | Float | `1.0` | — |
| Duration (frames) | Integer | `30` | — |
| Easing | Dropdown | `Linear` | — |
| Loop Mode | Dropdown | `Off` | — |
| Input | DATATYPE | `—` | — |
| Mask | DATATYPE | `—` | — |
| Invert Mask | Integer | `0` | — |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONModifyForEachIndexed (JSON/Modify).
Source: fuse vJSONModifyForEachIndexed.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
