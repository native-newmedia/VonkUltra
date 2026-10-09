---
sidebar_position: 5
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
| line1Separator | Float | `—` | — |
| Min | Float | `0` | — |
| Max | Float | `0` | — |
| line6Separator | Float | `—` | — |
| Show Input | Integer | `0.0` | — |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | DATATYPE | `—` | — |

</details>

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
