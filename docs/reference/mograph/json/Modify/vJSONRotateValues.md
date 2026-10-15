---
sidebar_position: 53
title: vJSONRotateValues
description: "Rotate an array indexes and values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRotateValues

Rotate an array indexes and values

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRotateValues.png" alt="vJSONRotateValues node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rotate Amount | Integer | `1` | Number of positions the values are shifted. |
| Pass Thru: 0 or 1 | Integer | `0.0` | — |
| Show Input | Integer | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONPointsOnHexagon.Output -> vJSONRotateValues.ArrayA
    vJSONRotateValues.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnHexagon">vJSONPointsOnHexagon</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONRotateValues (JSON/Modify).
Source: fuse vJSONRotateValues.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
