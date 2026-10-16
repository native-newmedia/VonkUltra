---
sidebar_position: 23
title: vArrayLookAt
description: "Outputs a direction, Euler angles or a 9-value basis from each point toward a target."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayLookAt

Outputs a direction, Euler angles or a 9-value basis from each point toward a target.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayLookAt.png" alt="vArrayLookAt node" />
</div>

vArrayLookAt takes an array of points and a target, and writes one result per point. The target is set by Target X, Y and Z, or comes from a Targets array with one target per point.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Target X | Float | `0` | X of the target. Default 0. |
| Target Y | Float | `0` | Y of the target. Default 0. |
| Target Z | Float | `0` | Z of the target. Default 0. |
| Forward Axis | Dropdown | `+Z (default)` | +Z (default), -Z (flip), +Y, -Y, +X or -X. Re-maps the components of the direction vector. |
| Invert Direction | Integer | `0` | Reverses the direction. Default off. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Normalize | Integer | `1` | Makes the direction unit length when on (default). |
| Up X | Integer | `0` | X of the up vector, 0 or 1. Used in Full Basis mode. Default 0. |
| Up Y | Integer | `1` | Y of the up vector, 0 or 1. Used in Full Basis mode. Default 1. |
| Up Z | Integer | `0` | Z of the up vector, 0 or 1. Used in Full Basis mode. Default 0. |
| Output Mode | Dropdown | `Direction Vector` | Direction Vector (default), Euler Angles (pitch, yaw, 0, in degrees) or Full Basis (9 values). |
| Per-Point Target | Integer | `0` | Reads one target per point from Targets when on. Default off. The Targets port is shown only then. |
| Points | DATATYPE | `—` | The points to aim from. |
| Targets | DATATYPE | `—` | Optional target points, one per input point. Used when Per-Point Target is on. |

</details>

<details>
<summary>Read the full description</summary>

For each point the direction is target - point, made unit length if Normalize is on (the default). Forward Axis then re-maps its components, and Invert Direction flips it. Direction Vector outputs these three values. Euler Angles outputs pitch and yaw in degrees and a roll of 0.

Full Basis outputs nine values: the forward vector, a right vector from the cross product of the up vector (Up X, Y, Z, default 0, 1, 0) and forward, and a third vector from forward and right.

With Per-Point Target on, target i comes from the Targets input. A missing or invalid value falls back to Target X, Y and Z. A zero direction gives 0, 0, 0 when Normalize is on.

</details>

## Example Connections

<Tabs>
<TabItem value="aim-a-grid-at-a-point" label="Aim a grid at a point" default>

```
vArrayPointsOnGrid.Output -> vArrayLookAt.Points
vArrayLookAt.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
<TabItem value="aim-each-point-at-its-own-target" label="Aim each point at its own target">

```
vArrayPointsOnCircle.Output -> vArrayLookAt.Points
vArrayPointsOnGrid.Output -> vArrayLookAt.Targets
vArrayLookAt.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayPathFrame">vArrayPathFrame</a>
  <a className="node-chip" href="./vArrayTangentVector">vArrayTangentVector</a>
  <a className="node-chip" href="./vArrayOffsetByNormal">vArrayOffsetByNormal</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
