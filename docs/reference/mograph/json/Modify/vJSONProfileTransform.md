---
sidebar_position: 42
title: vJSONProfileTransform
description: "Transform 2D sweep profiles (translate/rotate/scale/mirror)."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONProfileTransform

Transform 2D sweep profiles (translate/rotate/scale/mirror).

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONProfileTransform.png" alt="vJSONProfileTransform node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Translate X | Float | `0` | Translation along X. |
| Translate Y | Float | `0` | Translation along Y. |
| Rotate (deg) | Float | `0` | Rotation in degrees. |
| Scale X | Float | `1` | Scale along X. |
| Scale Y | Float | `1` | Scale along Y. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mirror X | Integer | `0` | Mirrors along X. |
| Mirror Y | Integer | `0` | Mirrors along Y. |
| Profile | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONProfileTransform (JSON/Modify).
Source: fuse vJSONProfileTransform.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
