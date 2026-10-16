---
sidebar_position: 19
title: vJSONGridConnect
description: "Builds edge lists for a grid of points as rows, columns, zigzags, diagonals or a border."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONGridConnect

Builds edge lists for a grid of points as rows, columns, zigzags, diagonals or a border.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONGridConnect.png" alt="vJSONGridConnect node" />
</div>

vJSONGridConnect has no point input. From Number X and Number Y it outputs edge lists as point numbers, ready for the Edge input of vJSONShapeRender. Direction picks the pattern.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number X | Integer | `1` | Points per row. Range 1 to 10000, slider 1 to 100, default 1. |
| Number Y | Integer | `1` | Number of rows. Range 1 to 10000, slider 1 to 100, default 1. |
| Direction | Dropdown | `Horizontal` | Horizontal (default), Vertical, Both, Zigzag (Horizontal), Zigzag (Vertical), Diagonal (Both Directions) or Border Only. |
| Stride (skip N lines) | Integer | `1` | Keeps every Nth row or column in Horizontal, Vertical and Both. Range 1 to 10000, default 1. |
| Zigzag: Reverse Start | Integer | `0` | Flips the starting direction of the zigzag. Default off. |

<details>
<summary>Read the full description</summary>

The node assumes a grid of Number X points per row and Number Y rows, numbered row by row from 1, so point (column, row) has the number row * Number X + column + 1. It outputs lists of these numbers.

Horizontal gives one line per row, Vertical one per column, and Both gives both. Stride (default 1) skips lines in those three modes. Zigzag (Horizontal) and Zigzag (Vertical) give one line that alternates direction, and Reverse Start flips the first direction. Diagonal gives lines in both diagonal directions. Border Only gives a closed loop around the grid.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-grid-lines" label="Draw grid lines" default>

```
vJSONPointsOnGrid.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
vJSONGridConnect.Output -> vJSONShapeRender.ArrayEdge
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="connect-a-displaced-grid" label="Connect a displaced grid">

```
vJSONPointsOnGrid.Output -> vJSONDisplaceValues.ArrayA
vJSONDisplaceValues.Output -> vJSONCameraProjection.ArrayA
vJSONGridConnect.Output -> vJSONShapeRender.ArrayEdge
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONPointsOnGrid">vJSONPointsOnGrid</a>
  <a className="node-chip" href="./vJSONPointsConnect">vJSONPointsConnect</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
