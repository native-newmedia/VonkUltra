---
sidebar_position: 12
title: vArrayClosePath
description: "Open, close, or toggle path closure with seam controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayClosePath

Open, close, or toggle path closure with seam controls.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayClosePath.png" alt="vArrayClosePath node" />
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
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayClosePath (Array/Modify).
Source: fuse vArrayClosePath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
