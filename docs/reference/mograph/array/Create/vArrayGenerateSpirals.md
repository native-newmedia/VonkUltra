---
sidebar_position: 19
title: vArrayGenerateSpirals
description: "Generate Spiral splines"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayGenerateSpirals

Generate Spiral splines

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayGenerateSpirals.png" alt="vArrayGenerateSpirals node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Spiral Type | Dropdown | `Logarithmic Spiral` | Spiral type. Options: Archimedean Spiral, Atom Spiral, Cornu Spiral, Galilean Spiral, Hyperbolic Spiral, Logarithmic Spiral, Lituus Spiral. |
| Shape Mode | Dropdown | `line` | — |
| Growth coefficient | Float | `0.04` | Growth rate of the spiral. |
| Expansion factor | Float | `0.22` | Expansion rate of the spiral. |
| Max angle | Integer | `6` | Last angle of the spiral. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Step size | Float | `1` | Angle step between points. |
| Rotation | Float | `0` | Rotation in degrees. |
| Scale Factor | Float | `0.1` | Scale of the result. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayGenerateSpirals.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayGenerateSpirals (Array/Create).
Source: fuse vArrayGenerateSpirals.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
