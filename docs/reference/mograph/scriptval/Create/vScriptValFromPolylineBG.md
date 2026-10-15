---
sidebar_position: 13
title: vScriptValFromPolylineBG
description: "Sample a drawn Polyline into a vScriptVal point list."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromPolylineBG

Sample a drawn Polyline into a vScriptVal point list. Connect a background image to draw on.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vScriptValFromPolylineBG yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Background | Image | `—` | — |
| Reset Path | Integer | `0.0` | — |
| Point Count | Integer | `64` | Number of points. |
| Closed Loop | Integer | `0.0` | Connects the last point to the first. |
| Flip Y | Integer | `1.0` | Mirrors the result along Y. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Flip X | Integer | `1.0` | Mirrors the result along X. |
| Aspect Correct | Integer | `1.0` | Corrects for the aspect ratio of the image. |
| Scale X | Float | `2.0` | Scale along X. |
| Scale Y | Float | `2.0` | Scale along Y. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValFromPolylineBG (ScriptVal/Create).
Source: fuse vScriptValFromPolylineBG.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
