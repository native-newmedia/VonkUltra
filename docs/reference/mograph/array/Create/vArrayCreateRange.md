---
sidebar_position: 6
title: vArrayCreateRange
description: "Generate a list of numbers from a constant, a 0 to 1 ramp, a 1,2,3 counter or a low to high range, packed as X, X Y or X Y Z."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayCreateRange

Generate a list of numbers from a constant, a 0 to 1 ramp, a 1,2,3 counter or a low to high range, packed as X, X Y or X Y Z.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayCreateRange.png" alt="vArrayCreateRange node" />
</div>

vArrayCreateRange has no input and outputs an array of numbers grouped into entries of one, two or three values. Mode Select chooses how the numbers are made, Array length sets how many, and Pack To sets the entry size.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `2` | Number of numbers made before packing. Minimum 2, default 2. |
| Mode Select  | Dropdown | `0-1` | Num repeats Number, 0-1 makes a ramp from 0 to 1, 1,2,3 counts up from 1, Range spaces values from Low to High. Default 0-1. |
| Number | Float | `0` | Hidden unless Mode Select is Num. The value written for every number in Num mode. Default 0. |
| Low | Float | `-1` | Hidden unless Mode Select is Range. First value of the range. Default -1. |
| High | Float | `1` | Hidden unless Mode Select is Range. Last value of the range. Default 1. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reverse Array | Integer | `0.0` | Reverses the order of the numbers before packing. Default off. |
| Pack To: | Dropdown | `X` | Number of values in each entry, X, X Y or X Y Z. Default X. |
| Show Input | Integer | `0.0` | Shows or hides a connection point on the Array length control. Default off. |

</details>

<details>
<summary>Read the full description</summary>

The node first makes Array length numbers. In Num mode every number is the value of Number. In 0-1 mode number i of n is (i - 1) / (n - 1), a ramp from 0 to 1. In 1,2,3 mode number i is i. In Range mode the numbers are spaced evenly from Low to High, with number i equal to Low + (i - 1) * (High - Low) / (n - 1).

If Reverse Array is on, the list of numbers is reversed. The numbers are then packed into entries by Pack To: X gives entries of one value, X Y gives entries of two and X Y Z gives entries of three. If the count does not divide evenly, the last entry holds the remaining values and is shorter.

With the defaults (Array length 2, 0-1 mode, Pack To X) the output is two entries, 0 and 1. Number is shown only in Num mode, and Low and High only in Range mode. Array length has a minimum of 2. Show Input adds a connection point to the Array length control so that the length can be driven from another node.

The node produces values, not geometry. Set Pack To to X Y Z to use the output as points, or use it with the Modify nodes as a source of values.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-values-as-points-with-pack-to-set-to-x-y-z" label="Draw the values as points, with Pack To set to X Y Z" default>

```
vArrayCreateRange.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-values-before-drawing" label="Offset the values before drawing">

```
vArrayCreateRange.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayList">vArrayList</a>
  <a className="node-chip" href="./vArrayRandom">vArrayRandom</a>
  <a className="node-chip" href="./vArrayMinMax">vArrayMinMax</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
