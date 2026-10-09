---
sidebar_position: 3
title: vScriptValFromCSV
description: "Creates a ScriptVal Lua table from a CSV row or column"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromCSV

Creates a ScriptVal Lua table from a CSV row or column

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFromCSV.png" alt="vScriptValFromCSV node" />
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
  <a className="node-chip" href="./vScriptValCreate">vScriptValCreate</a>
  <a className="node-chip" href="./vScriptValFromApp">vScriptValFromApp</a>
  <a className="node-chip" href="./vScriptValFromDate">vScriptValFromDate</a>
  <a className="node-chip" href="./vScriptValFromListFiles">vScriptValFromListFiles</a>
</div>

{/*
Generated page — node: vScriptValFromCSV (Core/ScriptVal/Create).
Source: fuse vScriptValFromCSV.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
