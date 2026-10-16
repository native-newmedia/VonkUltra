---
sidebar_position: 66
title: vJSONUnPacker
description: "Flattens an array of lists and deals its values out to one to four arrays in turn."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONUnPacker

Flattens an array of lists and deals its values out to one to four arrays in turn.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONUnPacker.png" alt="vJSONUnPacker node" />
</div>

vJSONUnPacker takes an array of numbers or lists of numbers and outputs its values as one flat array, or splits them across 2 to 4 arrays by position. The buttons 1 Array to 4 Arrays set the number of outputs.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Custom Group Size | Integer | `1` | Hidden control. Number of output arrays, 1 to 4, default 1. The four buttons set it. |
| 1 Array | Float | `—` | Button. Sets the node to 1 output array. |
| 2 Arrays | Float | `—` | Button. Sets the node to 2 output arrays and adds the extra outputs. |
| 3 Arrays | Float | `—` | Button. Sets the node to 3 output arrays and adds the extra outputs. |
| 4 Arrays | Float | `—` | Button. Sets the node to 4 output arrays and adds the extra outputs. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Array to unpack. |

</details>

<details>
<summary>Read the full description</summary>

If the input holds lists, for example XYZ points, their values are first written into one flat list in order (x, y, z, x, y, z, ...). If it holds plain values, they are used as they are. The flat list is then dealt out to N arrays in turn: value 1 to array 1, value 2 to array 2, and so on, starting again at array 1 after array N.

With 3 outputs, XYZ points are split into an array of all X values, one of all Y values and one of all Z values. N is 1 by default and is set to 1 to 4 by the buttons, which also add the outputs OutputArray_1 to OutputArray_n. OutputArray holds the first array. Each output has the array and size wrapper.

</details>

## Example Connections

<Tabs>
<TabItem value="unpack-change-and-pack-again" label="Unpack, change and pack again" default>

```
vJSONPointsOnCircle.Output -> vJSONUnPacker.ArrayA
vJSONUnPacker.OutputArray -> vJSONSin.ArrayA
vJSONSin.Output -> vJSONPacker.ArrayA
vJSONPacker.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
<TabItem value="flatten-points-to-a-list" label="Flatten points to a list">

```
vJSONPointsOnGrid.Output -> vJSONUnPacker.ArrayA
vJSONUnPacker.OutputArray -> vJSONMath.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="../Utility/vJSONSlicer">vJSONSlicer</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
