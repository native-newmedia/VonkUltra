---
sidebar_position: 13
title: vScriptValColorMap
description: "Turns a number per point into a color between Color A and Color B."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValColorMap

Turns a number per point into a color between Color A and Color B.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValColorMap.png" alt="vScriptValColorMap node" />
</div>

vScriptValColorMap reads a value for each index from the index, a scalar array, a point coordinate or the distance to a center, and outputs a list of RGBA colors. The color runs from Color A at the low end of the range to Color B at the high end.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Dropdown | `Index` | Index (default), Scalar Input, Position X, Position Y, Position Z or Distance From Center. The position and distance sources give 0 when no Points are connected. |
| Auto Range | Integer | `1.0` | Uses the smallest and largest value as the range when on (default). |
| RangeMin | Float | `0` | Low end of the manual range. Used when Auto Range is off. Default 0. |
| RangeMax | Float | `1` | High end of the manual range. Used when Auto Range is off. Default 1. |
| Clamp 0-1 | Integer | `1.0` | Limits the position along the gradient to 0 to 1 when on (default). |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Invert | Integer | `0.0` | Reverses the gradient when on. Default off. |
| Fallback Count | Integer | `100` | Number of colors when neither Points nor Scalars are connected. Minimum 1, default 100. |
| Center X | Float | `0` | X of the center for Distance From Center. Default 0. |
| Center Y | Float | `0` | Y of the center for Distance From Center. Default 0. |
| Center Z | Float | `0` | Z of the center for Distance From Center. Default 0. |
| Red | Float | `0.1` | Red of Color A, at the low end. Default 0.1. |
| Green | Float | `0.4` | Green of Color A. Default 0.4. |
| Blue | Float | `1.0` | Blue of Color A. Default 1. |
| Alpha | Float | `1.0` | Alpha of Color A. Default 1. |
| Red | Float | `1.0` | Red of Color B, at the high end. Default 1. |
| Green | Float | `0.2` | Green of Color B. Default 0.2. |
| Blue | Float | `0.2` | Blue of Color B. Default 0.2. |
| Alpha | Float | `1.0` | Alpha of Color B. Default 1. |
| Points | DATATYPE | `—` | Optional points. They set the count and feed the position and distance sources. |
| Scalars | DATATYPE | `—` | Optional numbers. They feed the Scalar Input source. |

</details>

<details>
<summary>Read the full description</summary>

The number of colors is the number of Points, else the number of Scalars, else Fallback Count (default 100). Source picks the value per index: the index, the Scalar Input value (the first value of a list), Position X, Y or Z of the point, or its distance to Center X, Y and Z.

With Auto Range on, the smallest and largest value become the range, otherwise Range Min and Range Max do. The position t is (value - min) / (max - min), clamped to 0 to 1 if Clamp 0-1 is on, then flipped to 1 - t if Invert is on. The color is Color A + (Color B - Color A) * t per channel, limited to 0 to 1.

A range of zero width gives t = value - min. The output is a ScriptVal list, for example for the Custom Color input of vScriptValShapeRender.

</details>

## Example Connections

<Tabs>
<TabItem value="color-a-grid-by-index-and-draw" label="Color a grid by index and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValColorMap.Points
vScriptValPointsOnGrid.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
vScriptValColorMap.Output -> vScriptValShapeRender.JSONCustomColor
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="color-by-a-scalar-array" label="Color by a scalar array">

```
vScriptValWeightMap.Output -> vScriptValColorMap.Scalars
vScriptValColorMap.Output -> vScriptValShapeRender.JSONCustomColor
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValRampMap">vScriptValRampMap</a>
  <a className="node-chip" href="./vScriptValWeightMap">vScriptValWeightMap</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
