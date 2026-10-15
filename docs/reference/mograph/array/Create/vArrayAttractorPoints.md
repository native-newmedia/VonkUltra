---
sidebar_position: 1
title: vArrayAttractorPoints
description: "Generate a point path from a strange attractor."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayAttractorPoints

Generate a point path from a strange attractor.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayAttractorPoints.png" alt="vArrayAttractorPoints node" />
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
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayCubicBezier">vArrayCubicBezier</a>
</div>

{/*
Generated page — node: vArrayAttractorPoints (Array/Create).
Source: fuse vArrayAttractorPoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
