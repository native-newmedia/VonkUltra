---
sidebar_position: 48
title: vJSONRepeat
description: "Repeat point arrays with per-copy transform offsets."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRepeat

Repeat point arrays with per-copy transform offsets.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRepeat.png" alt="vJSONRepeat node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Copies | Integer | `3` | Number of copies. |
| Offset X | Float | `0.1` | Offset per copy along X. |
| Offset Y | Float | `0` | Offset per copy along Y. |
| Offset Z | Float | `0` | Offset per copy along Z. |
| Rotate Step Z | Float | `0` | Rotation per copy around Z. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale Step | Float | `0` | Scale change per copy. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONRepeat (JSON/Modify).
Source: fuse vJSONRepeat.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
