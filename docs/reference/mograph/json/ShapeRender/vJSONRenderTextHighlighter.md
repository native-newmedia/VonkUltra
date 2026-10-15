---
sidebar_position: 16
title: vJSONRenderTextHighlighter
description: "Highlights text elements dynamically"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRenderTextHighlighter

Highlights text elements dynamically

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRenderTextHighlighter.png" alt="vJSONRenderTextHighlighter node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Font Select | Dropdown | `Use Font` | Use Font, or Use Front Array (fonts from the font array input). |
| Font | Text | `—` | Font family. |
| Style | Text | `—` | Font style. |
| Styled Text | Text | `—` | Text to highlight. |
| Start | Float | `0` | First entry of the range. |

<details>
<summary>+29 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| End | Float | `1.0` | Last character of the highlight range. |
| Start | Integer | `1` | First entry of the range. |
| Stop | Integer | `1` | Last word of the range. |
| Offset Range | Integer | `0` | Added to Start and Stop. |
| Letter Case | Dropdown | `NONE` | NONE, UPPER, or LOWER. |
| Size | Float | `0.03` | Text size. |
| Character Spacing | Float | `0.0` | Extra spacing between characters. |
| Line Spacing | Float | `0.0` | Extra spacing between lines. |
| Width | Float | `0` | — |
| Height | Float | `0` | — |
| Horizontal Justification | Dropdown | `LEFT` | — |
| Vertical Justification | Dropdown | `TOP` | — |
| Padding | Float | `0.15` | Space around the text. |
| Round Corners | Float | `0.0` | Corner radius of the boxes. |
| Padding Top-Bottom | Float | `0.0` | Vertical padding. |
| Padding Left-Right | Float | `0.025` | Horizontal padding. |
| Padding Y-Offset | Float | `-0.002` | Vertical offset of the box. |
| Red | Float | `1.0` | Color for the text. |
| Green | Float | `1.0` | Color for the text. |
| Blue | Float | `1.0` | Color for the text. |
| Alpha | Float | `1.0` | Color for the text. |
| Red | Float | `0.0` | Color for the text. |
| Green | Float | `0.0` | Color for the text. |
| Blue | Float | `1.0` | Color for the text. |
| Alpha | Float | `1.0` | Color for the text. |
| Draw on Transparent Background | Float | `0` | Draws on transparent black instead of the input image. |
| Position | Point | `—` | Position of the result. |
| Input | Image | `—` | Image that the result is drawn onto. |
| Data | ScriptVal | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCircuitAbstract">vJSONCircuitAbstract</a>
  <a className="node-chip" href="./vJSONCircuitPattern">vJSONCircuitPattern</a>
  <a className="node-chip" href="./vJSONColor">vJSONColor</a>
  <a className="node-chip" href="./vJSONRenderAsset">vJSONRenderAsset</a>
</div>

{/*
Generated page — node: vJSONRenderTextHighlighter (JSON/ShapeRender).
Source: fuse vJSONRenderTextHighlighter.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
