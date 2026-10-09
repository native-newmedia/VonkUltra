---
sidebar_position: 42
title: vJSONGenerateSpirals
description: "Generate Spiral splines"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONGenerateSpirals

Generate Spiral splines

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONGenerateSpirals.png" alt="vJSONGenerateSpirals node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Spiral Type | Dropdown | `Logarithmic Spiral` | — |
| Shape Mode | Dropdown | `line` | — |
| Growth coefficient | Float | `0.04` | — |
| Expansion factor | Float | `0.22` | — |
| Max angle | Integer | `6` | — |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Step size | Float | `1` | — |
| Rotation | Float | `0` | — |
| Scale Factor | Float | `0.1` | — |
| line6Separator | Float | `—` | — |
| Show Input | Integer | `0.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONGenerateSpirals.Output -> vJSONCameraProjection.ArrayA
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
Generated page — node: vJSONGenerateSpirals (JSON/Create).
Source: fuse vJSONGenerateSpirals.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
