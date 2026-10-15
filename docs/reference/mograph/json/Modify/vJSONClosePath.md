---
sidebar_position: 12
title: vJSONClosePath
description: "Open, close, or toggle path closure with seam controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONClosePath

Open, close, or toggle path closure with seam controls.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONClosePath.png" alt="vJSONClosePath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `Close Path` | Action applied to the path. Options: Close Path, Open Path, Toggle. |
| Seam | Dropdown | `Keep Start` | Keep Start, Keep End or Average when closing. |
| Duplicate Endpoint | Integer | `1` | Adds the first point again at the end of a closed path. |
| Points | DATATYPE | `—` | Point positions. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONClosePath (JSON/Modify).
Source: fuse vJSONClosePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
