---
sidebar_position: 4
title: vArrayLogicBetween
description: "Logic Between Operations on an Array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayLogicBetween

Logic Between Operations on an Array. If value of array is between min and max then the value is 1 else 0

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayLogicBetween.png" alt="vArrayLogicBetween node" />
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
vArrayUnPacker.OutputArray -> vArrayLogicBetween.ArrayA 
    vArrayLogicBetween.Output -> vArraySortByDistance.Array
    ArraySortByDistance.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayUnPacker">vArrayUnPacker</a>
  <a className="node-chip" href="../Modify/vArraySortByDistance">vArraySortByDistance</a>
  <a className="node-chip" href="../Modify/vArrayPacker">vArrayPacker</a>
</div>

{/*
Generated page — node: vArrayLogicBetween (Array/Logic).
Source: fuse vArrayLogicBetween.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
