---
sidebar_position: 12
title: vScriptValClosePath
description: "Closes or opens a path by adding or removing a repeated end point, with seam options."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValClosePath

Closes or opens a path by adding or removing a repeated end point, with seam options.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValClosePath.png" alt="vScriptValClosePath node" />
</div>

vScriptValClosePath takes an array of XYZ points that form a path. Operation closes it, opens it or toggles it, and Seam and Duplicate Endpoint control how the closing point is made.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Operation | Dropdown | `Close Path` | Close Path (default), Open Path or Toggle. |
| Seam | Dropdown | `Keep Start` | Keep Start (default), Keep End or Average. Which first point is used when closing. Hidden for Open Path. |
| Duplicate Endpoint | Integer | `1` | Adds a copy of the first point at the end of a closed path when on (default). Hidden for Open Path. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>Read the full description</summary>

A path counts as closed when its first and last points are equal. Open Path removes repeated last points until the path is no longer closed. Close Path removes an existing repeated end first, then applies Seam, then adds a copy of the first point at the end if Duplicate Endpoint is on (default). Toggle opens a closed path and closes an open one.

Seam Keep Start leaves the first point as it is. Keep End replaces the first point with a copy of the last. Average replaces it with the average of the first and the last. Seam and Duplicate Endpoint are hidden when Operation is Open Path.

Fewer than 2 points are returned unchanged. Each output point has X, Y and Z only.

</details>

## Example Connections

<Tabs>
<TabItem value="close-a-path-and-draw-it" label="Close a path and draw it" default>

```
vScriptValPointsOnArc.Output -> vScriptValClosePath.Points
vScriptValClosePath.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="resample-a-closed-path" label="Resample a closed path">

```
vScriptValPointsOnCircle.Output -> vScriptValClosePath.Points
vScriptValClosePath.Output -> vScriptValResamplePath.Points
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValResamplePath">vScriptValResamplePath</a>
  <a className="node-chip" href="./vScriptValReverse">vScriptValReverse</a>
  <a className="node-chip" href="./vScriptValPathFrame">vScriptValPathFrame</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
