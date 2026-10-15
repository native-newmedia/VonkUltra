---
sidebar_position: 20
title: vJSONTaperedShape
description: "Draws a tapered 2D path from point list with optional smoothing"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTaperedShape

Draws a tapered 2D path from point list with optional smoothing

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTaperedShape.png" alt="vJSONTaperedShape node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Taper Start | Float | `0.0` | Path position where the taper starts. |
| Taper End | Float | `1.0` | Path position where the taper ends. |
| Caps | Dropdown | `All Points` | — |
| Start Width | Float | `0.05` | Width at the start. |
| End Width | Float | `0.01` | Width at the end. |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Circle Segments | Integer | `16` | Segments of the round joints. |
| Color Select | Dropdown | `Use Solid` | Use Solid or Use Gradient. |
| Gradient | Gradient | `—` | Color gradient. |
| Low | Integer | `1` | — |
| High | Integer | `5` | — |
| Red | Float | `1.0` | Color for the solid. |
| Green | Float | `1.0` | Color for the solid. |
| Blue | Float | `1.0` | Color for the solid. |
| Alpha | Float | `1.0` | Color for the solid. |
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
Generated page — node: vJSONTaperedShape (JSON/ShapeRender).
Source: fuse vJSONRenderTaperedPath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
