---
sidebar_position: 60
title: vArraySortByDistance
description: "Reorders points into a nearest-neighbor chain that starts at the first point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySortByDistance

Reorders points into a nearest-neighbor chain that starts at the first point.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySortByDistance.png" alt="vArraySortByDistance node" />
</div>

vArraySortByDistance takes an array of XYZ points and outputs them in a new order: the first point, then the closest unused point to it, and so on. Distance Mode decides what happens when the closest point is farther than Smallest Distance.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Smallest Distance | Float | `1.0` | Largest step allowed in Strict mode. Not used in Preferred mode. Minimum 0, slider 0 to 10, default 1. |
| Distance Mode | Dropdown | `Preferred` | Preferred (default) always steps to the closest unused point. Strict stops the chain when that point is not closer than Smallest Distance. |
| Input | DATATYPE | `—` | Points to sort. |

<details>
<summary>Read the full description</summary>

The first input point stays first. Each next point is the unused point that is closest to the one before, which avoids long jumps when points are drawn in order. Points that are not lists of at least 3 values are dropped, and each output point has 3 values.

In Preferred mode (default) the chain always continues with the closest unused point, whatever its distance. In Strict mode the chain stops at the first step where no unused point is closer than Smallest Distance (default 1) to the last point. The points not reached are then added after the chain in their input order. The search compares every unused point at every step, so it slows down with the square of the point count.

</details>

## Example Connections

<Tabs>
<TabItem value="order-scattered-points-and-draw-the-path" label="Order scattered points and draw the path" default>

```
vArrayRandom.Output -> vArraySortByDistance.Array
vArraySortByDistance.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="order-points-loaded-from-a-mesh" label="Order points loaded from a mesh">

```
vArrayFromOBJ.Points -> vArraySortByDistance.Array
vArraySortByDistance.Output -> vArrayResamplePath.Points
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArraySortByMeshProx">vArraySortByMeshProx</a>
  <a className="node-chip" href="./vArrayReverse">vArrayReverse</a>
  <a className="node-chip" href="./vArrayResamplePath">vArrayResamplePath</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
