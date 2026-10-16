---
sidebar_position: 17
title: vArrayFrustum
description: "Generate points on a cone or truncated cone along the Z axis with separate bottom and top radii."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFrustum

Generate points on a cone or truncated cone along the Z axis with separate bottom and top radii.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFrustum.png" alt="vArrayFrustum node" />
</div>

vArrayFrustum has no input and outputs an array of XYZ points on a frustum centered on the origin with its axis along Z. Bottom Radius and Top Radius set the taper, and Include Caps adds rings on both ends.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Bottom Radius | Float | `0.2` | Radius of the ring at Z = -Height / 2. Minimum 0, default 0.2. |
| Top Radius | Float | `0.1` | Radius of the ring at Z = +Height / 2. Minimum 0, default 0.1. |
| Height | Float | `0.5` | Length along Z. Minimum 0.001, default 0.5. |
| Radial Segments | Integer | `24` | Number of points around the axis in each ring. Clamped to 3 or more, default 24. |
| Height Segments | Integer | `8` | Number of steps along the height, which gives this value plus one side rings. Clamped to 1 or more, default 8. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include Caps | Integer | `1` | When on, adds concentric rings to the bottom and top ends. Default on. |
| Cap Rings | Integer | `4` | Number of steps from the axis to the rim of each cap. Clamped to 1 or more, default 4. Used only when Include Caps is on. |

</details>

<details>
<summary>Read the full description</summary>

The side points form Height Segments + 1 rings from Z = -Height / 2 to Z = +Height / 2. The ring radius changes in equal steps from Bottom Radius to Top Radius. Each ring has Radial Segments points at X = radius * cos a and Y = radius * sin a, where a starts at 0 and advances by 360 / Radial Segments degrees.

With Include Caps on, the node adds Cap Rings + 1 rings at each end. The radius of cap ring k is the end radius * k / Cap Rings, so each cap runs from a single point on the axis to a ring at the full end radius. The last cap ring lies at the same position as the first or last side ring, so those points appear twice.

A ring whose radius is 0 is written as one point on the axis instead of Radial Segments overlapping points. A Top Radius of 0 therefore gives a cone with a single apex point. With the defaults (Bottom Radius 0.2, Top Radius 0.1, Height 0.5, 24 radial segments, 8 height segments, caps on with 4 cap rings) the node outputs 216 side points and 194 cap points, 410 in total.

Radial Segments is clamped to 3 or more, Height Segments and Cap Rings to 1 or more, and Height to 0.001 or more. The radii are clamped to 0 or more. The output contains points only, with no edges or faces.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-frustum" label="Draw the frustum" default>

```
vArrayFrustum.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-frustum-before-drawing" label="Offset the frustum before drawing">

```
vArrayFrustum.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCylinder">vArrayCylinder</a>
  <a className="node-chip" href="./vArrayTorus">vArrayTorus</a>
  <a className="node-chip" href="./vArrayGeodesicSphere">vArrayGeodesicSphere</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
