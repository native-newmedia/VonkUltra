---
sidebar_position: 40
title: vArrayPointsConnect
description: "Joins two point arrays into one path, alternating or appending, with an optional closing point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointsConnect

Joins two point arrays into one path, alternating or appending, with an optional closing point.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsConnect.png" alt="vArrayPointsConnect node" />
</div>

vArrayPointsConnect takes Input A and Input B and outputs one path. Alternate interleaves their points, Append puts the points of A first and then those of B.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mode | Dropdown | `Alternate` | Alternate (default) or Append. |
| Reverse B | Integer | `0` | Reverses the order of Input B first when on. Default off. |
| Connection | Float | `1` | Mix from the A point (0) to the B point (1) for each B entry. Range 0 to 1, default 1. |
| Hide Unconnected | Integer | `0` | Removes points that have no partner at the same index when on. Default off. |
| Close Loop | Integer | `0` | Adds a copy of the first point at the end when on. Default off. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Drop Duplicate Seam | Integer | `1` | Skips the added point if the last point already equals the first. Default on. Shown only when Close Loop is on. |
| Input A | DATATYPE | `—` | The first point array. |
| Input B | DATATYPE | `—` | The second point array. |

</details>

<details>
<summary>Read the full description</summary>

In Alternate mode the path runs A1, B1, A2, B2 and so on, which draws rungs between two curves. In Append mode all points of A come first and then the points of B. Each B point is placed at A + (B - A) * Connection, so Connection 1 (default) uses B as it is and 0 repeats the A point. Reverse B reverses Input B first.

Hide Unconnected removes points that have no partner at the same index. Close Loop adds a copy of the first point at the end. With Drop Duplicate Seam on (default, shown only for Close Loop), the copy is skipped when the last point already equals the first. The longer array's extra points are kept unless Hide Unconnected is on.

</details>

## Example Connections

<Tabs>
<TabItem value="connect-two-curves-with-rungs" label="Connect two curves with rungs" default>

```
vArrayPointsOnCircle.Output -> vArrayPointsConnect.ArrayA
vArrayPointsOnArc.Output -> vArrayPointsConnect.ArrayB
vArrayPointsConnect.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="append-two-grids" label="Append two grids">

```
vArrayPointsOnGrid.Output -> vArrayPointsConnect.ArrayA
vArrayPointsOnRectangle.Output -> vArrayPointsConnect.ArrayB
vArrayPointsConnect.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Utility/vArrayAppend">vArrayAppend</a>
  <a className="node-chip" href="../Utility/vArrayMergeTrim">vArrayMergeTrim</a>
  <a className="node-chip" href="./vArrayGridConnect">vArrayGridConnect</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
