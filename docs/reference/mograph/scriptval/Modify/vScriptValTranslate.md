---
sidebar_position: 64
title: vScriptValTranslate
description: "Adds an XYZ offset to every point, then multiplies it by a scale."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTranslate

Adds an XYZ offset to every point, then multiplies it by a scale.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTranslate.png" alt="vScriptValTranslate node" />
</div>

vScriptValTranslate takes an array of XYZ points and outputs (point + offset) * scale for each axis. X Scale is used for X and Z, and for Y while Lock X/Y is on. Y Scale is used for Y when Lock X/Y is off.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `—` | Added to X before the scale. Default 0. |
| Y Offset | Float | `—` | Added to Y before the scale. Default 0. |
| Z Offset | Float | `—` | Added to Z before the scale. Default 0. |
| Lock X/Y | Integer | `1` | When on (default), Y uses X Scale and Y Scale is hidden. When off, Y Scale is used for Y. |
| X Scale | Float | `1.0` | Multiplies X and Z after the offset. Default 1. Also multiplies Y while Lock X/Y is on. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Scale | Float | `1.0` | Multiplies Y after the offset when Lock X/Y is off. Default 1. Hidden while it is on. |
| Input | DATATYPE | `—` | Data to process. |
| Show Input | Integer | `0.0` | Shows the input ports of the offsets and scales when on. Default off. |

</details>

<details>
<summary>Read the full description</summary>

Each point becomes ((x + X Offset) * X Scale, (y + Y Offset) * Y Scale, (z + Z Offset) * X Scale). The offsets default to 0 and the scales to 1, so the default leaves the points unchanged. Because the scale is applied after the offset, it also scales the offset.

Lock X/Y is on by default. While it is on, Y Scale is hidden and Y uses X Scale. With it off, Y Scale scales Y on its own. Show Input exposes the offsets and scales as input ports. Elements that are not lists of at least 3 values are dropped, and the output points have 3 values.

</details>

## Example Connections

<Tabs>
<TabItem value="reposition-a-grid-and-draw" label="Reposition a grid and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="move-a-circle-after-jitter" label="Move a circle after jitter">

```
vScriptValPointsOnCircle.Output -> vScriptValPointsJitter.Input
vScriptValPointsJitter.Output -> vScriptValTranslate.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="./vScriptValRepeat">vScriptValRepeat</a>
  <a className="node-chip" href="./vScriptValMirror">vScriptValMirror</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
