---
sidebar_position: 12
title: vScriptValClosePath
description: "Open, close, or toggle path closure with seam controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValClosePath

Open, close, or toggle path closure with seam controls.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValClosePath.png" alt="vScriptValClosePath node" />
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
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValClosePath (ScriptVal/Modify).
Source: fuse vScriptValClosePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
