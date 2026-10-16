---
sidebar_position: 42
title: vArrayProfileTransform
description: "Scales, mirrors, rotates and moves a 2D profile in X and Y."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayProfileTransform

Scales, mirrors, rotates and moves a 2D profile in X and Y.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayProfileTransform.png" alt="vArrayProfileTransform node" />
</div>

vArrayProfileTransform takes a profile, a list of points, and outputs it after scale, mirror, rotation and translation. Z is left as it is.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Translate X | Float | `0` | Added to X after the rotation. Default 0. |
| Translate Y | Float | `0` | Added to Y after the rotation. Default 0. |
| Rotate (deg) | Float | `0` | Rotation around the origin in degrees. Default 0. |
| Scale X | Float | `1` | Multiplies X before the rotation. Slider -10 to 10, default 1. |
| Scale Y | Float | `1` | Multiplies Y before the rotation. Slider -10 to 10, default 1. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mirror X | Integer | `0` | Flips the sign of Scale X when on. Default off. |
| Mirror Y | Integer | `0` | Flips the sign of Scale Y when on. Default off. |
| Profile | DATATYPE | `—` | The profile points. |

</details>

<details>
<summary>Read the full description</summary>

Each point is changed in this order: X and Y are multiplied by Scale X and Scale Y (Mirror X or Mirror Y flips the sign of that scale), then turned around the origin by Rotate in degrees, then moved by Translate X and Y. Z is not changed. A positive Rotate turns the X axis toward the Y axis. The defaults (Translate 0, Rotate 0, Scale 1, mirrors off) leave the profile as it is.

The input can be a point array or a packet with a profile key. Points can be lists or tables with x, y and z keys. The output is a point array with 3 values per point. An empty input gives an empty output.

</details>

## Example Connections

<Tabs>
<TabItem value="place-a-profile-and-sweep-it" label="Place a profile and sweep it" default>

```
vArrayPointsOnRectangle.Output -> vArrayProfileTransform.Profile
vArrayProfileTransform.Output -> vArrayRenderSweepProfile.Profile
vArrayPathFrame.Output -> vArrayRenderSweepProfile.PathPacket
```

</TabItem>
<TabItem value="rotate-a-profile-and-draw-it" label="Rotate a profile and draw it">

```
vArrayPointsOnCircle.Output -> vArrayProfileTransform.Profile
vArrayProfileTransform.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayMirror">vArrayMirror</a>
  <a className="node-chip" href="./vArrayTranslate">vArrayTranslate</a>
  <a className="node-chip" href="../ShapeRender/vArrayRenderSweepProfile">vArrayRenderSweepProfile</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
