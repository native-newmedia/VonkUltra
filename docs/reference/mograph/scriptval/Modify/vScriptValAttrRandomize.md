---
sidebar_position: 3
title: vScriptValAttrRandomize
description: "Adds a repeatable random offset to point coordinates or to scalar values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValAttrRandomize

Adds a repeatable random offset to point coordinates or to scalar values.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValAttrRandomize.png" alt="vScriptValAttrRandomize node" />
</div>

vScriptValAttrRandomize takes an array and adds a random offset between Min Offset and Max Offset to each XYZ point or to each scalar value. The same Seed always gives the same result.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distribution | Dropdown | `Uniform` | Uniform (default) or Gaussian. Gaussian is cut at three spreads and stays inside Min and Max. |
| Apply To | Dropdown | `XYZ Coordinates` | XYZ Coordinates (default) offsets X, Y and Z of each point. Scalar Values offsets each number, or the first value of a list. |
| Min Offset | Float | `-0.1` | Lower limit of the offset. Default -0.1. |
| Max Offset | Float | `0.1` | Upper limit of the offset. Default 0.1. |
| Seed | Integer | `0` | Integer from 0, slider to 10000, default 0. The same Seed gives the same offsets. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Randomize X | Integer | `1` | Offsets X when checked (default). XYZ mode only. |
| Randomize Y | Integer | `1` | Offsets Y when checked (default). XYZ mode only. |
| Randomize Z | Integer | `1` | Offsets Z when checked (default). XYZ mode only. |
| Input | DATATYPE | `—` | Data to process. |

</details>

<details>
<summary>Read the full description</summary>

Each element gets an offset between Min Offset and Max Offset. Apply To XYZ Coordinates gives X, Y and Z their own offsets and writes three values, so a fourth value is dropped. Scalar Values gives a number, or the first value of a list, one offset. Min and Max are swapped if Min is larger.

Uniform spreads the offset evenly between the limits. Gaussian centers on their midpoint with a spread of one sixth of their difference and cuts at three spreads, so it stays inside the limits.

The value depends only on Seed, the element index and the axis, so the same Seed repeats the result. Randomize X, Y and Z, all on by default, apply to XYZ mode only.

</details>

## Example Connections

<Tabs>
<TabItem value="randomize-a-grid-and-draw" label="Randomize a grid and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValAttrRandomize.Input
vScriptValAttrRandomize.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="randomize-a-circle-then-move-it" label="Randomize a circle, then move it">

```
vScriptValPointsOnCircle.Output -> vScriptValAttrRandomize.Input
vScriptValAttrRandomize.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Animate/vScriptValPointsJitter">vScriptValPointsJitter</a>
  <a className="node-chip" href="../Create/vScriptValRandom">vScriptValRandom</a>
  <a className="node-chip" href="./vScriptValAttrTransfer">vScriptValAttrTransfer</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
