---
sidebar_position: 60
title: vJSONSortByDistance
description: "Reorders points into a nearest-neighbor chain that starts at the first point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSortByDistance

Reorders points into a nearest-neighbor chain that starts at the first point.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONSortByDistance.png" alt="vJSONSortByDistance node" />
</div>

vJSONSortByDistance takes an array of XYZ points and outputs them in a new order: the first point, then the closest unused point to it, and so on. Distance Mode decides what happens when the closest point is farther than Smallest Distance.

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
vJSONRandom.Output -> vJSONSortByDistance.Array
vJSONSortByDistance.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="order-points-loaded-from-a-mesh" label="Order points loaded from a mesh">

```
vJSONFromOBJ.Points -> vJSONSortByDistance.Array
vJSONSortByDistance.Output -> vJSONResamplePath.Points
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONSortByMeshProx">vJSONSortByMeshProx</a>
  <a className="node-chip" href="./vJSONReverse">vJSONReverse</a>
  <a className="node-chip" href="./vJSONResamplePath">vJSONResamplePath</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
