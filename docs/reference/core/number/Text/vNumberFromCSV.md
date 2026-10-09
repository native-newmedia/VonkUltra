---
sidebar_position: 1
title: vNumberFromCSV
description: "Creates a Fusion Number object by extracting a single cell from a CSV formatted block of text The \"Row\" control is used to define the CSV line number to read."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberFromCSV

Creates a Fusion Number object by extracting a single cell from a CSV formatted block of text The "Row" control is used to define the CSV line number to read. The "Column" control is used to increment through each set of comma separated entries on a single line of CSV input data. The "Ignore Header Row" checkbox will offset the first index position to start at line 2 in the CSV file. This will skip over a labelled header row in the source document to avoid that information being accessed as part of the ingested data.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberFromCSV.png" alt="vNumberFromCSV node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Row | Integer | `1` | CSV line number to read. |
| Column | Integer | `1` | Comma-separated field on that line to return. |
| Ignore Header Row | Integer | `0.0` | Offsets Row by 1 so a labelled header line is skipped. |
| Input | Text | `—` | The CSV-formatted block of text to read from. |
| Display Lines | Integer | `10` | Number of lines shown in the Input text box in the Inspector. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Input text box instead of scrolling horizontally. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |
| Get Heading | Float | `—` | Renames this node to `csv_<value>`, using the Row/Column cell as the new name. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberFromText">vNumberFromText</a>
  <a className="node-chip" href="./vNumberXYZFromCSV">vNumberXYZFromCSV</a>
</div>

{/*
Generated page — node: vNumberFromCSV (Core/Number/Text).
Source: fuse vNumberFromCSV.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
