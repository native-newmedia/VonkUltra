---
sidebar_position: 50
title: vJSONResamplePath
description: "Resamples a path to an even number of points or an even spacing, with optional smoothing."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONResamplePath

Resamples a path to an even number of points or an even spacing, with optional smoothing.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONResamplePath.png" alt="vJSONResamplePath node" />
</div>

vJSONResamplePath takes an ordered path and outputs points spaced evenly along its length. Mode picks a fixed point count or a fixed spacing, and Interpolation can smooth the path first.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Target Count` | Target Count (default) or Target Spacing. |
| Target Count | Integer | `32` | Number of output points. Slider 2 to 2048, default 32. Shown in Target Count mode. |
| Target Spacing | Float | `0.05` | Distance between output points. Slider 0.001 to 2, default 0.05. Shown in Target Spacing mode. |
| Closed Path | Integer | `0.0` | Treats the path as a closed loop when on. Default off. |
| Interpolation | Dropdown | `Linear` | Linear (default), Catmull-Rom, B-Spline or Cardinal. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Interp Steps | Integer | `8` | Subdivisions per segment for the three spline types. Slider 1 to 32, default 8. |
| Tension | Float | `0.0` | Tension of the Cardinal spline. Slider -2 to 2, default 0. Shown for Cardinal only. |
| Points | DATATYPE | `—` | Ordered path points. |

</details>

<details>
<summary>Read the full description</summary>

The path is optionally closed (Closed Path adds a copy of the first point at the end) and smoothed with Linear, Catmull-Rom, B-Spline or Cardinal interpolation using Interp Steps subdivisions per segment. Then points are placed at equal distances along the result. Target Count (default 32) gives that many points, including both ends of an open path. Target Spacing (default 0.05) gives a point every that distance and ends on the last point.

A closed path does not repeat the first point at the end and has at least 3 points. Tension (default 0) is shown for Cardinal only. In Target Count mode, a path of zero length gives repeated copies of its first point. The output has 3 values per point.

</details>

## Example Connections

<Tabs>
<TabItem value="resample-an-arc-and-draw" label="Resample an arc and draw" default>

```
vJSONPointsOnArc.Output -> vJSONResamplePath.Points
vJSONResamplePath.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="resample-before-framing" label="Resample before framing">

```
vJSONCubicBezier.Output -> vJSONResamplePath.Points
vJSONResamplePath.Output -> vJSONPathFrame.PathPacket
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Utility/vJSONReducePoints">vJSONReducePoints</a>
  <a className="node-chip" href="../Utility/vJSONSubDividePath">vJSONSubDividePath</a>
  <a className="node-chip" href="./vJSONPathFrame">vJSONPathFrame</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
