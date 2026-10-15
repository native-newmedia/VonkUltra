---
sidebar_position: 24
title: vJSONMap
description: "Normalize Array Values using various methods."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMap

Normalize Array Values using various methods.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMap.png" alt="vJSONMap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Normalization Method | Dropdown | `Min-Max (0 to 1)` | Method used to normalize the values. Options: Min-Max (0 to 1), Min-Max (Custom Range), Z-Score (Standardize), Unit Vector (L2 Norm), L1 Norm (Sum to 1), Max Abs (Scale by Max). |
| CustomMin | Float | `0` | — |
| CustomMax | Float | `1` | — |
| Normalize Per Axis | Integer | `1.0` | Normalizes X, Y and Z separately. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONMap (JSON/Modify).
Source: fuse vJSONMap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
