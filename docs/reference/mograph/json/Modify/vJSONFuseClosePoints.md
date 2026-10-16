---
sidebar_position: 18
title: vJSONFuseClosePoints
description: "Merges points that lie within a distance of each other into one point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFuseClosePoints

Merges points that lie within a distance of each other into one point.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFuseClosePoints.png" alt="vJSONFuseClosePoints node" />
</div>

vJSONFuseClosePoints takes an array of points and welds those within Distance Threshold of each other. Fuse Mode keeps the first point of each group or the average, and Axis Mode picks the axes used for the distance.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Distance Threshold | Float | `0.02` | Points within this distance (or exactly at it) are joined. Minimum 0, default 0.02. |
| Fuse Mode | Dropdown | `Average` | Keep First or Average (default). |
| Axis Mode | Dropdown | `XYZ` | XYZ (default), XY, XZ, YZ, X Only, Y Only or Z Only. The axes used for the distance. |
| Minimum Cluster Size | Integer | `1` | Clusters with fewer points are removed from the output. Minimum 1, default 1. |
| Delete Singles | Integer | `0` | Removes points that have no neighbour within the threshold when on. Default off. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |

</details>

<details>
<summary>Read the full description</summary>

The node builds clusters. A point joins a cluster if it is within Distance Threshold of any point already in it, so a chain of close points becomes one cluster. Each cluster becomes one point: the first point of the cluster (Keep First) or the average of its X, Y and Z (Average, the default).

Axis Mode measures the distance over XYZ, XY, XZ, YZ or a single axis. Clusters with fewer points than Minimum Cluster Size are removed from the output. Delete Singles removes clusters of one point. The order of the output follows the first point of each cluster.

A label under the controls shows the counts of input points, output points and clusters.

</details>

## Example Connections

<Tabs>
<TabItem value="weld-scattered-points-and-draw" label="Weld scattered points and draw" default>

```
vJSONRandom.Output -> vJSONFuseClosePoints.Input
vJSONFuseClosePoints.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="weld-a-jittered-grid" label="Weld a jittered grid">

```
vJSONPointsOnGrid.Output -> vJSONPointsJitter.Input
vJSONPointsJitter.Output -> vJSONFuseClosePoints.Input
vJSONFuseClosePoints.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Utility/vJSONReducePoints">vJSONReducePoints</a>
  <a className="node-chip" href="../Animate/vJSONPointsJitter">vJSONPointsJitter</a>
  <a className="node-chip" href="./vJSONSortByDistance">vJSONSortByDistance</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
