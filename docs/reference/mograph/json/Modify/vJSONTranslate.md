---
sidebar_position: 64
title: vJSONTranslate
description: "Transforms array positions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTranslate

Transforms array positions

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTranslate.png" alt="vJSONTranslate node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `—` | Moves the points along X. |
| Y Offset | Float | `—` | Moves the points along Y. |
| Z Offset | Float | `—` | Moves the points along Z. |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale along X. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. Shown when the related option is enabled. |
| Input | DATATYPE | `—` | Data to process. |
| Show Input | Integer | `0.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONPointsOnGrid.Output -> vJSONUnPacker.ArrayA
    vJSONUnPacker.OutputArray -> vJSONTranslate.ArrayA
    vJSONTranslate.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONWave.ArrayA
    vJSONWave.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnGrid">vJSONPointsOnGrid</a>
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
  <a className="node-chip" href="./vJSONWave">vJSONWave</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONTranslate (JSON/Modify).
Source: fuse vJSONTranslate.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
