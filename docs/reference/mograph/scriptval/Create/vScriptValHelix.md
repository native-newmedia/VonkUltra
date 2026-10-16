---
sidebar_position: 23
title: vScriptValHelix
description: "Generate points along a helix with a set radius, pitch, number of turns and start angle."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValHelix

Generate points along a helix with a set radius, pitch, number of turns and start angle.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValHelix.png" alt="vScriptValHelix node" />
</div>

vScriptValHelix has no input and outputs an array of XYZ points on a helix around the Z axis. Points count, radius, pitch and turns set the shape.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number of Points | Integer | `100` | Number of points on the helix. Minimum 2, default 100. |
| Radius | Float | `1` | Distance of the points from the Z axis. Default 1. |
| Pitch (Z step) | Float | `0.1` | Z distance covered by one full turn. Default 0.1. |
| Turns | Float | `2` | Number of full turns. Minimum 0.01, default 2. |
| Start Angle (deg) | Float | `0` | Angle of the first point, in degrees. Default 0. |

<details>
<summary>Read the full description</summary>

The node spaces Number of Points points evenly along the helix. For point i of n, the parameter t is i / (n - 1). The angle is the start angle plus t * turns * 360 degrees, X is radius * cos(angle), Y is radius * sin(angle) and Z is t * turns * pitch.

With the defaults (100 points, radius 1, pitch 0.1, 2 turns, start angle 0) the node outputs a flat-looking coil that rises 0.2 units along Z in total. Pitch is the Z distance covered by one full turn, so the total height is pitch * turns.

Number of Points is limited to 2 or more and Turns to 0.01 or more. Points are spread over the whole curve, so raising Turns without raising Number of Points makes the spacing between points larger and the coil coarser.

The output is a point array. Connect it to vScriptValCameraProjection to project it into 2D, then to vScriptValShapeRender to draw it, or feed it to the Modify nodes first.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-helix" label="Draw the helix" default>

```
vScriptValHelix.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-helix-before-drawing" label="Offset the helix before drawing">

```
vScriptValHelix.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnCircle">vScriptValPointsOnCircle</a>
  <a className="node-chip" href="./vScriptValPhyllotaxis">vScriptValPhyllotaxis</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
