---
sidebar_position: 56
title: vJSONSin
description: "Math Sin - Cos Operations on an Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSin

Math Sin - Cos Operations on an Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSin.png" alt="vJSONSin node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Math Function | Dropdown | `Sin` | Sin or Cos. |
| Animation Speed | Float | `0` | — |
| Frequency | Float | `0.1` | Frequency of the wave. |
| Amplitude | Float | `0.01` | Amplitude of the wave. |
| Offset | Float | `0.0` | Offset added per point index. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | — |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONPointsOnCircle.Output -> vJSONUnPacker.ArrayB
    vJSONUnPacker.OutputArray -> vJSONSin.ArrayA
    vJSONSin.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnCircle">vJSONPointsOnCircle</a>
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONSin (JSON/Modify).
Source: fuse vJSONSin.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
