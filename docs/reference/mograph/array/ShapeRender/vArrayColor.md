---
sidebar_position: 3
title: vArrayColor
description: "Dynamically color 2D Shape elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayColor

Dynamically color 2D Shape elements

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayColor.png" alt="vArrayColor node" />
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
| Point | Text | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
  <a className="node-chip" href="./vArrayRenderAssetSVG">vArrayRenderAssetSVG</a>
</div>

{/*
Generated page — node: vArrayColor (Array/ShapeRender).
Source: fuse vArrayColor.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
