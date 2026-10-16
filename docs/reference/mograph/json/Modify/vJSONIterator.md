---
sidebar_position: 21
title: vJSONIterator
description: "Keeps every Nth point of an array and skips the points in between."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONIterator

Keeps every Nth point of an array and skips the points in between.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONIterator.png" alt="vJSONIterator node" />
</div>

vJSONIterator takes an array of XYZ points and outputs points 1, 1 + Step, 1 + 2 * Step and so on. Step is the only control, and 1 keeps every point.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Step - (skip x points) | Integer | `1` | Take every Nth point, so Step - 1 points are skipped between kept ones. Minimum 1, slider 1 to 10, default 1. |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

The node walks the input from the first element in steps of Step and copies the first three values of each element it lands on. With Step 2 on ten points it keeps points 1, 3, 5, 7 and 9. With Step 3 it keeps points 1, 4, 7 and 10.

Step is an integer from 1, slider 1 to 10, default 1. At 1 every point is copied. Elements that are not lists with at least three values are dropped, so an array of plain numbers gives an empty output.

Nothing is repeated or looped. The output has at most the input length divided by Step, rounded up, because dropped elements shorten it further.

</details>

## Example Connections

<Tabs>
<TabItem value="thin-out-a-grid-and-draw-it" label="Thin out a grid and draw it" default>

```
vJSONPointsOnGrid.Output -> vJSONIterator.ArrayA
vJSONIterator.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="unpack-thin-and-pack-again" label="Unpack, thin and pack again">

```
vJSONUnPacker.OutputArray -> vJSONIterator.ArrayA
vJSONIterator.Output -> vJSONPacker.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Utility/vJSONReducePoints">vJSONReducePoints</a>
  <a className="node-chip" href="../Utility/vJSONSlicer">vJSONSlicer</a>
  <a className="node-chip" href="../Utility/vJSONAppend">vJSONAppend</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
