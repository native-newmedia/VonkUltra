---
sidebar_position: 41
title: vScriptValPointsOnArc
description: "Generate points on an arc"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnArc

Generate points on an arc

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnArc.png" alt="vScriptValPointsOnArc node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Smoothness | Float | `20` | Number of points per arc. |
| Height Factor | Float | `0.0` | — |
| Multiplier | Float | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValMinMax.Output -> vScriptValPointsOnArc.ScriptVal
    vScriptValPointsOnArc.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValMinMax">vScriptValMinMax</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValPointsOnArc (ScriptVal/Modify).
Source: fuse vScriptValPointsOnArc.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
