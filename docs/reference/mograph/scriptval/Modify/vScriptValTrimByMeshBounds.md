---
sidebar_position: 65
title: vScriptValTrimByMeshBounds
description: "Drops or clamps points that lie outside the bounding box of a mesh or of a second point array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTrimByMeshBounds

Drops or clamps points that lie outside the bounding box of a mesh or of a second point array.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTrimByMeshBounds.png" alt="vScriptValTrimByMeshBounds node" />
</div>

vScriptValTrimByMeshBounds takes an array of XYZ points and a bounding box, and either removes the points outside the box (Drop) or moves them onto its faces (Clamp). The box comes from Mesh Points or from a Bounds Array.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Bounds Source | Dropdown | `Array Points` | Array Points (default) uses Mesh Points. Bounds Array uses the Bounds Array input. |
| AABB Padding | Float | `0` | Grows the box on every side. Negative values shrink it. Slider -10 to 10, default 0. |
| Mode | Dropdown | `Drop` | Drop (default) removes points outside the box. Clamp moves them onto it. |
| Test X | Integer | `1` | Checks X against the box when on (default). |
| Test Y | Integer | `1` | Checks Y against the box when on (default). |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Test Z | Integer | `1` | Checks Z against the box when on (default). |
| Points | DATATYPE | `—` | Point positions. |
| Bounds Array | DATATYPE | `—` | Points that define the box. Used when Bounds Source is Bounds Array. |
| Mesh Points | DATATYPE | `—` | Points that define the box. Used when Bounds Source is Array Points. |

</details>

<details>
<summary>Read the full description</summary>

The box is the smallest axis-aligned box around the Mesh Points, or around the Bounds Array when Bounds Source is set to it. AABB Padding (default 0) grows the box on every side, or shrinks it when negative. Test X, Y and Z (all on by default) choose the axes that are checked.

In Drop mode, the default, a point is kept when it is inside the box on all tested axes. In Clamp mode each tested coordinate is limited to the box range. Untested axes are never changed. If the bounds source is empty, the points are output unchanged.

</details>

## Example Connections

<Tabs>
<TabItem value="keep-grid-points-inside-a-loaded-mesh-box-and-draw" label="Keep grid points inside a loaded mesh box and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValTrimByMeshBounds.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValTrimByMeshBounds.MeshPoints
vScriptValTrimByMeshBounds.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="clamp-points-to-the-box-of-another-array" label="Clamp points to the box of another array">

```
vScriptValRandom.Output -> vScriptValTrimByMeshBounds.ArrayPoints
vScriptValPointsOnRectangle.Output -> vScriptValTrimByMeshBounds.BoundsArray
vScriptValTrimByMeshBounds.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBoundingBox">vScriptValBoundingBox</a>
  <a className="node-chip" href="./vScriptValMaskByMesh">vScriptValMaskByMesh</a>
  <a className="node-chip" href="./vScriptValClamp">vScriptValClamp</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
