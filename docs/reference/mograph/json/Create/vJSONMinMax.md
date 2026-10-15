---
sidebar_position: 34
title: vJSONMinMax
description: "Creates Array based on Max/Min operations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMinMax

Creates Array based on Max/Min operations

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMinMax.png" alt="vJSONMinMax node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `1` | Number of values. |
| Pack To: | Dropdown | `XY` | — |
| Min1 | Float | `-1` | — |
| Max1 | Float | `1` | — |
| Min2 | Float | `-1` | — |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max2 | Float | `1` | — |
| Min3 | Float | `-1` | — |
| Max3 | Float | `1` | — |
| Seed | Integer | `0` | Seed of the random generator. |
| Show Input | Integer | `0.0` | Shows the input sockets of the controls. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONMinMax.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONMinMax (JSON/Create).
Source: fuse vJSONMinMax.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
