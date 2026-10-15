---
sidebar_position: 1
title: vScriptValAttractorPoints
description: "Generate a point path from a strange attractor."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAttractorPoints

Generate a point path from a strange attractor.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValAttractorPoints.png" alt="vScriptValAttractorPoints node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| System | Dropdown | `Lorenz` | Lorenz or Rossler attractor. |
| Point Count | Integer | `2000` | Number of points. |
| Warmup Steps | Integer | `100` | Steps skipped before the points are recorded. |
| Step Size | Float | `0.01` | Time step of the integration. |
| Scale | Float | `0.02` | Scale of the result. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Param A | Float | `10` | First attractor parameter. |
| Param B | Float | `28` | Second attractor parameter. |
| Param C | Float | `2.6666666667` | Third attractor parameter. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValCubicBezier">vScriptValCubicBezier</a>
</div>

{/*
Generated page — node: vScriptValAttractorPoints (ScriptVal/Create).
Source: fuse vScriptValAttractorPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
