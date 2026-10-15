---
sidebar_position: 22
title: vScriptValGridPolar
description: "Creates a Polar Grid Array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGridPolar

Creates a Polar Grid Array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValGridPolar.png" alt="vScriptValGridPolar node" />
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
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValGridPolar (ScriptVal/Create).
Source: fuse vScriptValGridPolar.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
