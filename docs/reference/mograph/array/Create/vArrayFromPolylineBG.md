---
sidebar_position: 13
title: vArrayFromPolylineBG
description: "Sample a path drawn over a connected background image into evenly spaced points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromPolylineBG

Sample a path drawn over a connected background image into evenly spaced points.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromPolylineBG.png" alt="vArrayFromPolylineBG node" />
</div>

vArrayFromPolylineBG outputs an array of XYZ points taken at equal distances along a path drawn in the viewer. A background image connected to the Background socket is passed to the Canvas output, and its shape sets the aspect correction.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Background | Image | `—` | Image shown behind the drawn path. It is passed to the Canvas output and sets the aspect used by Aspect Correct. |
| Reset Path | Integer | `0.0` | Button that clears the drawn path. |
| Point Count | Integer | `64` | Number of points taken along the path. Minimum 2, default 64. |
| Closed Loop | Integer | `0.0` | When on, the path is treated as closed and the first point is not repeated at the end. Default off. |
| Flip Y | Integer | `1.0` | Negates Y after sampling. Default on. |

<details>
<summary>+4 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Flip X | Integer | `1.0` | Negates X after sampling. Default on. |
| Aspect Correct | Integer | `1.0` | Divides Y by the width divided by the height of the Background image, or by 16 / 9 without an image. Default on. |
| Scale X | Float | `2.0` | Multiplier applied to X. Minimum 0, default 2. |
| Scale Y | Float | `2.0` | Multiplier applied to Y. Minimum 0, default 2. |

</details>

<details>
<summary>Read the full description</summary>

The Path control is a spline that is drawn in the viewer over the Background image. The node takes Point Count positions along the path at equal fractions of its length. Without Closed Loop the first point is at the start and the last at the end of the path. With Closed Loop on, the spacing is divided by Point Count instead of Point Count - 1, so the first point is not repeated at the end.

Each point is then changed in this order. Flip X and Flip Y negate the X and Y values. Aspect Correct divides Y by the width divided by the height of the Background image, or by 16 / 9 when no image is connected. Scale X and Scale Y multiply the values. Z is always 0. Flip X, Flip Y and Aspect Correct are on by default, and both scales default to 2.

The Background image is passed to the Canvas output without changes, so the same image can be used behind the drawn path. If the path has fewer than two points, the node stops without producing points. Reset Path clears the drawn path. Point Count is rounded to a whole number and has a minimum of 2.

The node is the same as vArrayFromPolyline except for the Background input and the aspect source. It has no canvas color controls.

</details>

## Example Connections

<Tabs>
<TabItem value="trace-a-path-over-an-image-and-draw-the-points" label="Trace a path over an image and draw the points" default>

```
Loader.Output -> vArrayFromPolylineBG.Background
vArrayFromPolylineBG.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
Loader.Output -> vArrayFromPolylineBG.Background
vArrayFromPolylineBG.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayFromPolyline">vArrayFromPolyline</a>
  <a className="node-chip" href="./vArrayFromPolylineMulti">vArrayFromPolylineMulti</a>
  <a className="node-chip" href="./vArrayFromImage">vArrayFromImage</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
