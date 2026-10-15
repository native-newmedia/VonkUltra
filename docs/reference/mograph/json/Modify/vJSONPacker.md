---
sidebar_position: 32
title: vJSONPacker
description: "Pack an array into a new array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPacker

Pack an array into a new array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPacker.png" alt="vJSONPacker node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Pack To: | Dropdown | `X` | Group size: X, X Y or X Y Z. |
| Custom Group Size | Integer | `0` | Group size used instead of the Pack To value. |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONPointsOnCircle.Output -> vJSONUnPacker.ArrayB
    vJSONUnPacker.OutputArray -> vJSONSin.ArrayA
    vJSONSin.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnCircle">vJSONPointsOnCircle</a>
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="./vJSONSin">vJSONSin</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONPacker (JSON/Modify).
Source: fuse vJSONPacker.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
