---
sidebar_position: 14
title: vArrayRenderShapePacker
description: "Fills a letter-shaped area with tightly packed shapes using multiple algorithms"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderShapePacker

Fills a letter-shaped area with tightly packed shapes using multiple algorithms

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderShapePacker.png" alt="vArrayRenderShapePacker node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Algorithm | Dropdown | `Simple Grid Fill` | Simple Grid Fill, Ultra Simple Grid Fill, or Multi Size Grid Fill. |
| Global Scale | Float | `0.1` | Overall size. |
| Horizontal Adjustment | Float | `0.0` | Horizontal offset. |
| Vertical Adjustment | Float | `0` | Vertical offset. |
| Grid Size | Integer | `100` | Resolution of the fill grid. |

<details>
<summary>+16 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Resolution | Integer | `5` | Sampling resolution of the fill. |
| Spacing | Integer | `0` | Space between the packed items. |
| Character Spacing | Float | `0.05` | Extra spacing between characters. |
| Select Shape | Dropdown | `Default` | Default, Polygon, or Custom shape. |
| Sides | Integer | `6` | Sides of the polygon. |
| Radius | Float | `0.03` | Radius of the packed shapes. |
| Angle | Float | `0.0` | Rotation of the packed shapes. |
| Select Fill | Dropdown | `Outline` | Outline or Fill. |
| Thickness | Float | `0.02` | Line thickness. |
| Red | Float | `1.0` | Color for the shape. |
| Green | Float | `0.9` | Color for the shape. |
| Blue | Float | `0.6` | Color for the shape. |
| Input | Image | `—` | Image that the result is drawn onto. |
| Data | Text | `—` | Data to process. |
| Text Groups | ScriptVal | `—` | — |
| Custom Shape | ScriptVal | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayColor">vArrayColor</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
</div>

{/*
Generated page — node: vArrayRenderShapePacker (Array/ShapeRender).
Source: fuse vArrayRenderShapePacker.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
