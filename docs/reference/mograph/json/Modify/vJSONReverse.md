---
sidebar_position: 51
title: vJSONReverse
description: "Reverse or reorder array within specified index range."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONReverse

Reverse or reorder array within specified index range. Supports full/partial reversal with metadata preservation.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONReverse.png" alt="vJSONReverse node" />
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
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONReverse (JSON/Modify).
Source: fuse vJSONReverse.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
