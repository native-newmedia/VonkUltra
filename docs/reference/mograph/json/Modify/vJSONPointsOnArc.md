---
sidebar_position: 41
title: vJSONPointsOnArc
description: "Generate points on an arc"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPointsOnArc

Generate points on an arc

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPointsOnArc.png" alt="vJSONPointsOnArc node" />
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
vJSONMinMax.Output -> vJSONPointsOnArc.ArrayA
    vJSONPointsOnArc.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONMinMax">vJSONMinMax</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONPointsOnArc (JSON/Modify).
Source: fuse vJSONPointsOnArc.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
