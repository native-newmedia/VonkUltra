---
sidebar_position: 14
title: vJSONFromPolylineMulti
description: "Sample up to eight paths drawn in the viewer into one point list, with a group size for each path."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromPolylineMulti

Sample up to eight paths drawn in the viewer into one point list, with a group size for each path.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromPolylineMulti.png" alt="vJSONFromPolylineMulti node" />
</div>

vJSONFromPolylineMulti outputs one array of XYZ points that holds the sampled points of up to eight drawn paths, and a Groups output with the number of points taken from each path.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Path Count | Integer | `2` | Number of path controls that are shown and used. Range 1 to 8, default 2. |
| Point Count (Global) | Integer | `64` | Number of points taken from each path, unless the path overrides it. Minimum 2, default 64. |
| Closed Loop (Global) | Integer | `0.0` | When on, paths are treated as closed and the first point is not repeated. Default off. |
| Flip Y | Integer | `1.0` | Negates Y after sampling. Default on. |
| Flip X | Integer | `1.0` | Negates X after sampling. Default on. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Aspect Correct | Integer | `1.0` | Divides Y by 16 / 9. Default on. |
| Scale X | Float | `2.0` | Multiplier applied to X. Minimum 0, default 2. |
| Scale Y | Float | `2.0` | Multiplier applied to Y. Minimum 0, default 2. |
| Canvas R | Float | `0.05` | Red level of the image the node creates. Range 0 to 1, default 0.05. |
| Canvas G | Float | `0.05` | Green level of the image the node creates. Range 0 to 1, default 0.05. |
| Canvas B | Float | `0.08` | Blue level of the image the node creates. Range 0 to 1, default 0.08. |

</details>

<details>
<summary>Read the full description</summary>

Path Count sets how many of the eight path controls are shown and used. Each path is sampled at equal fractions of its length, with the global Point Count and Closed Loop, and the points of all paths are joined in path order. Without Closed Loop the first and last points of a path are at its ends. With it on, the spacing is divided by the count instead of the count - 1 and the first point is not repeated.

Every path has its own Reset Path button and an Override Count checkbox. When Override Count is on, the path uses its own Count and Closed values instead of the global ones. These per-path controls are built in a loop and are not listed in the parameter table.

After sampling, Flip X and Flip Y negate the values, Aspect Correct divides Y by 16 / 9, and Scale X and Scale Y multiply the values. Z is always 0. A path with fewer than two points adds nothing and does not appear in the groups.

The Groups output lists the number of points added by each path, in order. The node also creates an image filled with Canvas R, G and B so the paths can be drawn in the viewer. The image does not change the point output.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-all-paths-with-their-groups" label="Draw all paths with their groups" default>

```
vJSONFromPolylineMulti.Output -> vJSONCameraProjection.ArrayA
vJSONFromPolylineMulti.Groups -> vJSONCameraProjection.ArrayGroups
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
vJSONCameraProjection.Groups -> vJSONShapeRender.ArrayGroups
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-all-paths-before-drawing" label="Offset all paths before drawing">

```
vJSONFromPolylineMulti.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONFromPolyline">vJSONFromPolyline</a>
  <a className="node-chip" href="./vJSONFromPolylineBG">vJSONFromPolylineBG</a>
  <a className="node-chip" href="./vJSONFromSpline">vJSONFromSpline</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
