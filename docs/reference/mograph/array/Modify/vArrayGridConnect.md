---
sidebar_position: 19
title: vArrayGridConnect
description: "Builds row/column/diagonal/zigzag/border edge connectivity for a grid point array, for use with vArrayShapeRender's Edge Data input."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayGridConnect

Builds row/column/diagonal/zigzag/border edge connectivity for a grid point array, for use with vArrayShapeRender's Edge Data input.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vArrayGridConnect yet. */}

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
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayGridConnect (Array/Modify).
Source: fuse vArrayGridConnect.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
