---
sidebar_position: 20
title: vArrayInterpolate
description: "Blends two arrays value by value with a Progress amount and an easing curve."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayInterpolate

Blends two arrays value by value with a Progress amount and an easing curve.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayInterpolate.png" alt="vArrayInterpolate node" />
</div>

vArrayInterpolate takes Input A and Input B and outputs values between them. Progress 0 gives A, 1 gives B, and Select Easing shapes the curve in between.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Progress | Float | `0` | Blend position from 0 (Input A) to 1 (Input B). Range 0 to 1, default 0. |
| Select Easing | Dropdown | `linear` | linear (default), easeInQuad, easeOutQuad, easeInOutQuad, easeInExpo, easeOutExpo or easeInOutExpo. |
| Show Input | Integer | `0.0` | Shows a Progress input port on the node when on. Default off. |
| Input A | DATATYPE | `—` | Values at Progress 0. |
| Input B | DATATYPE | `—` | Values at Progress 1. |

<details>
<summary>Read the full description</summary>

Each value is A + (B - A) * ease(Progress). Lists inside the arrays are blended value by value, so XYZ points work. If the arrays differ in length, both are cut to the shorter one. Progress is limited to 0 to 1 and defaults to 0, which outputs Input A.

Select Easing chooses linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInExpo, easeOutExpo or easeInOutExpo. The easing function is applied to Progress before the blend.

Show Input makes a Progress input port available on the node, so the value can be connected.

</details>

## Example Connections

<Tabs>
<TabItem value="morph-a-grid-into-a-sphere-and-draw" label="Morph a grid into a sphere and draw" default>

```
vArrayPointsOnGrid.Output -> vArrayInterpolate.ArrayA
vArrayPointsOnSphere.Output -> vArrayInterpolate.ArrayB
vArrayInterpolate.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="blend-a-circle-into-a-rectangle" label="Blend a circle into a rectangle">

```
vArrayPointsOnCircle.Output -> vArrayInterpolate.ArrayA
vArrayPointsOnRectangle.Output -> vArrayInterpolate.ArrayB
vArrayInterpolate.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayApplyMask">vArrayApplyMask</a>
  <a className="node-chip" href="../Animate/vArrayMaterialEasing">vArrayMaterialEasing</a>
  <a className="node-chip" href="./vArrayMapRange">vArrayMapRange</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
