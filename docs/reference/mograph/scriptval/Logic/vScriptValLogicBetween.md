---
sidebar_position: 4
title: vScriptValLogicBetween
description: "Logic Between Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValLogicBetween

Logic Between Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValLogicBetween.png" alt="vScriptValLogicBetween node" />
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
vScriptValUnPacker.ScriptVal1 -> vScriptValLogicBetween.ScriptVal
    vScriptValLogicBetween.Output -> vScriptValSortByDistance.ScriptVal
    ArraySortByDistance.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="../Modify/vScriptValSortByDistance">vScriptValSortByDistance</a>
  <a className="node-chip" href="../Modify/vScriptValPacker">vScriptValPacker</a>
</div>

{/*
Generated page — node: vScriptValLogicBetween (ScriptVal/Logic).
Source: fuse vScriptValLogicBetween.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
