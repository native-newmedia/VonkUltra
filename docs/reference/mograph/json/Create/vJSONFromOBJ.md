---
sidebar_position: 39
title: vJSONFromOBJ
description: "Convert Wavefront OBJ mesh data into a JSON format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromOBJ

Convert Wavefront OBJ mesh data into a JSON format

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromOBJ.png" alt="vJSONFromOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |
| URL | Text | `—` | — |
| Input | Text | `—` | — |
| Scale File Units By | Float | `1` | — |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONFromOBJ.Points -> vJSONCameraProjection.ArrayA
    vJSONFromOBJ.Edges -> vJSONShapeRender.ArrayEdge
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONFromOBJ (JSON/Create).
Source: fuse vJSONFromOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
