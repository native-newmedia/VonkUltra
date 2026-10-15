---
sidebar_position: 2
title: vScriptValBuffer
description: "FIFO (first in first out) in an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValBuffer

FIFO (first in first out) in an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValBuffer.png" alt="vScriptValBuffer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Length (min 2) | Integer | `2` | Number of values kept in the buffer. Shown when Show Input is on. |
| Low | Float | `-1` | — |
| High | Float | `1` | — |
| Offset Range | Float | `0.0` | Offset range of the buffer. Shown when Show Input is on. |
| Show Input | Integer | `0.0` | Shows the input sockets of the controls. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValBuffer.Low = 1
    vScriptValBuffer.High = 10
    vScriptValBuffer.Output -> vScriptValViewer.ScriptVal
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
  <a className="node-chip" href="./vScriptValCubicBezier">vScriptValCubicBezier</a>
</div>

{/*
Generated page — node: vScriptValBuffer (ScriptVal/Create).
Source: fuse vScriptValBuffer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
