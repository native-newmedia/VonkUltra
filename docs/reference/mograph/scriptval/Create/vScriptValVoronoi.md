---
sidebar_position: 57
title: vScriptValVoronoi
description: "Creates a Voronoi Array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValVoronoi

Creates a Voronoi Array.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValVoronoi.png" alt="vScriptValVoronoi node" />
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
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValVoronoi (ScriptVal/Create).
Source: fuse vScriptValVoronoi.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
