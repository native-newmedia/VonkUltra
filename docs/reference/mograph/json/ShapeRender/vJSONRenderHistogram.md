---
sidebar_position: 8
title: vJSONRenderHistogram
description: "Render a bar chart from an array of scalar values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRenderHistogram

Render a bar chart from an array of scalar values.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRenderHistogram.png" alt="vJSONRenderHistogram node" />
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
| Data | Text | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCircuitAbstract">vJSONCircuitAbstract</a>
  <a className="node-chip" href="./vJSONCircuitPattern">vJSONCircuitPattern</a>
  <a className="node-chip" href="./vJSONColor">vJSONColor</a>
  <a className="node-chip" href="./vJSONRenderAsset">vJSONRenderAsset</a>
</div>

{/*
Generated page — node: vJSONRenderHistogram (JSON/ShapeRender).
Source: fuse vJSONRenderHistogram.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
