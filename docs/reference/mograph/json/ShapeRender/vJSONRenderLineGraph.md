---
sidebar_position: 9
title: vJSONRenderLineGraph
description: "Render a line graph from a JSON array of scalar values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRenderLineGraph

Render a line graph from a JSON array of scalar values.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRenderLineGraph.png" alt="vJSONRenderLineGraph node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Red | Float | `0.2` | Color for the line. |
| Green | Float | `0.8` | Color for the line. |
| Blue | Float | `1.0` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Line Width | Float | `0.003` | Width of the lines. |

<details>
<summary>+12 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Fill Area | Integer | `0` | Fills the area under the line. |
| Red | Float | `0.2` | Color for the line. |
| Green | Float | `0.6` | Color for the line. |
| Blue | Float | `1.0` | Color for the line. |
| Alpha | Float | `0.3` | Color for the line. |
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
Generated page — node: vJSONRenderLineGraph (JSON/ShapeRender).
Source: fuse vJSONRenderLineGraph.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
