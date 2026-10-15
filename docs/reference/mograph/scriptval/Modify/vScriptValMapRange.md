---
sidebar_position: 25
title: vScriptValMapRange
description: "Apply range mapping operations to an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMapRange

Apply range mapping operations to an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMapRange.png" alt="vScriptValMapRange node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode Select  | Dropdown | `-1 - 1` | Output range: -10 - 10, -1 - 1, 0 - 1 or 0 - 360. |
| NewMin | Float | `-10` | — |
| NewMax | Float | `10` | — |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValUnPacker.ScriptVal1 -> vScriptValMapRange.ScriptVal
    vScriptValMapRange.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValUnPacker">vScriptValUnPacker</a>
  <a className="node-chip" href="./vScriptValPacker">vScriptValPacker</a>
</div>

{/*
Generated page — node: vScriptValMapRange (ScriptVal/Modify).
Source: fuse vScriptValMapRange.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
