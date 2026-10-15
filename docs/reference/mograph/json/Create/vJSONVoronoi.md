---
sidebar_position: 57
title: vJSONVoronoi
description: "Creates a Voronoi Array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONVoronoi

Creates a Voronoi Array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONVoronoi.png" alt="vJSONVoronoi node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number of Cells | Integer | `20` | Number of cells. |
| Width | Integer | `100` | Width. |
| Height | Integer | `100` | Height. |
| Calculation Resolution | Integer | `128` | Resolution of the calculation. |
| Simplify | Float | `0` | Amount of outline simplification. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Seed | Integer | `0` | Seed of the random generator. |
| Range Select | Integer | `0` | Outputs only a range of cells. |
| Start | Integer | `1` | First cell of the range. |
| End | Integer | `10` | Last cell of the range. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONVoronoi (JSON/Create).
Source: fuse vJSONVoronoi.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
