---
sidebar_position: 2
title: vScriptValCircuitPattern
description: "Generates a pattern circuit board with lines and components"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCircuitPattern

Generates a pattern circuit board with lines and components

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCircuitPattern.png" alt="vScriptValCircuitPattern node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Seed | Integer | `42` | Seed of the random generator. |
| Line Angle Mode | Dropdown | `Orthogonal` | Orthogonal, 45 Degree, or Both. |
| Grid Rows | Integer | `5` | Rows of the grid. |
| Grid Cols | Integer | `5` | Columns of the grid. |
| Center | Point | `—` | Center position. |

<details>
<summary>+27 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Thickness | Float | `0.003` | Line thickness. |
| Rotation | Float | `0.0` | Rotates the pattern. |
| Scale | Float | `0.1` | Size of the grid cells. |
| Scroll Grid | Float | `0` | Shifts the grid. |
| Show Nodes | Float | `0` | Draws a node at each point. |
| Show Nodes Outline  | Float | `1` | Draws the nodes as outlines. |
| Input Source | Dropdown | `Default` | Default, Custom, or Random node shape. |
| Nodes Shape | Integer | `1.0` | Node shape number from 1 to 3. |
| Nodes Size | Float | `1.0` | Size of the nodes. |
| Nodes Thickness | Float | `0.003` | Outline thickness of the nodes. |
| Nodes Count | Integer | `10` | Number of nodes. |
| Red | Float | `0.25` | Color for the node. |
| Green | Float | `0.57` | Color for the node. |
| Blue | Float | `0.96` | Color for the node. |
| Filter | Dropdown | `Gaussian` | — |
| Soft Edge | Float | `0` | — |
| Line Type | Dropdown | `Solid` | Solid, Dash, Dot, Dash Dot, or Dash Dot Dot. |
| Join Type | Dropdown | `2.0` | Bevel or Round corners. |
| Show Pulse | Float | `0` | Draws a moving pulse along the lines. |
| Pulse Thickness | Float | `0.002` | Thickness of the pulse. |
| Pulse Speed | Float | `0.0` | Speed of the pulse. |
| Pulse Length | Float | `0.1` | Length of the pulse. |
| Red | Float | `0.0` | Color for the node. |
| Green | Float | `0.0` | Color for the node. |
| Blue | Float | `0.75` | Color for the node. |
| Input | Image | `—` | Image that the result is drawn onto. |
| Custom Shape | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircuitAbstract">vScriptValCircuitAbstract</a>
  <a className="node-chip" href="./vScriptValColor">vScriptValColor</a>
  <a className="node-chip" href="./vScriptValRenderAsset">vScriptValRenderAsset</a>
  <a className="node-chip" href="./vScriptValRenderAssetSVG">vScriptValRenderAssetSVG</a>
</div>

{/*
Generated page — node: vScriptValCircuitPattern (ScriptVal/ShapeRender).
Source: fuse vScriptValCircuitPattern.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
