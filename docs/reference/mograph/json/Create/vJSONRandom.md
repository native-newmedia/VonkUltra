---
sidebar_position: 47
title: vJSONRandom
description: "Creates a random JSON Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRandom

Creates a random JSON Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRandom.png" alt="vJSONRandom node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `2` | Number of values. |
| Low | Float | `-1` | — |
| High | Float | `1` | — |
| Multiply | Float | `0` | — |
| Seed | Integer | `0` | Seed of the random generator. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Pack To: | Dropdown | `X Y Z` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONRandom.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONRandom (JSON/Create).
Source: fuse vJSONRandom.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
