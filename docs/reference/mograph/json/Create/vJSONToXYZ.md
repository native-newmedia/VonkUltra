---
sidebar_position: 55
title: vJSONToXYZ
description: "Convert a JSON Array into XYZ ASCII Text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONToXYZ

Convert a JSON Array into XYZ ASCII Text

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONToXYZ.png" alt="vJSONToXYZ node" />
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
vJSONFromXYZ.Points -> vJSONToXYZ.ArrayA
    vJSONToXYZ.Output -> vTextToFile.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONFromXYZ">vJSONFromXYZ</a>
</div>

{/*
Generated page — node: vJSONToXYZ (JSON/Create).
Source: fuse vJSONToXYZ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
