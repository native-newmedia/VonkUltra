---
sidebar_position: 6
title: vJSONBooleanMaskOps
description: "Combines two masks per index with a boolean operation and outputs a mask or points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONBooleanMaskOps

Combines two masks per index with a boolean operation and outputs a mask or points.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONBooleanMaskOps.png" alt="vJSONBooleanMaskOps node" />
</div>

vJSONBooleanMaskOps takes Mask A and Mask B and applies a boolean operation to each index. A value counts as true when it is above Threshold, and Output Mode chooses the form of the result.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `AND` | AND (default), OR, XOR, A AND NOT B, NOT A or NOT B. |
| Output Mode | Dropdown | `Mask Scalars (0/1, any axis true)` | Mask Scalars (0/1, any axis true) is the default. Per-Axis XYZ Mask gives one 0 or 1 per axis. The three point modes write the A point, the B point or their average when the result is true, and leave the element out when it is false. |
| Threshold | Float | `0` | Values above it count as true. Slider -1 to 1, default 0. |
| Output Amount | Float | `1` | Multiplies the result. Minimum 0, default 1. In the point modes 0 scales the points to 0, 0, 0. |
| X Amount | Float | `1` | Multiplies the X result in the per-axis and point modes. Default 1. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Amount | Float | `1` | Multiplies the Y result in the per-axis and point modes. Default 1. |
| Z Amount | Float | `1` | Multiplies the Z result in the per-axis and point modes. Default 1. |
| Trim Zeros | Integer | `0` | Removes output elements that are zero on all axes. Default off. |
| Mask A | DATATYPE | `—` | First mask, one 0 or 1 value per element. |
| Mask B | DATATYPE | `—` | Second mask, one 0 or 1 value per element. |

</details>

<details>
<summary>Read the full description</summary>

Each element is read as X, Y and Z (a single number is used for all three). A value is true when it is above Threshold. Operation (AND, OR, XOR, A AND NOT B, NOT A or NOT B) is applied to each axis and to the whole point, which is true when any axis is true. Missing elements count as 0.

Mask Scalars writes 1 or 0 times Output Amount for the whole point. Per-Axis XYZ Mask writes one 1 or 0 per axis, times Output Amount and X, Y or Z Amount. The three point modes write the A point, the B point or the average of both, scaled by the amounts, when the result is true. When it is false the element is left out, so the output gets shorter.

Trim Zeros removes every output element that is zero on all axes.

</details>

## Example Connections

<Tabs>
<TabItem value="combine-two-masks" label="Combine two masks" default>

```
vJSONWeightMap.Output -> vJSONLogicThreshold.Input
vJSONLogicThreshold.Output -> vJSONBooleanMaskOps.MaskA
vJSONPerlin3Noise.Output -> vJSONBooleanMaskOps.MaskB
vJSONBooleanMaskOps.Output -> vJSONApplyMask.Mask
```

</TabItem>
<TabItem value="pass-the-a-points-where-the-masks-agree" label="Pass the A points where the masks agree">

```
vJSONPointsOnGrid.Output -> vJSONBooleanMaskOps.MaskA
vJSONPointsOnCircle.Output -> vJSONBooleanMaskOps.MaskB
vJSONBooleanMaskOps.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONApplyMask">vJSONApplyMask</a>
  <a className="node-chip" href="./vJSONWeightMap">vJSONWeightMap</a>
  <a className="node-chip" href="./vJSONMaskByMesh">vJSONMaskByMesh</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
