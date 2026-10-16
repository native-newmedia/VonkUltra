---
sidebar_position: 67
title: vJSONWave
description: "Moves points along a direction by a time-based wave, with a delay per point."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONWave

Moves points along a direction by a time-based wave, with a delay per point.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONWave.png" alt="vJSONWave node" />
</div>

vJSONWave takes an array of XYZ points and adds (X, Y, Z Amount) * wave * Falloff to each point. Wave picks one of 13 wave shapes, and Point Delay staggers the wave along the array.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wave | FuID | `—` | Shape of the wave. One of 13 shapes. |
| Start At Frame | Integer | `0` | Frame at which the wave starts. The wave is 0 before it. Minimum 0, slider to 2500, default 0. |
| Period | Float | `5.0` | Length of one cycle in frames. Minimum 0, slider 0 to 50, default 5. |
| Strength | Float | `1.0` | Multiplies the wave. Slider to 10, default 1. |
| Delay | Float | `0.0` | Hidden control. Not read by the code. Default 0. |

<details>
<summary>+11 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset | Float | `—` | Hidden control. Added to the wave after Strength. Default 0. |
| Repeat Limit | Integer | `1.0` | Number of cycles when Limit is on. Whole numbers from 0, slider 0 to 10, default 1. Shown when Limit is on. |
| Limit | Float | `0.0` | Stops the wave after Repeat Limit cycles when on. Default off. |
| Reverse | Float | `0.0` | Negates the wave when on. Default off. |
| Falloff | Float | `0.0` | Multiplies the wave before it is applied. Slider 0 to 1, default 0. Not a distance falloff. |
| Point Delay | Float | `0.0` | Time shift per point number, in frames. Minimum 0, slider 0 to 1, default 0. |
| X Amount | Float | `0.0` | X part of the move per unit of wave. Range -10 to 10, default 0. |
| Y Amount | Float | `0.0` | Y part of the move per unit of wave. Range -10 to 10, default 0. |
| Z Amount | Float | `0.0` | Z part of the move per unit of wave. Range -10 to 10, default 0. |
| Show Input | Integer | `1.0` | Hidden control. Shows the input ports of Start At Frame, Period, Strength and Limit when on. Default on. |
| Input | DATATYPE | `—` | Points to move. |

</details>

<details>
<summary>Read the full description</summary>

The wave value is computed from the frame time minus Point Delay times the point number, so the wave travels along the array. It is 0 until the frame passes Start At Frame (default 0). The shape comes from Wave and runs mostly between 0 and 1. It is multiplied by Strength (default 1), negated by Reverse, and multiplied by Falloff (default 0). The point moves by that times X, Y and Z Amount.

Period (default 5) is the length of one cycle in frames. With Limit on, the wave stops after Repeat Limit cycles. The 13 shapes are Line, Saw, Tri, Square, Sine, Noise, Pulse, ExpDecay, AbsSine, Stair, Bounce, Cosine and Spike. With the default Falloff of 0 and Amounts of 0, nothing moves.

</details>

## Example Connections

<Tabs>
<TabItem value="wave-a-grid-and-draw" label="Wave a grid and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONWave.ArrayA
vJSONWave.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="wave-a-circle" label="Wave a circle">

```
vJSONPointsOnCircle.Output -> vJSONWave.ArrayA
vJSONWave.Output -> vJSONTranslate.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONRippleDisplacer">vJSONRippleDisplacer</a>
  <a className="node-chip" href="./vJSONSin">vJSONSin</a>
  <a className="node-chip" href="../Animate/vJSONStagger">vJSONStagger</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
