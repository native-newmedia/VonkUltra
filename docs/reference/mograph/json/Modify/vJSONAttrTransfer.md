---
sidebar_position: 4
title: vJSONAttrTransfer
description: "Copies scalar values from Source points to Target points and stores or applies them."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAttrTransfer

Copies scalar values from Source points to Target points and stores or applies them.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAttrTransfer.png" alt="vJSONAttrTransfer node" />
</div>

vJSONAttrTransfer takes Source points that carry a value and Target points, and finds a value for every Target point. Transfer Mode chooses the nearest source point or a weighted average, and Output Mode chooses how the value is stored.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Transfer Mode | Dropdown | `Nearest` | Nearest (default) or Radius Weighted. |
| Radius | Float | `0.25` | Search radius for Radius Weighted. Minimum 0, default 0.25. |
| Falloff Power | Float | `2` | Exponent of the distance weight in Radius Weighted. Range 0.01 to 64, default 2. |
| Default Value | Float | `0` | Value used when no source point is found. Default 0. |
| Output Mode | Dropdown | `Store Attribute in 4th Value` | Store Attribute in 4th Value (default), Offset X, Offset Y, Offset Z, Offset XYZ, Replace XYZ, Replace X Only, Replace Y Only or Replace Z Only. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Apply Amount | Float | `1` | Multiplies the value in every output mode except the fourth-value store. Default 1. |
| Source | DATATYPE | `—` | Points that supply the values. A point's value is its fourth value, else its value field, else its X. |
| Target | DATATYPE | `—` | Points that receive the values. If it is empty or not connected, the Source points are used. |

</details>

<details>
<summary>Read the full description</summary>

For each Target point the node looks up a number in Source. A source point's number is its fourth value, else its value field, else its X. Nearest takes the number of the closest source point. Radius Weighted averages the numbers of all source points within Radius, each weighted by 1 / (distance + 0.000001) ^ Falloff Power.

If no source point is in range, or Source is empty, Default Value is used. If Target is empty or not connected, the Source points act as targets.

Output Mode stores the number as a fourth value, or multiplies it by Apply Amount and offsets or replaces X, Y, Z or all three axes with that one number.

</details>

## Example Connections

<Tabs>
<TabItem value="transfer-values-between-two-arrays" label="Transfer values between two arrays" default>

```
vJSONPointsOnGrid.Output -> vJSONAttrTransfer.Source
vJSONPointsOnCircle.Output -> vJSONAttrTransfer.Target
vJSONAttrTransfer.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
<TabItem value="store-values-on-the-target-points-and-draw" label="Store values on the target points and draw">

```
vJSONAttrTransfer.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONAttrRandomize">vJSONAttrRandomize</a>
  <a className="node-chip" href="./vJSONWeightMap">vJSONWeightMap</a>
  <a className="node-chip" href="./vJSONMapRange">vJSONMapRange</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
