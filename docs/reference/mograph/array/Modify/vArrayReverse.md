---
sidebar_position: 51
title: vArrayReverse
description: "Reverse or reorder array within specified index range."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayReverse

Reverse or reorder array within specified index range. Supports full/partial reversal with metadata preservation.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayReverse.png" alt="vArrayReverse node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Direction | Dropdown | `Reverse` | Direction of the operation. Options: Reverse, Forward. |
| Start Index | Integer | `1` | First index of the range to reverse. |
| End Index | Integer | `-1` | Last index of the range to reverse. |
| Preserve Metadata | Integer | `0` | Keeps the extra values of each point. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Debug Mode | Integer | `0` | Prints debug information to the console. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBoundingBox">vArrayBoundingBox</a>
  <a className="node-chip" href="./vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="./vArrayConvert2D_3D">vArrayConvert2D_3D</a>
  <a className="node-chip" href="./vArrayDisplaceValues">vArrayDisplaceValues</a>
</div>

{/*
Generated page — node: vArrayReverse (Array/Modify).
Source: fuse vArrayReverse.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
