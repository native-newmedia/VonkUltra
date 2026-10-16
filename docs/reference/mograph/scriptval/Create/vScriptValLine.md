---
sidebar_position: 26
title: vScriptValLine
description: "Generate evenly spaced points on a straight line between a start and an end position."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValLine

Generate evenly spaced points on a straight line between a start and an end position.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValLine.png" alt="vScriptValLine node" />
</div>

vScriptValLine has no input and outputs an array of XYZ points between Start and End positions. Point Count sets how many points are written.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Start X | Float | `-0.5` | X position of the first point. Default -0.5. |
| Start Y | Float | `0` | Y position of the first point. Default 0. |
| Start Z | Float | `0` | Z position of the first point. Default 0. |
| End X | Float | `0.5` | X position of the end of the line. Default 0.5. |
| End Y | Float | `0` | Y position of the end of the line. Default 0. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| End Z | Float | `0` | Z position of the end of the line. Default 0. |
| Point Count | Integer | `10` | Number of points. Clamped to 2 or more, default 10. |
| Include End Point | Integer | `1.0` | When on, the last point lands on the end position. When off, the points stop one step before it. Default on. |

</details>

<details>
<summary>Read the full description</summary>

For point i of n, the node uses t = i / (n - 1) and writes Start + (End - Start) * t on each of the three axes. The first point is at the start position and, with Include End Point on, the last point is at the end position.

With the defaults (Start -0.5, 0, 0, End 0.5, 0, 0, 10 points, Include End Point on) the node outputs ten points on the X axis from -0.5 to 0.5, 0.111 apart.

With Include End Point off, t is divided by n instead of n - 1. The spacing is then (End - Start) / n and the last point stops one step before the end position.

Point Count is clamped to 2 or more. The start and end positions are not limited. The output contains points only, with no edges.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-line" label="Draw the line" default>

```
vScriptValLine.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="animate-the-points-with-varraywave" label="Animate the points with vArrayWave">

```
vScriptValLine.Output -> vScriptValWave.ArrayA
vScriptValWave.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointsOnGrid">vScriptValPointsOnGrid</a>
  <a className="node-chip" href="./vScriptValCubicBezier">vScriptValCubicBezier</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
