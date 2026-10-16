---
sidebar_position: 12
title: vArrayFromPolyline
description: "Sample a path drawn in the viewer into evenly spaced points, with flip, aspect and scale controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromPolyline

Sample a path drawn in the viewer into evenly spaced points, with flip, aspect and scale controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromPolyline.png" alt="vArrayFromPolyline node" />
</div>

vArrayFromPolyline outputs an array of XYZ points taken at equal distances along a path that is drawn in the viewer. Point Count sets how many points are taken, and Closed Loop decides whether the path is closed.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reset Path | Integer | `0.0` | Button that clears the drawn path. |
| Point Count | Integer | `64` | Number of points taken along the path. Minimum 2, default 64. |
| Closed Loop | Integer | `0.0` | When on, the path is treated as closed and the first point is not repeated at the end. Default off. |
| Flip Y | Integer | `1.0` | Negates Y after sampling. Default on. |
| Flip X | Integer | `1.0` | Negates X after sampling. Default on. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Aspect Correct | Integer | `1.0` | Divides Y by 16 / 9. Default on. |
| Scale X | Float | `2.0` | Multiplier applied to X. Minimum 0, default 2. |
| Scale Y | Float | `2.0` | Multiplier applied to Y. Minimum 0, default 2. |
| Canvas R | Float | `0.15` | Red level of the image the node creates. Range 0 to 1, default 0.15. |
| Canvas G | Float | `0.15` | Green level of the image the node creates. Range 0 to 1, default 0.15. |
| Canvas B | Float | `0.25` | Blue level of the image the node creates. Range 0 to 1, default 0.25. |

</details>

<details>
<summary>Read the full description</summary>

The Path control is a spline that is drawn in the viewer. The node takes Point Count positions along the path at equal fractions of its length. Without Closed Loop the first point is at the start and the last at the end of the path. With Closed Loop on, the spacing is divided by Point Count instead of Point Count - 1, so the last point stops one step before the start and the first point is not repeated.

Each point is then changed in this order. Flip X and Flip Y negate the X and Y values. Aspect Correct divides Y by 16 / 9, a fixed ratio that does not depend on the image size. Scale X and Scale Y multiply the values. Z is always 0. Flip X, Flip Y and Aspect Correct are on by default, and both scales default to 2.

The node is a source tool and also creates an image. It fills the image with the color from Canvas R, Canvas G and Canvas B, so the path can be drawn and seen in the viewer. The image does not change the point output. If the path has fewer than two points, the output is an empty array.

Reset Path clears the drawn path. Point Count is rounded to a whole number and has a minimum of 2.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-sampled-path" label="Draw the sampled path" default>

```
vArrayFromPolyline.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
vArrayFromPolyline.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayFromPolylineBG">vArrayFromPolylineBG</a>
  <a className="node-chip" href="./vArrayFromPolylineMulti">vArrayFromPolylineMulti</a>
  <a className="node-chip" href="./vArrayCubicBezier">vArrayCubicBezier</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
