---
sidebar_position: 42
title: vJSONPointsOnHexagon
description: "Generate points on Hexagon Grid"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPointsOnHexagon

Generate points on Hexagon Grid

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPointsOnHexagon.png" alt="vJSONPointsOnHexagon node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rows | Integer | `10` | Number of rows. |
| Columns | Integer | `10` | — |
| Tile X Offset | Float | `0.1` | Offset between tiles along X. |
| Tile Y Offset | Float | `0.1` | Offset between tiles along Y. |
| Multiplier | Float | `0.5` | — |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Direction | Dropdown | `Vertical` | Vertical or Horizontal layout. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONPointsOnHexagon.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONPointsOnHexagon (JSON/Create).
Source: fuse vJSONPointsOnHexagon.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
