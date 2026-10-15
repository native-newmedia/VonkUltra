---
sidebar_position: 10
title: vJSONSlicer
description: "Trimming the start and end of single or multi-dimensional arrays"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSlicer

Trimming the start and end of single or multi-dimensional arrays

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSlicer.png" alt="vJSONSlicer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Data to process. |
| Start | Integer | `1` | First entry of the range. |
| Stop | Integer | `1` | Last entry of the range. |
| Offset Range | Integer | `0` | Added to Start and Stop. |
| Continuous | Integer | `1.0` | Wraps the range around the end of the array. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `1.0` | Shows the Start, Stop and Offset Range input socket on the node. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONCircularPoints.Output -> vJSONSlicer.Input
    vJSONSlicer.Array -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
    vJSONShapeTextArray.OutputValShape -> vJSONShapeRender.JSONCustomShape
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONSlicer (JSON/Utility).
Source: fuse vJSONSlicer.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
