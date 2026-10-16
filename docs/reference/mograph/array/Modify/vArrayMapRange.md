---
sidebar_position: 25
title: vArrayMapRange
description: "Remaps every number in an array from its own smallest and largest value to a new range."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayMapRange

Remaps every number in an array from its own smallest and largest value to a new range.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayMapRange.png" alt="vArrayMapRange node" />
</div>

vArrayMapRange finds the smallest and the largest number in the whole input and maps that range linearly to New Min and New Max. The four Mode Select buttons are shortcuts for common new ranges.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode Select  | Dropdown | `-1 - 1` | Buttons for -10 - 10, -1 - 1, 0 - 1 and 0 - 360. Pressing one sets New Min and New Max. The node does not read the selected button. |
| NewMin | Float | `-1` | Value that the smallest input number becomes. Allowed -50 to 50, default -1. |
| NewMax | Float | `1` | Value that the largest input number becomes. Allowed -50 to 50, default 1. |
| Input | DATATYPE | `—` | Primary point array input. Connect any upstream vArray generator or modifier here to apply range mapping to its values. |

<details>
<summary>Read the full description</summary>

The node scans every number in the input, including numbers inside lists, and takes the smallest and largest one. Each number v then becomes NewMin + (v - min) * (NewMax - NewMin) / (max - min). The range is shared by all values and axes, so X, Y and Z are not remapped on their own. Text values that read as numbers are remapped too, and other values pass through.

Mode Select does not change the calculation. Its buttons -10 - 10, -1 - 1, 0 - 1 and 0 - 360 write those numbers into New Min and New Max when pressed. New Min and New Max accept -50 to 50 and default to -1 and 1, which is the default -1 - 1 button. If every number in the input is equal, all of them become New Min. The output is not clamped.

</details>

## Example Connections

<Tabs>
<TabItem value="remap-displaced-points-and-draw" label="Remap displaced points and draw" default>

```
vArrayPointsOnGrid.Output -> vArrayDisplaceValues.ArrayA
vArrayDisplaceValues.Output -> vArrayMapRange.ArrayA
vArrayMapRange.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="remap-noise-values" label="Remap noise values">

```
vArrayNoise.Output -> vArrayMapRange.ArrayA
vArrayMapRange.Output -> vArrayApplyMask.Mask
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayMap">vArrayMap</a>
  <a className="node-chip" href="./vArrayClamp">vArrayClamp</a>
  <a className="node-chip" href="./vArrayMath">vArrayMath</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
