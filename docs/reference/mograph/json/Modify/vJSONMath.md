---
sidebar_position: 27
title: vJSONMath
description: "Apply mathematical operations to an array Tip: If you want to apply math operations to arrays of XY or XYZ value pairs, the vJSONUnPacker node will extract all…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMath

Apply mathematical operations to an array Tip: If you want to apply math operations to arrays of XY or XYZ value pairs, the vJSONUnPacker node will extract all the values into a single linear sequence of numbers. You can then use the vJSONMath node to modify the values. Then a vJSONPacker node can remux the linear sequence of numbers back into XY or XYZ value pairs. The following math operations are supported: - Subtract A-B - Multiply - Divide A/B - Min - Max - Average - Difference - Modulo A/B - Power A^B - Arc Tangent A/B - Sine - Cosine - Tangent - Arc Sine - Arc Cosine - Arc Tangent - Log - Log 10 - Exponential - Degrees to Radians - Radians to Degrees - Absolute Value - Ceiling - Floor - Square Root - Reciprocal - Negate - Random - Randomseed

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMath.png" alt="vJSONMath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | — |
| Operation  | Dropdown | `Add` | Math operation. Options: Add, Subtract A-B, Multiply, Divide A/B, Min, Max, Average, Difference, Modulo A/B, Power A^B, Arc Tangent A/B, Sine, Cosine, Tangent, Arc Sine, Arc Cosine, Arc Tangent, Log, Log 10, Exponential, Degrees to Radians, Radians to Degrees, Absolute Value, Ceiling, Floor, Square Root, Reciprocal, Negate, Random, Randomseed. |
| Input Number | Dropdown | `Use Number` | Use Number or Use Array as the second operand. |
| Number | Float | `1` | Second operand when Use Number is selected. |
| Connected | Integer | `0.0` | Reports whether the second input is connected. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input A | DATATYPE | `—` | First input. |
| Input B | DATATYPE | `—` | Second input. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONGenerateSpirals.Output -> vJSONUnPacker.ArrayB
    vJSONUnPacker.OutputArray -> vJSONMath.ArrayA
    vJSONMath.Output -> vJSONPacker.ArrayA
    vJSONPacker.Output -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONGenerateSpirals">vJSONGenerateSpirals</a>
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
</div>

{/*
Generated page — node: vJSONMath (JSON/Modify).
Source: fuse vJSONMath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
