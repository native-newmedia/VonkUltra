---
sidebar_position: 21
title: vScriptValGeodesicSphere
description: "Generate the vertices of a subdivided icosahedron, an icosphere, with a set radius and subdivision level."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGeodesicSphere

Generate the vertices of a subdivided icosahedron, an icosphere, with a set radius and subdivision level.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValGeodesicSphere.png" alt="vScriptValGeodesicSphere node" />
</div>

vScriptValGeodesicSphere has no input and outputs an array of XYZ points that are the vertices of an icosphere around the origin. Subdivision Level sets how many times each triangle is split.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.3` | Distance of every point from the origin. Minimum 0.001, default 0.3. |
| Subdivision Level | Integer | `2` | Number of times each triangle is split into four. Range 0 to 5, default 2. |

<details>
<summary>Read the full description</summary>

Level 0 is an icosahedron with 12 vertices. Each further level splits every triangle into four by adding a point at the middle of each edge and moving it onto the sphere. Every point has the distance Radius from the origin. The number of points is 10 * 4^level + 2, which gives 12, 42, 162, 642, 2562 and 10242 for levels 0 to 5.

With the defaults (Radius 0.3, Subdivision Level 2) the node outputs 162 points. The first 12 points are the original icosahedron vertices, and the new points follow in the order they were created. The points on the sphere are spaced much more evenly than the points of a latitude and longitude grid.

Subdivision Level is limited to 0 to 5 and Radius to 0.001 or more. The output contains vertices only. The faces are used internally and are not written.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-sphere-points" label="Draw the sphere points" default>

```
vScriptValGeodesicSphere.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-sphere-before-drawing" label="Offset the sphere before drawing">

```
vScriptValGeodesicSphere.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValGenerateSphere">vScriptValGenerateSphere</a>
  <a className="node-chip" href="./vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
  <a className="node-chip" href="./vScriptValFrustum">vScriptValFrustum</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
