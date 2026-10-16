---
sidebar_position: 33
title: vArrayParallelOffset
description: "Builds parallel copies of a path at fixed distances on both sides."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayParallelOffset

Builds parallel copies of a path at fixed distances on both sides.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayParallelOffset.png" alt="vArrayParallelOffset node" />
</div>

vArrayParallelOffset takes an array of path points and outputs the path followed by Num Left and Num Right offset copies of it. A second output lists the number of points of each curve.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| OffsetDistance | Float | `0.1` | Distance between neighboring curves. Range 0.001 to 10, default 0.1. |
| Num Left | Integer | `1` | Number of curves on one side. Slider 1 to 10, default 1. |
| Num Right | Integer | `1` | Number of curves on the opposite side. Slider 1 to 10, default 1. |
| Input | DATATYPE | `—` | Path points, in order. |

<details>
<summary>Read the full description</summary>

Each offset copy moves every path point sideways by a multiple of Offset Distance. The i-th copy on a side is i * Offset Distance away. The sideways direction is perpendicular to the segment that starts at the point and lies in the XY plane, so a path in the XY plane stays in that plane. Num Left curves use one direction and Num Right curves the opposite one.

The Output holds the original path first, then the left copies, then the right copies, as one list. The ScriptVal_Groups output holds the point count of each curve in the same order, so the list can be split again. Offset Distance runs from 0.001 to 10 with a default of 0.1, and the counts default to 1.

</details>

## Example Connections

<Tabs>
<TabItem value="offset-an-arc-and-draw-the-curves" label="Offset an arc and draw the curves" default>

```
vArrayPointsOnArc.Output -> vArrayParallelOffset.ArrayA
vArrayParallelOffset.Output -> vArrayCameraProjection.ArrayA
vArrayParallelOffset.ScriptVal_Groups -> vArrayCameraProjection.ArrayGroups
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-a-circle" label="Offset a circle">

```
vArrayPointsOnCircle.Output -> vArrayParallelOffset.ArrayA
vArrayParallelOffset.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayPathFrame">vArrayPathFrame</a>
  <a className="node-chip" href="./vArrayResamplePath">vArrayResamplePath</a>
  <a className="node-chip" href="./vArrayRepeat">vArrayRepeat</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
