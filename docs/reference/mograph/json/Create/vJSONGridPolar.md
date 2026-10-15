---
sidebar_position: 22
title: vJSONGridPolar
description: "Creates a Polar Grid Array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONGridPolar

Creates a Polar Grid Array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONGridPolar.png" alt="vJSONGridPolar node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number of Rings | Integer | `5` | Number of rings. |
| Points per Ring | Integer | `12` | Points on each ring. |
| Inner Radius | Float | `0.5` | Radius of the first ring. |
| Ring Spacing | Float | `0.5` | Distance between rings. |
| Start Angle (deg) | Float | `0` | Angle of the first point. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sweep Angle (deg) | Float | `360` | Angle covered by each ring. |
| Z Offset per Ring | Float | `0` | Z shift per ring. |
| Base Z | Float | `0` | Z position of the first ring. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONGridPolar (JSON/Create).
Source: fuse vJSONGridPolar.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
