---
sidebar_position: 4
title: vJSONAttrTransfer
description: "Transfer scalar values from source to target and optionally bake them into XYZ output positions."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAttrTransfer

Transfer scalar values from source to target and optionally bake them into XYZ output positions.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAttrTransfer.png" alt="vJSONAttrTransfer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Transfer Mode | Dropdown | `Nearest` | Nearest source point or radius weighted average. Options: Nearest, Radius Weighted. |
| Radius | Float | `0.25` | Search radius for Radius Weighted. |
| Falloff Power | Float | `2` | Exponent of the falloff curve. |
| Default Value | Float | `0` | Value used when no source point is found. |
| Output Mode | Dropdown | `Store Attribute in 4th Value` | How the transferred value is stored or applied. Options: Store Attribute in 4th Value, Offset X, Offset Y, Offset Z, Offset XYZ, Replace XYZ, Replace X Only, Replace Y Only, Replace Z Only. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Apply Amount | Float | `1` | Amount of the result applied to the points. |
| Source | DATATYPE | `—` | — |
| Target | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONAttrTransfer (JSON/Modify).
Source: fuse vJSONAttrTransfer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
