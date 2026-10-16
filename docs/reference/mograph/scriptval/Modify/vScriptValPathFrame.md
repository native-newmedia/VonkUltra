---
sidebar_position: 34
title: vScriptValPathFrame
description: "Builds a tangent, normal and binormal frame at every point of a path."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPathFrame

Builds a tangent, normal and binormal frame at every point of a path.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPathFrame.png" alt="vScriptValPathFrame node" />
</div>

vScriptValPathFrame takes a path and outputs a packet with the path and three vectors for each point. Up Mode picks the reference direction that keeps the frames from turning around the path.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Up Mode | Dropdown | `World Y` | World Y (default), World Z or Custom. The reference direction for the normal. |
| Custom Up X | Float | `0` | X of the custom up vector. Default 0. Shown for Custom. |
| Custom Up Y | Float | `1` | Y of the custom up vector. Default 1. Shown for Custom. |
| Custom Up Z | Float | `0` | Z of the custom up vector. Default 0. Shown for Custom. |
| Flip Tangent | Integer | `0` | Reverses the tangent vectors when on. Default off. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Closed Path | Integer | `0` | Treats the path as a closed loop when on. Default off. A closed flag in the input packet also closes it. |
| Path/Packet | DATATYPE | `—` | A point array, or a packet with a path. |

</details>

<details>
<summary>Read the full description</summary>

The tangent at each point is the direction from the previous to the next point, so the end points use their one neighbor. With Closed Path on, the path wraps around. The normal comes from the cross product of the up vector and the tangent, the binormal from the tangent and the normal, and the normal is then recomputed from the binormal and the tangent.

Up Mode is World Y (default), World Z or Custom with Custom Up X, Y and Z (default 0, 1, 0, shown for Custom). A zero up vector becomes 0, 1, 0. Flip Tangent reverses the tangent vectors. The output packet holds the path, tangent, normal, binormal and the closed flag, for nodes such as vScriptValPathTwist.

The input is a point array or a packet with a path.

</details>

## Example Connections

<Tabs>
<TabItem value="frames-for-a-path-then-twist" label="Frames for a path, then twist" default>

```
vScriptValPointsOnArc.Output -> vScriptValPathFrame.PathPacket
vScriptValPathFrame.Output -> vScriptValPathTwist.PathFramePacket
vScriptValPathTwist.Output -> vScriptValRenderSweepProfile.PathPacket
```

</TabItem>
<TabItem value="frames-to-a-sweep" label="Frames to a sweep">

```
vScriptValPointsOnCircle.Output -> vScriptValPathFrame.PathPacket
vScriptValPathFrame.Output -> vScriptValRenderSweepProfile.PathPacket
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPathTwist">vScriptValPathTwist</a>
  <a className="node-chip" href="./vScriptValPathWidthMap">vScriptValPathWidthMap</a>
  <a className="node-chip" href="./vScriptValTangentVector">vScriptValTangentVector</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
