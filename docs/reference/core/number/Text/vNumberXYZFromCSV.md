---
sidebar_position: 3
title: vNumberXYZFromCSV
description: "Creates a set of XYZ Fusion Number objects by extracting three cells from a CSV formatted block of text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberXYZFromCSV

Creates a set of XYZ Fusion Number objects by extracting three cells from a CSV formatted block of text

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberXYZFromCSV.png" alt="vNumberXYZFromCSV node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Row | Integer | `1` | CSV line number to read all three values from. |
| Column X | Integer | `1` | Comma-separated field on that line used for the X value. |
| Column Y | Integer | `1` | Comma-separated field on that line used for the Y value. |
| Column Z | Integer | `1` | Comma-separated field on that line used for the Z value. |
| Scale X | Float | `1` | Multiplier applied to the X value when Apply Scale is on. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale Y | Float | `1` | Multiplier applied to the Y value when Apply Scale is on. |
| Scale Z | Float | `1` | Multiplier applied to the Z value when Apply Scale is on. |
| Apply Scale | Integer | `1.0` | Enables the Scale X/Y/Z multipliers. |
| Input | Text | `—` | The CSV-formatted block of text to read from. |
| Ignore Header Row | Integer | `1.0` | Offsets Row by 1 so a labelled header line is skipped. |
| Display Lines | Integer | `10` | Number of lines shown in the Input text box in the Inspector. |
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Input text box instead of scrolling horizontally. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberFromCSV">vNumberFromCSV</a>
  <a className="node-chip" href="./vNumberFromText">vNumberFromText</a>
</div>

{/*
Generated page — node: vNumberXYZFromCSV (Core/Number/Text).
Source: fuse vNumberXYZFromCSV.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
