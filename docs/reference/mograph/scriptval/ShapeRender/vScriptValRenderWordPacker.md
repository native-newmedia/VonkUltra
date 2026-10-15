---
sidebar_position: 18
title: vScriptValRenderWordPacker
description: "Fills a letter shape with tightly packed text, using FitTo and custom algorithms"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRenderWordPacker

Fills a letter shape with tightly packed text, using FitTo and custom algorithms

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRenderWordPacker.png" alt="vScriptValRenderWordPacker node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| GlobalScale | Float | `0.1` | Overall size. |
| Horizontal Adjustment | Float | `0.0` | Horizontal offset. |
| Vertical Adjustment | Float | `0` | Vertical offset. |
| Number of Rectangles | Integer | `1000` | — |
| Grid Size | Integer | `30` | Resolution of the fill grid. |

<details>
<summary>+16 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Resolution | Float | `5` | Sampling resolution of the fill. |
| Spacing | Float | `—` | Space between the packed items. |
| Font Select | Dropdown | `Use Font` | Use Font, or Use Front Array (fonts from the font array input). |
| Font | Text | `—` | Font family. |
| Size | Float | `1.0` | Text size. |
| Style | Text | `—` | Font style. |
| Character Spacing | Float | `0.05` | Extra spacing between characters. |
| Fit Scale  | Integer | `1` | Scales each word to fit. |
| Red | Float | `1.0` | Color for the text. |
| Green | Float | `0.9` | Color for the text. |
| Blue | Float | `0.6` | Color for the text. |
| Data | Text | `—` | Data to process. |
| Input | Image | `—` | Image that the result is drawn onto. |
| ScriptVal Text | ScriptVal | `—` | — |
| Text Groups | ScriptVal | `—` | — |
| ScriptVal Font | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitAbstract">vScriptValCircuitAbstract</a>
  <a className="node-chip" href="./vScriptValCircuitPattern">vScriptValCircuitPattern</a>
  <a className="node-chip" href="./vScriptValColor">vScriptValColor</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
</div>

{/*
Generated page — node: vScriptValRenderWordPacker (ScriptVal/ShapeRender).
Source: fuse vScriptValRenderWordPacker.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
