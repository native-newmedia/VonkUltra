---
sidebar_position: 36
title: vJSONPathWidthMap
description: "Writes a width for every point of a path, driven by index, distance or your own numbers."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONPathWidthMap

Writes a width for every point of a path, driven by index, distance or your own numbers.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONPathWidthMap.png" alt="vJSONPathWidthMap node" />
</div>

vJSONPathWidthMap takes a path or a path packet and outputs a packet with one width per point. Width Min and Width Max set the range, and Source decides how the width changes along the path.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Index (default), Distance or Scalar Input. The value that drives the width. |
| Width Min | Float | `0.05` | Width at t = 0. Default 0.05. |
| Width Max | Float | `0.2` | Width at t = 1. Default 0.2. |
| Power | Float | `1` | Exponent applied to t. Minimum 0.001, slider 0.01 to 8, default 1. |
| Invert | Integer | `0` | Uses 1 - t when on. Default off. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Clamp 0-1 | Integer | `1` | Limits t to 0 to 1 when on (default). |
| Path/Packet | DATATYPE | `—` | A point array, or a packet with a path. |
| Scalars | DATATYPE | `—` | One number per path point for Scalar Input. |

</details>

<details>
<summary>Read the full description</summary>

The width of a point is Width Min + (Width Max - Width Min) * t. Source sets t. Index gives 0 at the first point and 1 at the last. Distance gives the share of the path length walked so far, from 0 to 1. Scalar Input uses one number per point from Scalars, and missing entries repeat the last number.

Clamp 0-1 (on by default) limits t to 0 to 1, Invert turns it into 1 - t, and Power raises it to that power. The output packet keeps tangent, normal, binormal, twist and closed from the input and adds the widths. The defaults are 0.05 and 0.2. An input without points is passed through.

</details>

## Example Connections

<Tabs>
<TabItem value="widths-for-a-framed-path-then-sweep" label="Widths for a framed path, then sweep" default>

```
vJSONPointsOnArc.Output -> vJSONPathFrame.PathPacket
vJSONPathFrame.Output -> vJSONPathWidthMap.PathPacket
vJSONPathWidthMap.Output -> vJSONRenderSweepProfile.PathPacket
```

</TabItem>
<TabItem value="widths-from-a-scalar-array" label="Widths from a scalar array">

```
vJSONPointsOnCircle.Output -> vJSONPathWidthMap.PathPacket
vJSONWeightMap.Output -> vJSONPathWidthMap.Scalars
vJSONPathWidthMap.Output -> vJSONRenderSweepProfile.PathPacket
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONPathFrame">vJSONPathFrame</a>
  <a className="node-chip" href="./vJSONPathTwist">vJSONPathTwist</a>
  <a className="node-chip" href="../ShapeRender/vJSONRenderSweepProfile">vJSONRenderSweepProfile</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
