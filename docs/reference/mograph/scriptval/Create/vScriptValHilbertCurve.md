---
sidebar_position: 24
title: vScriptValHilbertCurve
description: "Generate the points of a Hilbert curve of a chosen order, scaled and offset in Z."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValHilbertCurve

Generate the points of a Hilbert curve of a chosen order, scaled and offset in Z.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValHilbertCurve.png" alt="vScriptValHilbertCurve node" />
</div>

vScriptValHilbertCurve has no input and outputs the vertices of a Hilbert space-filling curve in the XY plane. Order sets the detail, Scale the size and Z Offset the height.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Order | Integer | `3` | Recursion depth of the curve. Range 1 to 8, default 3. Side length is 2^order. |
| Scale | Float | `1` | Size of the curve. Default 1. |
| Z Offset | Float | `0` | Z value assigned to all points. Default 0. |

<details>
<summary>Read the full description</summary>

The curve visits every cell of a grid with side 2^Order, so it has side * side points. Each point is centred on the origin: ((x / (side - 1)) - 0.5) * Scale for X and the same for Y. Z is set to Z Offset for all points.

The defaults (order 3, scale 1, Z offset 0) give 64 points spanning -0.5 to 0.5. Order ranges from 1 to 8, and the point count quadruples with each step, so order 8 outputs 65536 points.

Points come out in curve order. Drawing them as a connected path shows the curve; drawing them as separate points shows the grid.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-curve" label="Draw the curve" default>

```
vScriptValHilbertCurve.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="distort-the-curve" label="Distort the curve">

```
vScriptValHilbertCurve.Output -> vScriptValDisplaceValues.ArrayA
vScriptValDisplaceValues.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValPhyllotaxis">vScriptValPhyllotaxis</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
