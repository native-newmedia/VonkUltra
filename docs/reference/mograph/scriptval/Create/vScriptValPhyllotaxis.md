---
sidebar_position: 37
title: vScriptValPhyllotaxis
description: "Generate points on Phyllotaxis"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPhyllotaxis

Generate points on Phyllotaxis

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPhyllotaxis.png" alt="vScriptValPhyllotaxis node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Count | Integer | `1` | Number of points. |
| Scale | Float | `0.01` | Scale of the result. |
| Rotation | Float | `0` | Rotation in degrees. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPhyllotaxis.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValPhyllotaxis (ScriptVal/Create).
Source: fuse vScriptValPhyllotaxis.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
