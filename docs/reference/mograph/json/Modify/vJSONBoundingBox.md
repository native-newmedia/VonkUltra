---
sidebar_position: 7
title: vJSONBoundingBox
description: "Calculate a 3D, 2D, or 1D bounding box volume from a JSON array of XYZ/XY/X points"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONBoundingBox

Calculate a 3D, 2D, or 1D bounding box volume from a JSON array of XYZ/XY/X points

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONBoundingBox.png" alt="vJSONBoundingBox node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONFromOBJ.Points -> vJSONBoundingBox.ArrayA
    vJSONBoundingBox.Points -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    vJSONBoundingBox.Edges -> vJSONShapeRender.JSONEdge
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONFromOBJ">vJSONFromOBJ</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONBoundingBox (JSON/Modify).
Source: fuse vJSONBoundingBox.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
