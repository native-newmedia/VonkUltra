---
sidebar_position: 4
title: vTextFromCSVViewer
description: "View a CSV row or column in the Inspector"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextFromCSVViewer

View a CSV row or column in the Inspector

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextFromCSVViewer.png" alt="vTextFromCSVViewer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Mode | Dropdown | `Extract Row` | How the CSV is read — a single Row or Column by Index, or the whole CSV rendered as a Grid by row or column. |
| Index | Integer | `1` | Row or Column number to extract, used in Extract Row/Extract Column mode. |
| Ignore Header Row | Integer | `0.0` | Offsets the first index position to skip a labelled header line. |
| Input | Text | `—` | The CSV-formatted block of text to view. |
| Show Dump | Integer | `0.0` | Prints diagnostic output to the Console window. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |
| Display Lines | Integer | `25` | Number of lines shown in the Input text box in the Inspector. |
| ScriptVal | ScriptVal | `—` | Read-only — the extracted row/column/grid data, shown in a ScriptVal viewer. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDelay">vTextDelay</a>
  <a className="node-chip" href="./vTextDump">vTextDump</a>
  <a className="node-chip" href="./vTextExpandEscapedCharacters">vTextExpandEscapedCharacters</a>
  <a className="node-chip" href="./vTextFromFilename">vTextFromFilename</a>
</div>

{/*
Generated page — node: vTextFromCSVViewer (Core/Text/Utility).
Source: fuse vTextFromCSVViewer.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
