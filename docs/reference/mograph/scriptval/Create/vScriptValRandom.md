---
sidebar_position: 47
title: vScriptValRandom
description: "Creates a random JSON Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRandom

Creates a random JSON Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRandom.png" alt="vScriptValRandom node" />
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
| Pack To: | Dropdown | `X Y Z` | Groups the values as X, X Y or X Y Z. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValRandom.Output -> vScriptValCameraProjection.ScriptVal
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
Generated page — node: vScriptValRandom (ScriptVal/Create).
Source: fuse vScriptValRandom.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
