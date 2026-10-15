---
sidebar_position: 6
title: vArrayRenderFlowField
description: "Render a noise-driven flow field of line segments."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderFlowField

Render a noise-driven flow field of line segments.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderFlowField.png" alt="vArrayRenderFlowField node" />
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
| Animation Speed | Float | `0.0` | Speed at which the noise moves over time. |
| Red | Float | `1.0` | Color for the line. |
| Green | Float | `1.0` | Color for the line. |
| Blue | Float | `1.0` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Input | Image | `—` | Image that the result is drawn onto. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayColor">vArrayColor</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
</div>

{/*
Generated page — node: vArrayRenderFlowField (Array/ShapeRender).
Source: fuse vArrayRenderFlowField.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
