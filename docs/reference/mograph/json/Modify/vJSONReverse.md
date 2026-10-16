---
sidebar_position: 51
title: vJSONReverse
description: "Reverses the order of an array, or of a range of it, by index."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONReverse

Reverses the order of an array, or of a range of it, by index.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONReverse.png" alt="vJSONReverse node" />
</div>

vJSONReverse takes an array of any elements and outputs it with the elements from Start Index to End Index in reverse order. Elements outside the range stay where they are.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Array to reverse. |
| Direction | Dropdown | `Reverse` | Reverse (default) writes the range backward. Forward writes it in its original order. |
| Start Index | Integer | `1` | First index of the range, counted from 1. Minimum 1, slider to 10, default 1. |
| End Index | Integer | `-1` | Last index of the range. -1 means the last element. Minimum -1, slider to 10, default -1. |
| Preserve Metadata | Integer | `0` | When on, the keys of a wrapped input (&#123;"array": ...&#125;) other than array and size are copied to the output. In the ScriptVal and JSON versions this also writes the output as a wrapper. Default off. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Debug Mode | Integer | `0` | Prints the reversed range and the array length to the console when on. Default off. |

</details>

<details>
<summary>Read the full description</summary>

Start Index (default 1) and End Index (default -1, which means the last element) mark a range, counted from 1. With Direction Reverse, the default, the elements of the range are written in the opposite order, and the elements before and after the range are copied as they are. With Direction Forward the range is written in its original order, so the output equals the input.

The elements can be numbers, points or lists, and they are not changed. End Index is limited to the length of the array, and an End Index below 1 means the end. Preserve Metadata copies the keys of a wrapped input other than array and size to the output. Debug Mode prints the reversed range to the console.

</details>

## Example Connections

<Tabs>
<TabItem value="reverse-a-path-and-draw-it" label="Reverse a path and draw it" default>

```
vJSONPointsOnArc.Output -> vJSONReverse.Input
vJSONReverse.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="reverse-part-of-a-list" label="Reverse part of a list">

```
vJSONCreateRange.Output -> vJSONReverse.Input
vJSONReverse.Output -> vJSONMath.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONRotateValues">vJSONRotateValues</a>
  <a className="node-chip" href="../Utility/vJSONSlicer">vJSONSlicer</a>
  <a className="node-chip" href="./vJSONSortByDistance">vJSONSortByDistance</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
