---
sidebar_position: 36
title: vArrayParametricCurve
description: "Generate points from parametric expressions."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayParametricCurve

Generate points from parametric expressions.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayParametricCurve.png" alt="vArrayParametricCurve node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X(t) | Text | `—` | Expression for X. |
| Y(t) | Text | `—` | Expression for Y. |
| Z(t) | Text | `—` | Expression for Z. |
| T Min | Float | `0` | First value of t. |
| T Max | Float | `2 * math.pi` | Last value of t. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sample Count | Integer | `360` | Number of sampled points. |
| Scale | Float | `1` | Scale of the result. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayAttractorPoints">vArrayAttractorPoints</a>
</div>

{/*
Generated page — node: vArrayParametricCurve (Array/Create).
Source: fuse vArrayParametricCurve.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
