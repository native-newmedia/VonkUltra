---
sidebar_position: 48
title: vArrayRepeat
description: "Repeats a point array Copies times, each copy scaled, rotated around Z and moved a step more."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRepeat

Repeats a point array Copies times, each copy scaled, rotated around Z and moved a step more.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRepeat.png" alt="vArrayRepeat node" />
</div>

vArrayRepeat takes an array of XYZ points and outputs Copies copies of it one after another. Each copy is changed by one more step of scale, Z rotation and offset than the one before.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Copies | Integer | `3` | Number of copies. Minimum 1, slider 1 to 100, default 3. |
| Offset X | Float | `0.1` | Offset on X added for each copy number. Default 0.1. |
| Offset Y | Float | `0` | Offset on Y added for each copy number. Default 0. |
| Offset Z | Float | `0` | Offset on Z added for each copy number. Default 0. |
| Rotate Step Z | Float | `0` | Rotation around Z per copy, in degrees. Slider -360 to 360, default 0. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale Step | Float | `0` | Scale change per copy, so copy c has the scale 1 + Scale Step * c. Slider -1 to 1, default 0. |
| Input | DATATYPE | `—` | Points to repeat. |

</details>

<details>
<summary>Read the full description</summary>

Copy number c, counting from 0, is made in this order: the point is multiplied by 1 + Scale Step * c on all three axes, turned around the Z axis by Rotate Step Z * c degrees, then moved by Offset X, Y and Z times c. Copy 0 is the input as it is.

Copies has a minimum of 1 and defaults to 3, and Offset X defaults to 0.1, so by default the input is repeated three times along X. The output holds all copies in order, so its length is the input length times Copies. Rotation and scale are around the origin, not around each copy. Input that does not start with a list is passed through.

</details>

## Example Connections

<Tabs>
<TabItem value="repeat-a-circle-along-x-and-draw" label="Repeat a circle along X and draw" default>

```
vArrayPointsOnCircle.Output -> vArrayRepeat.Input
vArrayRepeat.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="repeat-a-line" label="Repeat a line">

```
vArrayLine.Output -> vArrayRepeat.Input
vArrayRepeat.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayRepeatTransform">vArrayRepeatTransform</a>
  <a className="node-chip" href="./vArrayCopyToPoints">vArrayCopyToPoints</a>
  <a className="node-chip" href="../Utility/vArrayAppend">vArrayAppend</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
