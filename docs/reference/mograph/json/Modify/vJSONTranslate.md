---
sidebar_position: 64
title: vJSONTranslate
description: "Adds an XYZ offset to every point, then multiplies it by a scale."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTranslate

Adds an XYZ offset to every point, then multiplies it by a scale.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTranslate.png" alt="vJSONTranslate node" />
</div>

vJSONTranslate takes an array of XYZ points and outputs (point + offset) * scale for each axis. X Scale is used for X and Z, and Y Scale for Y.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `—` | Added to X before the scale. Default 0. |
| Y Offset | Float | `—` | Added to Y before the scale. Default 0. |
| Z Offset | Float | `—` | Added to Z before the scale. Default 0. |
| Lock X/Y | Integer | `1` | Only changes which scale controls are shown. Default on. |
| X Scale | Float | `1.0` | Multiplies X and Z after the offset. Default 1. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Scale | Float | `1.0` | Multiplies Y after the offset. Default 1. Hidden while Lock X/Y is on, but still used. |
| Input | DATATYPE | `—` | Points to move. |
| Show Input | Integer | `0.0` | Shows the input ports of the offsets and scales when on. Default off. |

</details>

<details>
<summary>Read the full description</summary>

Each point becomes ((x + X Offset) * X Scale, (y + Y Offset) * Y Scale, (z + Z Offset) * X Scale). The offsets default to 0 and the scales to 1, so the default leaves the points unchanged. Because the scale is applied after the offset, it also scales the offset.

Lock X/Y (on by default) hides Y Scale, but the code still reads it, so Y Scale keeps its value and is not tied to X Scale. Show Input exposes the offsets and scales as input ports. Elements that are not lists of at least 3 values are dropped, and the output points have 3 values.

</details>

## Example Connections

<Tabs>
<TabItem value="reposition-a-grid-and-draw" label="Reposition a grid and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="move-a-circle-after-jitter" label="Move a circle after jitter">

```
vJSONPointsOnCircle.Output -> vJSONPointsJitter.Input
vJSONPointsJitter.Output -> vJSONTranslate.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONRepeat">vJSONRepeat</a>
  <a className="node-chip" href="./vJSONMirror">vJSONMirror</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
