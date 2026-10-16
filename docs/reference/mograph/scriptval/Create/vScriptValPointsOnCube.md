---
sidebar_position: 40
title: vScriptValPointsOnCube
description: "Generate a 3D lattice of points with a set count per axis and one spacing value, 10 points per axis by default."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointsOnCube

Generate a 3D lattice of points with a set count per axis and one spacing value, 10 points per axis by default.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointsOnCube.png" alt="vScriptValPointsOnCube node" />
</div>

vScriptValPointsOnCube has no input and outputs an array of XYZ points on a regular lattice centered on the origin. Number X, Y and Z set the count on each axis, and Multiplier sets the spacing.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number X | Integer | `10` | Number of points along X. Range 1 to 100, default 10. |
| Number Y | Integer | `10` | Number of points along Y. Range 1 to 100, default 10. |
| Number Z | Integer | `10` | Number of points along Z. Range 1 to 100, default 10. |
| Multiplier | Float | `0.05` | Distance between neighboring points on every axis. Range -1 to 1, default 0.05. |

<details>
<summary>Read the full description</summary>

The node writes Number X * Number Y * Number Z points. Point (x, y, z) is placed at X = x * Multiplier - offset X, Y = y * Multiplier - offset Y and Z = z * Multiplier - offset Z, where each offset is (count - 1) * Multiplier / 2. The lattice is centered on the origin and Multiplier is both the spacing between neighbors and the scale of the whole block.

The points fill the whole volume, not only its surface. They are written with X changing fastest, then Y, then Z. With the defaults (10 points on each axis, Multiplier 0.05) the node outputs 1000 points in a cube that spans 0.45 units on each axis.

The node uses the same code as vScriptValPointsOnGrid. The two differ only in their default counts.

A negative Multiplier mirrors the lattice. Each count is limited to 100 by the control, which allows up to 1,000,000 points.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-lattice" label="Draw the lattice" default>

```
vScriptValPointsOnCube.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="animate-the-lattice-with-varraywave" label="Animate the lattice with vArrayWave">

```
vScriptValPointsOnCube.Output -> vScriptValWave.ArrayA
vScriptValWave.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
  <a className="node-chip" href="./vScriptValCylinder">vScriptValCylinder</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
