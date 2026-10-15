---
sidebar_position: 37
title: vJSONPhyllotaxis
description: "Generate points on Phyllotaxis"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPhyllotaxis

Generate points on Phyllotaxis

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPhyllotaxis.png" alt="vJSONPhyllotaxis node" />
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
vJSONPhyllotaxis.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONPhyllotaxis (JSON/Create).
Source: fuse vJSONPhyllotaxis.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
