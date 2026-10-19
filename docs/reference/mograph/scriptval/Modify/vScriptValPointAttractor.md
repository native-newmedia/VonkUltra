---
sidebar_position: 38
title: vScriptValPointAttractor
description: "Pulls points toward, or pushes them away from, an attractor position within a radius."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointAttractor

Pulls points toward, or pushes them away from, an attractor position within a radius.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointAttractor.png" alt="vScriptValPointAttractor node" />
</div>

vScriptValPointAttractor takes an array of points and moves those inside Radius of the attractor toward it, or away from it with a negative Strength. The attractor is set by Attractor Position and Attractor Z.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Strength (+attract/-repel) | Float | `0.001` | Force at the attractor. Positive pulls, negative pushes. Slider -0.01 to 0.01, default 0.001. |
| Radius | Float | `1.0` | Distance within which points are affected. Minimum 0.000001, slider 0.001 to 5, default 1. |
| Falloff Power | Float | `1.0` | Exponent of the falloff. Minimum 0.01, slider 0.01 to 5, default 1. |
| Spring Return | Float | `0.1` | Hidden control. Spring Return. Has no effect, since points start at rest at their input position. Default 0.1. |
| Spring Bounce | Float | `0.01` | Hidden control. Spring Bounce. Has no effect for the same reason. Default 0.01. |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Damping | Float | `0.98` | Multiplies the speed after the push. Slider 0 to 1, default 0.98. |
| Time Step | Float | `10.0` | Scales the push and the move. Slider 0.01 to 100, default 10. |
| Center | Point | `—` | Hidden control. Not read by the code. |
| Z Offset | Float | `0` | Hidden control. Not read by the code. |
| Attractor Position | Point | `—` | Attractor position in X and Y, as a point in the viewer. Default 0.5, 0.5, which is 0, 0 in the node. |
| Attractor Z | Float | `0.5` | Attractor position on Z, used with Use 3D Points. Slider -1 to 1, default 0.5. |
| Axis | Point | `—` | Hidden control. Not read by the code. |
| Relative Flare Offset | Float | `1.5` | Hidden control. Relative Flare Offset. Not read by the code. Default 1.5. |
| Multiplier | Float | `1` | Divides the attractor X and Y. Minimum 0.000001, slider 0 to 2, default 1. |
| Use 3D Points | Float | `1` | Uses and outputs Z when on (default). Off gives 2 values per point. |
| Input | ScriptVal | `—` | Data to process. |

</details>

<details>
<summary>Read the full description</summary>

For each point closer to the attractor than Radius, the node adds a push of Strength * (1 - (distance / Radius) ^ Falloff Power) along the line to the attractor, scaled by Time Step, multiplies it by Damping, and moves the point by that times Time Step again. Points outside Radius do not move. The move does not depend on the frame.

The attractor X and Y come from Attractor Position, centered on 0 and divided by Multiplier. Attractor Z is used when Use 3D Points is on (default), which also keeps the Z of the output. Defaults are Strength 0.001, Radius 1, Falloff Power 1, Damping 0.98 and Time Step 10. Spring Return and Spring Bounce are hidden and have no effect.

</details>

## Example Connections

<Tabs>
<TabItem value="pull-a-grid-toward-a-point-and-draw" label="Pull a grid toward a point and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValPointAttractor.ArrayA
vScriptValPointAttractor.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="repel-scattered-points" label="Repel scattered points">

```
vScriptValRandom.Output -> vScriptValPointAttractor.ArrayA
vScriptValPointAttractor.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValPointAttractorSpring">vScriptValPointAttractorSpring</a>
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
  <a className="node-chip" href="./vScriptValAttractToMesh">vScriptValAttractToMesh</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
