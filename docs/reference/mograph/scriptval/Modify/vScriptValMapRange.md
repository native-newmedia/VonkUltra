---
sidebar_position: 25
title: vScriptValMapRange
description: "Remaps every number in an array from its own smallest and largest value to a new range."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMapRange

Remaps every number in an array from its own smallest and largest value to a new range.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMapRange.png" alt="vScriptValMapRange node" />
</div>

vScriptValMapRange finds the smallest and the largest number in the whole input and maps that range linearly to New Min and New Max. The four Mode Select buttons are shortcuts for common new ranges.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode Select  | Dropdown | `-1 - 1` | Buttons for -10 - 10, -1 - 1, 0 - 1 and 0 - 360. Pressing one sets New Min and New Max. The node does not read the selected button. |
| NewMin | Float | `-1` | Value that the smallest input number becomes. Allowed -50 to 50, default -1. |
| NewMax | Float | `1` | Value that the largest input number becomes. Allowed -50 to 50, default 1. |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

The node scans every number in the input, including numbers inside lists, and takes the smallest and largest one. Each number v then becomes NewMin + (v - min) * (NewMax - NewMin) / (max - min). The range is shared by all values and axes, so X, Y and Z are not remapped on their own. Text values that read as numbers are remapped too, and other values pass through.

Mode Select does not change the calculation. Its buttons -10 - 10, -1 - 1, 0 - 1 and 0 - 360 write those numbers into New Min and New Max when pressed. New Min and New Max accept -50 to 50 and default to -1 and 1, which is the default -1 - 1 button. If every number in the input is equal, all of them become New Min. The output is not clamped.

</details>

## Example Connections

<Tabs>
<TabItem value="remap-displaced-points-and-draw" label="Remap displaced points and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValDisplaceValues.ArrayA
vScriptValDisplaceValues.Output -> vScriptValMapRange.ArrayA
vScriptValMapRange.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="remap-noise-values" label="Remap noise values">

```
vScriptValNoise.Output -> vScriptValMapRange.ArrayA
vScriptValMapRange.Output -> vScriptValApplyMask.Mask
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValMap">vScriptValMap</a>
  <a className="node-chip" href="./vScriptValClamp">vScriptValClamp</a>
  <a className="node-chip" href="./vScriptValMath">vScriptValMath</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
