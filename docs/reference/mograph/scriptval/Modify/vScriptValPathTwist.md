---
sidebar_position: 35
title: vScriptValPathTwist
description: "Rotates the normal and binormal of path frames around the tangent by an angle per point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPathTwist

Rotates the normal and binormal of path frames around the tangent by an angle per point.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPathTwist.png" alt="vScriptValPathTwist node" />
</div>

vScriptValPathTwist takes a path packet with frames, for example from vScriptValPathFrame, and rolls the normal and binormal around the tangent at every point. Start Twist and End Twist set the angle in degrees.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Twist Mode | Dropdown | `Linear Start-End` | Linear Start-End (default) or Constant. Constant uses End Twist on every point. |
| Start Twist (deg) | Float | `0` | Angle at the first point in degrees, in Linear Start-End. Default 0. |
| End Twist (deg) | Float | `180` | Angle at the last point in degrees, or on every point in Constant. Default 180. |
| Closed Path | Integer | `0` | Treats the path as a closed loop when frames have to be built. Default off. |
| Path/Frame Packet | DATATYPE | `—` | A packet with a path and frames, for example from vScriptValPathFrame. |

<details>
<summary>Read the full description</summary>

At point i of n, Linear Start-End uses the angle Start Twist + (End Twist - Start Twist) * (i - 1) / (n - 1). Constant uses End Twist for every point. The normal and binormal of that point are rotated by the angle around its tangent.

The defaults are 0 and 180 degrees, so the frames make half a turn along the path. The output packet holds the path, the tangent, the twisted normal and binormal, the angle for each point and the closed flag. The path points are not changed.

If the input has no frames, they are built from the path with the up vector 0, 1, 0. Closed Path applies then.

</details>

## Example Connections

<Tabs>
<TabItem value="twist-the-frames-of-an-arc-and-sweep-a-profile" label="Twist the frames of an arc and sweep a profile" default>

```
vScriptValPointsOnArc.Output -> vScriptValPathFrame.PathPacket
vScriptValPathFrame.Output -> vScriptValPathTwist.PathFramePacket
vScriptValPathTwist.Output -> vScriptValRenderSweepProfile.PathPacket
```

</TabItem>
<TabItem value="twist-a-path-without-a-frame-node" label="Twist a path without a frame node">

```
vScriptValPointsOnCircle.Output -> vScriptValPathTwist.PathFramePacket
vScriptValPathTwist.Output -> vScriptValRenderSweepProfile.PathPacket
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPathFrame">vScriptValPathFrame</a>
  <a className="node-chip" href="./vScriptValPathWidthMap">vScriptValPathWidthMap</a>
  <a className="node-chip" href="../ShapeRender/vScriptValRenderSweepProfile">vScriptValRenderSweepProfile</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
