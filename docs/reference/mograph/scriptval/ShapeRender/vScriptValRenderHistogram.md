---
sidebar_position: 8
title: vScriptValRenderHistogram
description: "Render a bar chart from an array of scalar values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRenderHistogram

Render a bar chart from an array of scalar values.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRenderHistogram.png" alt="vScriptValRenderHistogram node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Red | Float | `0.2` | Color for the bar. |
| Green | Float | `0.6` | Color for the bar. |
| Blue | Float | `1.0` | Color for the bar. |
| Alpha | Float | `1.0` | Color for the bar. |
| Bar Width | Float | `0.8` | Width of each bar. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Normalize | Integer | `1` | Scales the values to fill the chart height. |
| Baseline Y | Float | `0.1` | Vertical position of the chart baseline. |
| Chart Height | Float | `0.8` | Height of the chart. |
| Margin Left | Float | `0.05` | Space left of the chart. |
| Margin Right | Float | `0.05` | Space right of the chart. |
| Input | Image | `—` | Image that the result is drawn onto. |
| Data | ScriptVal | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitAbstract">vScriptValCircuitAbstract</a>
  <a className="node-chip" href="./vScriptValCircuitPattern">vScriptValCircuitPattern</a>
  <a className="node-chip" href="./vScriptValColor">vScriptValColor</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
</div>

{/*
Generated page — node: vScriptValRenderHistogram (ScriptVal/ShapeRender).
Source: fuse vScriptValRenderHistogram.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
