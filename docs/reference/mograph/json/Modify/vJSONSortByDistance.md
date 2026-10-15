---
sidebar_position: 60
title: vJSONSortByDistance
description: "Sort array by point distance"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSortByDistance

Sort array by point distance

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSortByDistance.png" alt="vJSONSortByDistance node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Smallest Distance | Float | `1.0` | Sorts from the smallest distance. |
| Distance Mode | Dropdown | `Preferred` | Distance sorting mode. Options: Preferred, Strict. |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONUnPacker.OutputArray -> vJSONLogicBetween.ArrayA
    vJSONLogicBetween.Output -> vJSONSortByDistance.Array
    vJSONSortByDistance.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="../Logic/vJSONLogicBetween">vJSONLogicBetween</a>
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
</div>

{/*
Generated page — node: vJSONSortByDistance (JSON/Modify).
Source: fuse vJSONSortByDistance.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
