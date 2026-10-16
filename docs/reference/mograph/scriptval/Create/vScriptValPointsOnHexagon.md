---
sidebar_position: 42
title: vScriptValPointsOnHexagon
description: "Generate a staggered 2D grid of points laid out for hexagon tiles, with row, column and tile offset controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnHexagon

Generate a staggered 2D grid of points laid out for hexagon tiles, with row, column and tile offset controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnHexagon.png" alt="vScriptValPointsOnHexagon node" />
</div>

vScriptValPointsOnHexagon has no input and outputs an array of XY points in a staggered grid in the Z = 0 plane. Rows and Columns set the point count, and Direction chooses which lines are shifted by half a step.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Rows | Integer | `10` | Number of rows. Range 1 to 100, default 10. |
| Columns | Integer | `10` | Number of columns. Range 1 to 100, default 10. The control ID is spelled colums in the fuse. |
| Tile X Offset | Float | `0.1` | Base step along X, multiplied by 1.7 in Horizontal mode and by 1.432 in Vertical mode. Default 0.1. |
| Tile Y Offset | Float | `0.1` | Base step along Y, multiplied by 1.432 in Horizontal mode and by 1.7 in Vertical mode. Default 0.1. |
| Multiplier | Float | `0.5` | Scale applied to both steps. Minimum -1, default 0.5. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Direction | Dropdown | `Vertical` | Vertical shifts every second column along Y. Horizontal shifts every second row along X. Default Vertical. |

</details>

<details>
<summary>Read the full description</summary>

The node writes Rows * Columns points. In Horizontal mode every second row is shifted along X by half the X step. In Vertical mode every second column is shifted along Y by half the Y step. The shifted lines are the ones with an odd index, counting from 0.

Point spacing comes from Tile X Offset, Tile Y Offset and Multiplier. In Horizontal mode the X step is Tile X Offset * 1.7 * Multiplier and the Y step is Tile Y Offset * 1.432 * Multiplier. In Vertical mode the X step is Tile X Offset * 1.432 * Multiplier and the Y step is Tile Y Offset * 1.7 * Multiplier. The constants 1.7 and 1.432 are fixed in the node.

With the defaults (10 rows, 10 columns, both tile offsets 0.1, Multiplier 0.5, Vertical) the node outputs 100 points with an X step of about 0.0716 and a Y step of 0.085. The grid is shifted by half its size so that it sits near the origin.

Rows and Columns are limited to the range 1 to 100 by the controls. Z is always 0. The output contains points only.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-hexagon-grid" label="Draw the hexagon grid" default>

```
vScriptValPointsOnHexagon.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-grid-before-drawing" label="Offset the grid before drawing">

```
vScriptValPointsOnHexagon.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValGridPolar">vScriptValGridPolar</a>
  <a className="node-chip" href="./vScriptValPointsOnRectangle">vScriptValPointsOnRectangle</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
