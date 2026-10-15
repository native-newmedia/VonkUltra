---
sidebar_position: 11
title: vScriptValFromOBJ
description: "Convert Wavefront OBJ mesh data into a ScriptVal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromOBJ

Convert Wavefront OBJ mesh data into a ScriptVal

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFromOBJ.png" alt="vScriptValFromOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Text. |
| Filename | Text | `—` | File to read. Shown when Input Source is File. |
| URL | Text | `—` | Address to read. Shown when Input Source is URL. |
| Input | Text | `—` | Text to read. Shown when Input Source is Text. |
| Scale File Units By | Float | `1` | Multiplies the coordinates of the file. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValFromOBJ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValFromOBJ.ScriptValEdges -> vScriptValShapeRender.ScriptValEdge
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValFromOBJ (ScriptVal/Create).
Source: fuse vScriptValFromOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
