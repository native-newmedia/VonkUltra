---
sidebar_position: 7
title: vJSONBoundingBox
description: "Outputs the corner points and the edges of the bounding box of a point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONBoundingBox

Outputs the corner points and the edges of the bounding box of a point array.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONBoundingBox.png" alt="vJSONBoundingBox node" />
</div>

vJSONBoundingBox takes an array of points and outputs the corners of the smallest box that contains them on the Points output. The Edges output holds the faces or lines that join the corners.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

The node has no controls. It reads the minimum and maximum of X, Y and Z over the input. An element with 3 values updates all three axes, one with 2 values updates X and Y, and one with 1 value updates X. Elements of any other length are skipped.

With Z limits, the Points output has 8 corners and the Edges output has 6 four-corner faces, given as 1-based corner indices. With only X and Y limits it has 4 corners and 4 two-corner edges. With X only it has 2 values and one edge. An empty input gives empty outputs.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-box-of-a-loaded-mesh" label="Draw the box of a loaded mesh" default>

```
vJSONFromOBJ.Points -> vJSONBoundingBox.ArrayA
vJSONBoundingBox.Points -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
vJSONBoundingBox.Edges -> vJSONShapeRender.ArrayEdge
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="box-of-a-grid" label="Box of a grid">

```
vJSONPointsOnGrid.Output -> vJSONBoundingBox.ArrayA
vJSONBoundingBox.Points -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONTranslate">vJSONTranslate</a>
  <a className="node-chip" href="./vJSONTrimByMeshBounds">vJSONTrimByMeshBounds</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
