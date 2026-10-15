---
sidebar_position: 1
title: vScriptValCircuitAbstract
description: "Generates a absract circuit board with lines and components"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCircuitAbstract

Generates a absract circuit board with lines and components

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCircuitAbstract.png" alt="vScriptValCircuitAbstract node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Seed | Integer | `42` | Seed of the random generator. |
| Pattern Type | Dropdown | `Radial` | Radial, Grid, Organic, or Mixed point layout. |
| Connection Style | Dropdown | `Manhattan` | Shape of the connecting lines (Manhattan, Curved, Circular Arc, and others). |
| No Duplicate Connections | Float | `1.0` | Skips connections that already exist. |
| Curvature | Float | `0.0` | Amount of curve in curved connection styles. |

<details>
<summary>+22 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reach distance | Float | `0.3` | Maximum distance of a connection. |
| Point Density | Float | `0.5` | Number of points. |
| Max Connections | Integer | `4` | — |
| Point Jitter | Float | `0.0` | Random offset of the points. |
| Center | Point | `—` | — |
| Global Scale  | Float | `0.5` | Overall size. |
| Line Thickness | Float | `0.003` | Thickness of the circuit lines. |
| Growth Iterations | Integer | `1` | Number of times extra connections are added. |
| Trim Factor | Float | `0.3` | Share of connections removed. |
| Trace Red | Float | `0.2` | — |
| Trace Green | Float | `0.8` | — |
| Trace Blue | Float | `1.0` | — |
| Show Nodes | Float | `0` | Draws a node at each point. |
| Node Shape | Dropdown | `Circle` | Circle, Square, Triangle, or Custom. |
| Node Size | Float | `0.02` | Size of the nodes. |
| Node Red | Float | `0.1` | — |
| Node Green | Float | `0.9` | — |
| Node Blue | Float | `1.0` | — |
| Line Type | Dropdown | `Solid` | Solid, Dash, Dot, Dash Dot, or Dash Dot Dot. |
| Join Type | Dropdown | `2.0` | Bevel or Round corners. |
| Input | Image | `—` | Image that the result is drawn onto. |
| Custom Shape | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitPattern">vScriptValCircuitPattern</a>
  <a className="node-chip" href="./vScriptValColor">vScriptValColor</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
  <a className="node-chip" href="./vScriptValRenderAssetSVG">vScriptValRenderAssetSVG</a>
</div>

{/*
Generated page — node: vScriptValCircuitAbstract (ScriptVal/ShapeRender).
Source: fuse vScriptValCircuitAbstract.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
