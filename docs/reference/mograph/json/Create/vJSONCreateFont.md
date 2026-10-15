---
sidebar_position: 5
title: vJSONCreateFont
description: "Generates a JSON array-based font."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONCreateFont

Generates a JSON array-based font.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

{/* No screenshot available for vJSONCreateFont yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Text. |
| Filename | Text | `—` | File to read. Shown when Input Source is File. |
| URL | Text | `—` | Address to read. Shown when Input Source is URL. |
| Input | Text | `—` | Text to read. Shown when Input Source is Text. |
| Styled Text | Text | `—` | Text to convert. |

<details>
<summary>+20 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Size | Float | `1.0` | Text size. |
| Character Spacing | Float | `0.05` | Extra spacing between characters. |
| Line Spacing | Float | `—` | — |
| Letter Case | Dropdown | `ORIGINAL` | ORIGINAL, UPPER or LOWER. |
| Flip X | Integer | `1.0` | Mirrors the font along X. |
| Flip Y | Integer | `0.0` | Mirrors the result along Y. |
| Justification | Dropdown | `Left` | — |
| Horizontal Adjustment | Float | `0.0` | Horizontal offset. |
| Vertical Adjustment | Float | `0.0` | Vertical offset. |
| Sample Points | Integer | `1` | Number of points per outline. |
| X Offset | Float | `—` | Moves the result along X. |
| Y Offset | Float | `—` | Moves the result along Y. |
| Z Offset | Float | `0.0` | Moves the result along Z. |
| Rotation Order | Dropdown | ` XYZ ` | — |
| X Rotation | Float | `—` | Rotation around X in degrees. |
| Y Rotation | Float | `—` | Rotation around Y in degrees. |
| Z Rotation | Float | `—` | Rotation around Z in degrees. |
| Lock X/Y | Integer | `1` | — |
| X Scale | Float | `1.0` | — |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONCreateFont (JSON/Create).
Source: fuse vJSONCreateFont.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
