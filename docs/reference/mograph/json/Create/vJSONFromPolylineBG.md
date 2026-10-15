---
sidebar_position: 13
title: vJSONFromPolylineBG
description: "Sample a drawn Polyline into a vJSON point list."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromPolylineBG

Sample a drawn Polyline into a vJSON point list. Connect a background image to draw on.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

{/* No screenshot available for vJSONFromPolylineBG yet. */}

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
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONFromPolylineBG (JSON/Create).
Source: fuse vJSONFromPolylineBG.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
