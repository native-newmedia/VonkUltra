---
sidebar_position: 25
title: vJSONMapRange
description: "Apply range mapping operations to an array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMapRange

Apply range mapping operations to an array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMapRange.png" alt="vJSONMapRange node" />
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
vJSONUnPacker.OutputArray -> vJSONMapRange.ArrayA
    vJSONMapRange.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
</div>

{/*
Generated page — node: vJSONMapRange (JSON/Modify).
Source: fuse vJSONMapRange.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
