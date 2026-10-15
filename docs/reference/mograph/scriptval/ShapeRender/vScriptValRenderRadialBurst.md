---
sidebar_position: 12
title: vScriptValRenderRadialBurst
description: "Render lines radiating from a center point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRenderRadialBurst

Render lines radiating from a center point.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRenderRadialBurst.png" alt="vScriptValRenderRadialBurst node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Count | Integer | `24` | Number of lines. |
| Center X | Float | `0.5` | Horizontal center. |
| Center Y | Float | `0.5` | Vertical center. |
| Inner Radius | Float | `0.05` | Start radius of the lines. |
| Outer Radius | Float | `0.35` | End radius of the lines. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Line Width | Float | `0.002` | Width of the lines. |
| Angle Offset | Float | `0.0` | Rotates all lines. |
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
Generated page — node: vScriptValRenderRadialBurst (ScriptVal/ShapeRender).
Source: fuse vScriptValRenderRadialBurst.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
