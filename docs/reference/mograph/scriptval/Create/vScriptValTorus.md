---
sidebar_position: 56
title: vScriptValTorus
description: "Generate points on a torus from a major radius, a minor radius and segment counts around the ring and the tube."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTorus

Generate points on a torus from a major radius, a minor radius and segment counts around the ring and the tube.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTorus.png" alt="vScriptValTorus node" />
</div>

vScriptValTorus has no input and outputs an array of XYZ points on a torus that lies in the XY plane around the Z axis. U Segments and V Segments set the point count, and U Sweep limits how much of the ring is generated.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Major Radius | Float | `0.35` | Distance from the center of the torus to the center of the tube. Minimum 0.001, default 0.35. |
| Minor Radius | Float | `0.1` | Radius of the tube. Minimum 0.001, default 0.1. |
| U Segments | Integer | `24` | Number of positions around the ring. Clamped to 3 or more, default 24. |
| V Segments | Integer | `12` | Number of points around the tube at each ring position. Clamped to 3 or more, default 12. |
| U Sweep | Float | `360` | Angle covered around the ring, in degrees. Range 0 to 360, default 360. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include End | Integer | `0.0` | When on, the last ring position lands on the end of the sweep. When off, it stops one step short. Default off. |

</details>

<details>
<summary>Read the full description</summary>

The node places V Segments points around the tube at each of U Segments positions around the ring, so the output holds U Segments * V Segments points, ordered ring position by ring position. For ring angle u and tube angle v, X = (Major Radius + Minor Radius * cos v) * cos u, Y = (Major Radius + Minor Radius * cos v) * sin u and Z = Minor Radius * sin v.

With the defaults (Major Radius 0.35, Minor Radius 0.1, 24 U Segments, 12 V Segments, U Sweep 360) the node outputs 288 points forming a closed torus centered on the origin. The tube angles always cover a full circle.

U Sweep sets the angle covered around the ring, from 0 to 360 degrees. Include End decides where the last ring position lands. With it off, the sweep is divided by U Segments, so a 360 degree sweep stops one step short of the start and no ring is repeated. With it on, the sweep is divided by U Segments - 1, the last ring lands on the end of the sweep, and a 360 degree sweep puts the last ring on top of the first.

Both segment counts are clamped to 3 or more. The node does not compare the two radii, so a Minor Radius larger than the Major Radius gives a self-intersecting surface. The output contains points only, with no edges or faces.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-torus" label="Draw the torus" default>

```
vScriptValTorus.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="mirror-the-points-across-an-axis" label="Mirror the points across an axis">

```
vScriptValTorus.Output -> vScriptValMirror.Input
vScriptValMirror.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCylinder">vScriptValCylinder</a>
  <a className="node-chip" href="./vScriptValHelix">vScriptValHelix</a>
  <a className="node-chip" href="./vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
