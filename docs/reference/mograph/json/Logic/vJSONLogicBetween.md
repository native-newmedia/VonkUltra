---
sidebar_position: 4
title: vJSONLogicBetween
description: "Logic Between Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONLogicBetween

Logic Between Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONLogicBetween.png" alt="vJSONLogicBetween node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Min | Float | `0` | Lower limit, exclusive. |
| Max | Float | `1` | Upper limit, exclusive. |
| Show Input | Integer | `0.0` | Shows the Min and Max input sockets on the node. |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONUnPacker.OutputArray -> vJSONLogicBetween.ArrayA
    vJSONLogicBetween.Output -> vJSONSortByDistance.Array
    ArraySortByDistance.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="../Modify/vJSONSortByDistance">vJSONSortByDistance</a>
  <a className="node-chip" href="../Modify/vJSONPacker">vJSONPacker</a>
</div>

{/*
Generated page — node: vJSONLogicBetween (JSON/Logic).
Source: fuse vJSONLogicBetween.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
