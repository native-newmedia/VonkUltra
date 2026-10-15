---
sidebar_position: 7
title: vScriptValBoundingBox
description: "Calculate a 3D, 2D, or 1D bounding box volume from a ScriptVal object of XYZ/XY/X points"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValBoundingBox

Calculate a 3D, 2D, or 1D bounding box volume from a ScriptVal object of XYZ/XY/X points

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValBoundingBox.png" alt="vScriptValBoundingBox node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | ScriptVal | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValFromOBJ.Points -> vScriptValBoundingBox.ScriptVal
    vScriptValBoundingBox.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValBoundingBox.ScriptValEdges -> vScriptValShapeRender.ScriptValEdge
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValFromOBJ">vScriptValFromOBJ</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValBoundingBox (ScriptVal/Modify).
Source: fuse vScriptValBoundingBox.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
