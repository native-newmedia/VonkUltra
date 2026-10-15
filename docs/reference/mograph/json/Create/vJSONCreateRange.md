---
sidebar_position: 6
title: vJSONCreateRange
description: "Creates an Array based on selected modes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONCreateRange

Creates an Array based on selected modes.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

{/* No screenshot available for vJSONCreateRange yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `2` | Number of values. |
| Mode Select  | Dropdown | `0-1` | Num, 0-1, 1,2,3 or Range. |
| Number | Float | `0` | Value used by the mode. Shown for some modes. |
| Low | Float | `-1` | — |
| High | Float | `1` | — |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reverse Array | Integer | `0.0` | Reverses the order of the values. |
| Pack To: | Dropdown | `X` | Groups the values as X, X Y or X Y Z. |
| Show Input | Integer | `0.0` | Shows the input sockets of the controls. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONCreateRange (JSON/Create).
Source: fuse vJSONCreateRange.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
