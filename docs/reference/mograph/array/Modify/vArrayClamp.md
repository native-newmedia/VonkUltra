---
sidebar_position: 9
title: vArrayClamp
description: "Limits every number in an array to the range from Min to Max."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayClamp

Limits every number in an array to the range from Min to Max.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayClamp.png" alt="vArrayClamp node" />
</div>

vArrayClamp takes an array of numbers or points, including nested lists, and outputs it with every number held between Min and Max. Values already inside the range are unchanged.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Min | Float | `0` | Lower limit. Allowed -10 to 10, default 0. |
| Max | Float | `1` | Upper limit. Allowed -10 to 10, default 1. |
| Auto Swap Min/Max | Integer | `1` | Exchanges Min and Max when Min is larger. Default on. |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

Every number at any depth of the input is replaced by Min if it is below Min, and by Max if it is above Max. Entries that are not numbers are kept as they are, and the list structure is preserved. The defaults 0 and 1 hold all values in the 0 to 1 range.

Min and Max accept -10 to 10. With Auto Swap on, which is the default, the two values are exchanged when Min is larger than Max. With it off and Min larger than Max, values below Min become Min and all other values become Max.

The array length and the order of its entries do not change. Only the values are limited, so the node can follow any node that outputs numbers or points.

</details>

## Example Connections

<Tabs>
<TabItem value="clamp-a-grid-to-a-range-and-draw" label="Clamp a grid to a range and draw" default>

```
vArrayPointsOnGrid.Output -> vArrayClamp.Input
vArrayClamp.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="clamp-noise-before-using-it-as-a-mask" label="Clamp noise before using it as a mask">

```
vArrayPerlin3Noise.Output -> vArrayClamp.Input
vArrayClamp.Output -> vArrayApplyMask.Mask
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayMapRange">vArrayMapRange</a>
  <a className="node-chip" href="./vArrayMap">vArrayMap</a>
  <a className="node-chip" href="./vArrayMath">vArrayMath</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
