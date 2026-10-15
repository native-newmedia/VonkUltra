---
sidebar_position: 3
title: vScriptValColor
description: "Dynamically color 2D Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValColor

Dynamically color 2D Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValColor.png" alt="vScriptValColor node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Color | Dropdown | `Default` | Default or Custom coloring. |
| Color By: | Dropdown | `Index` | Index, range mapping, spatial position, or a custom function. |
| ReferenceCenter | Point | `—` | Reference point for the spatial mode. |
| Max Color Distance | Float | `0.0` | Distance at which the spatial mapping ends. |
| Offset | Float | `0.0` | Shifts the gradient position. |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale | Float | `1` | Scales the gradient position. |
| Power | Float | `1.0` | Curve of the gradient position. |
| Repetitions | Integer | `1.0` | Number of times the gradient repeats. |
| Blend | Float | `0.0` | Blends between neighbouring colors. |
| Patterns | Text | `—` | Pattern text for the custom mapping. |
| Gradient | Gradient | `—` | Color gradient. |
| Low | Integer | `0` | — |
| High | Integer | `50` | — |
| Subdiv Color Range | Integer | `0` | Number of subdivisions of the color range. |
| Update UI Range | Float | `—` | — |
| Red | Float | `1.0` | Color for the custom. |
| Green | Float | `0.9` | Color for the custom. |
| Blue | Float | `0.6` | Color for the custom. |
| Alpha | Float | `1.0` | Color for the custom. |
| Point | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitAbstract">vScriptValCircuitAbstract</a>
  <a className="node-chip" href="./vScriptValCircuitPattern">vScriptValCircuitPattern</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
  <a className="node-chip" href="./vScriptValRenderAssetSVG">vScriptValRenderAssetSVG</a>
</div>

{/*
Generated page — node: vScriptValColor (ScriptVal/ShapeRender).
Source: fuse vScriptValColor.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
