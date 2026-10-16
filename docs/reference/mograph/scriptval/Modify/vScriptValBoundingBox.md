---
sidebar_position: 7
title: vScriptValBoundingBox
description: "Outputs the corner points and the edges of the bounding box of a point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValBoundingBox

Outputs the corner points and the edges of the bounding box of a point array.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValBoundingBox.png" alt="vScriptValBoundingBox node" />
</div>

vScriptValBoundingBox takes an array of points and outputs the corners of the smallest box that contains them on the Points output. The Edges output holds the faces or lines that join the corners.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | ScriptVal | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

The node has no controls. It reads the minimum and maximum of X, Y and Z over the input. An element with 3 values updates all three axes, one with 2 values updates X and Y, and one with 1 value updates X. Elements of any other length are skipped.

With Z limits, the Points output has 8 corners and the Edges output has 6 four-corner faces, given as 1-based corner indices. With only X and Y limits it has 4 corners and 4 two-corner edges. With X only it has 2 values and one edge. An empty input gives empty outputs.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-box-of-a-loaded-mesh" label="Draw the box of a loaded mesh" default>

```
vScriptValFromOBJ.Points -> vScriptValBoundingBox.ArrayA
vScriptValBoundingBox.Points -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
vScriptValBoundingBox.Edges -> vScriptValShapeRender.ArrayEdge
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="box-of-a-grid" label="Box of a grid">

```
vScriptValPointsOnGrid.Output -> vScriptValBoundingBox.ArrayA
vScriptValBoundingBox.Points -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValTranslate">vScriptValTranslate</a>
  <a className="node-chip" href="./vScriptValTrimByMeshBounds">vScriptValTrimByMeshBounds</a>
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
