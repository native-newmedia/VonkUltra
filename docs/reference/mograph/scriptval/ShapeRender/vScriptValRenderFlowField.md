---
sidebar_position: 6
title: vScriptValRenderFlowField
description: "Render a noise-driven flow field of line segments."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRenderFlowField

Render a noise-driven flow field of line segments.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRenderFlowField.png" alt="vScriptValRenderFlowField node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rows | Integer | `20` | Rows of line segments. |
| Columns | Integer | `35` | Columns of line segments. |
| Line Length | Float | `0.025` | Length of each segment. |
| Line Width | Float | `0.002` | Width of the lines. |
| Noise Scale | Float | `3.0` | Scale of the noise. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Offset X | Float | `0.0` | Shifts the noise along X. |
| Noise Offset Y | Float | `0.0` | Shifts the noise along Y. |
| Animation Speed | Float | `0.0` | — |
| Red | Float | `1.0` | Color for the line. |
| Green | Float | `1.0` | Color for the line. |
| Blue | Float | `1.0` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Input | Image | `—` | Image that the result is drawn onto. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitAbstract">vScriptValCircuitAbstract</a>
  <a className="node-chip" href="./vScriptValCircuitPattern">vScriptValCircuitPattern</a>
  <a className="node-chip" href="./vScriptValColor">vScriptValColor</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
</div>

{/*
Generated page — node: vScriptValRenderFlowField (ScriptVal/ShapeRender).
Source: fuse vScriptValRenderFlowField.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
