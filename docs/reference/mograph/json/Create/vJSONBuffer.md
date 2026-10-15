---
sidebar_position: 2
title: vJSONBuffer
description: "FIFO (first in first out) in an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONBuffer

FIFO (first in first out) in an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONBuffer.png" alt="vJSONBuffer node" />
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
vJSONBuffer.Low = 1
    vJSONBuffer.High = 10
    vJSONBuffer.Output -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
  <a className="node-chip" href="./vJSONCubicBezier">vJSONCubicBezier</a>
</div>

{/*
Generated page — node: vJSONBuffer (JSON/Create).
Source: fuse vJSONBuffer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
