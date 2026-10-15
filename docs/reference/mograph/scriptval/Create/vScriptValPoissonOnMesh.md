---
sidebar_position: 45
title: vScriptValPoissonOnMesh
description: "Generate Poisson-like points across OBJ mesh surface area."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPoissonOnMesh

Generate Poisson-like points across OBJ mesh surface area.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPoissonOnMesh.png" alt="vScriptValPoissonOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Text. |
| Filename | Text | `—` | File to read. Shown when Input Source is File. |
| URL | Text | `—` | Address to read. Shown when Input Source is URL. |
| Input | Text | `—` | Text to read. Shown when Input Source is Text. |
| Scale File Units By | Float | `1` | Multiplies the coordinates of the file. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point Count | Integer | `1000` | Number of points. |
| Random Seed | Integer | `0` | Seed of the random generator. |
| Minimum Distance | Float | `0.05` | Smallest distance between points. |
| Rejection Attempts | Integer | `30` | Tries per point before it is dropped. |
| Surface Offset | Float | `0` | Moves the points away from the surface along the normal. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValPoissonOnMesh (ScriptVal/Create).
Source: fuse vScriptValPoissonOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
