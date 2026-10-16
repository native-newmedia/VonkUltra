---
sidebar_position: 15
title: vScriptValCopyToPoints
description: "Copies a template point set onto every target point, with scale and seeded Z rotation."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCopyToPoints

Copies a template point set onto every target point, with scale and seeded Z rotation.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCopyToPoints.png" alt="vScriptValCopyToPoints node" />
</div>

vScriptValCopyToPoints takes a Template array and a Points array, and outputs one copy of the template at each point. Scale, Base Rotate Z, Random Rotate Z and the random offsets change each copy.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Template Scale | Float | `1` | Scale of each copy, multiplied with Scale X, Y and Z. Slider 0 to 4, default 1. |
| Scale X | Float | `1` | Scale of the template on X, applied before the rotation. Slider 0 to 4, default 1. |
| Scale Y | Float | `1` | Scale of the template on Y, applied before the rotation. Slider 0 to 4, default 1. |
| Scale Z | Float | `1` | Scale of the template on Z. Slider 0 to 4, default 1. |
| Base Rotate Z | Float | `0` | Rotation of each copy around Z in degrees. Slider -360 to 360, default 0. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Random Rotate Z | Float | `0` | Each copy is rotated by a random angle between minus and plus this value, in degrees. Minimum 0, default 0. |
| Seed | Integer | `0` | Integer from 0, slider to 10000, default 0. The same Seed repeats the random values. |
| Random Offset X | Float | `0` | Each copy is moved on X by a random value between minus and plus this value. Minimum 0, default 0. |
| Random Offset Y | Float | `0` | Each copy is moved on Y by a random value between minus and plus this value. Minimum 0, default 0. |
| Random Offset Z | Float | `0` | Each copy is moved on Z by a random value between minus and plus this value. Minimum 0, default 0. |
| Template | DATATYPE | `—` | Points that are copied. If empty, one point at 0, 0, 0 is used. |
| Points | DATATYPE | `—` | Target points that receive a copy of the template. |

</details>

<details>
<summary>Read the full description</summary>

For each Points entry the template is scaled by Template Scale and Scale X, Y and Z, rotated around Z, and placed at that point. The output has one point for each pair of target point and template point. Without a Template, a single point at 0, 0, 0 is used, so the output has one point per target point.

The Z angle in degrees is Base Rotate Z plus a random value between minus and plus Random Rotate Z, chosen per target point. Random Offset X, Y and Z move each copy by a random value between minus and plus the setting. All random values come from Seed and the point index.

The scale is applied before the rotation. All template points of one copy share one angle and one offset.

</details>

## Example Connections

<Tabs>
<TabItem value="copy-a-circle-template-onto-a-grid-and-draw" label="Copy a circle template onto a grid and draw" default>

```
vScriptValPointsOnCircle.Output -> vScriptValCopyToPoints.Template
vScriptValPointsOnGrid.Output -> vScriptValCopyToPoints.Points
vScriptValCopyToPoints.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="copy-onto-scattered-points" label="Copy onto scattered points">

```
vScriptValLine.Output -> vScriptValCopyToPoints.Template
vScriptValRandom.Output -> vScriptValCopyToPoints.Points
vScriptValCopyToPoints.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValRepeat">vScriptValRepeat</a>
  <a className="node-chip" href="./vScriptValRepeatTransform">vScriptValRepeatTransform</a>
  <a className="node-chip" href="./vScriptValScatterInstOnMesh">vScriptValScatterInstOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
