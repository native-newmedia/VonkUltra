---
sidebar_position: 1
title: vArrayFromCSV
description: "Creates a JSON array from a CSV row or column The \"Array Mode\" control provides two options: \"Extract Row\", and \"Extract Column\"."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromCSV

Creates a JSON array from a CSV row or column The "Array Mode" control provides two options: "Extract Row", and "Extract Column". This makes it easy to select which axis of CSV data you would like to grab a sample from. The "Ignore Header Row" checkbox will offset the first index position to start at line 2 in the CSV file. This will skip over a labelled header row in the source document to avoid that information being accessed as part of the ingested data. The output from vArrayFromCSV is typically connected to an vArrayGetIndex node. This makes it possible to select an individual cell of data.

<div className="node-badge-row">
  <span className="node-badge">Core / Array</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/array/vArrayFromCSV.png" alt="vArrayFromCSV node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Mode | Dropdown | `Extract Row` | Which axis of the CSV to extract: Extract Row or Extract Column. |
| Index | Integer | `1` | 1-based row or column number to extract, matching Array Mode. |
| Ignore Header Row | Integer | `0.0` | Skips the first line, so Index 1 refers to the first line of actual data rather than a header. |
| Input | Text | `—` | CSV text to parse. |
| Display Lines | Integer | `10` | Number of visible lines in the Input text editor before scrolling. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Input text editor instead of scrolling horizontally. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayFromDataWindow">vArrayFromDataWindow</a>
  <a className="node-chip" href="./vArrayFromJSON">vArrayFromJSON</a>
  <a className="node-chip" href="./vArrayFromLuaTable">vArrayFromLuaTable</a>
  <a className="node-chip" href="./vArrayFromMediaIn">vArrayFromMediaIn</a>
</div>

{/*
Generated page — node: vArrayFromCSV (Core/Array/Create).
Source: fuse vArrayFromCSV.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
