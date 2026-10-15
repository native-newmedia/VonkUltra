---
sidebar_position: 55
title: vArrayToXYZ
description: "Convert an Array into XYZ ASCII Text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayToXYZ

Convert an Array into XYZ ASCII Text

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayToXYZ.png" alt="vArrayToXYZ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Show Input | Integer | `1.0` | Shows the input sockets of the controls. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayFromXYZ.Points -> vArrayToXYZ.ArrayA
    vArrayToXYZ.Output -> vTextToFile.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayFromXYZ">vArrayFromXYZ</a>
</div>

{/*
Generated page — node: vArrayToXYZ (Array/Create).
Source: fuse vArrayToXYZ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
