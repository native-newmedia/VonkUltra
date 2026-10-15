---
sidebar_position: 18
title: vScriptValFuseClosePoints
description: "Welds points that are within a distance threshold."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFuseClosePoints

Welds points that are within a distance threshold.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFuseClosePoints.png" alt="vScriptValFuseClosePoints node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distance Threshold | Float | `0.02` | Points closer than this are merged. |
| Fuse Mode | Dropdown | `Average` | Keep First or Average of the merged points. |
| Axis Mode | Dropdown | `XYZ` | Axes used for the distance. Options: XYZ, XY, XZ, YZ, X Only, Y Only, Z Only. |
| Minimum Cluster Size | Integer | `1` | Smallest number of points that forms a cluster. |
| Delete Singles | Integer | `0` | Removes points that have no neighbour. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValFuseClosePoints (ScriptVal/Modify).
Source: fuse vScriptValFuseClosePoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
