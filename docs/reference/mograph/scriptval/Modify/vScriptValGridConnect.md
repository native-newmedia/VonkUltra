---
sidebar_position: 19
title: vScriptValGridConnect
description: "Builds row/column/diagonal/zigzag/border edge connectivity for a grid point array, for use with vScriptValShapeRender's Edge Data input."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGridConnect

Builds row/column/diagonal/zigzag/border edge connectivity for a grid point array, for use with vScriptValShapeRender's Edge Data input.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vScriptValGridConnect yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number X | Integer | `1` | Points per row. |
| Number Y | Integer | `1` | Number of rows. |
| Direction | Dropdown | `Horizontal` | Direction of the operation. Options: Horizontal, Vertical, Both, Zigzag (Horizontal), Zigzag (Vertical), Diagonal (Both Directions), Border Only. |
| Stride (skip N lines) | Integer | `1` | Skips lines between the connected ones. |
| Zigzag: Reverse Start | Integer | `0` | Reverses the start direction of the zigzag. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValConvert2D_3D">vScriptValConvert2D_3D</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
</div>

{/*
Generated page — node: vScriptValGridConnect (ScriptVal/Modify).
Source: fuse vScriptValGridConnect.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
