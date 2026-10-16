---
sidebar_position: 2
title: vJSONBuffer
description: "Generate an array of evenly spaced values between a Low and a High limit."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONBuffer

Generate an array of evenly spaced values between a Low and a High limit.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONBuffer.png" alt="vJSONBuffer node" />
</div>

vJSONBuffer has no input and outputs Array Length points whose X values run linearly from Low to High. Offset Range shifts both limits.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array Length (min 2) | Integer | `2` | Number of points to generate. Minimum 2, default 2. Has a socket. |
| Low | Float | `-1` | Lower limit of the range. Default -1. |
| High | Float | `1` | Upper limit of the range. Default 1. |
| Offset Range | Float | `0.0` | Value added to both limits. Default 0. Has a socket. |
| Show Input | Integer | `0.0` | Shows or hides the Array Length and Offset Range sockets on the node. |

<details>
<summary>Read the full description</summary>

The node computes min = Low + Offset Range and max = High + Offset Range. It then outputs Array Length points, evenly spaced from min to max. Each point is (value, 0, 0), so the values are in X and Y and Z are 0.

The defaults (length 2, low -1, high 1, offset 0) output two points at X = -1 and X = 1. Raise Array Length for more points between the same limits. Array Length has a minimum of 2.

Array Length and Offset Range can also be driven through sockets. The Show Input checkbox toggles whether those two sockets are visible on the node.

The node keeps no state between frames. Its output depends only on the current control values, so animating Offset Range moves the whole range over time.

</details>

## Example Connections

<Tabs>
<TabItem value="spread-points-along-x-and-draw" label="Spread points along X and draw" default>

```
vJSONBuffer.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="use-the-range-as-a-base-for-modifiers" label="Use the range as a base for modifiers">

```
vJSONBuffer.Output -> vJSONMath.ArrayA
vJSONMath.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONCreateRange">vJSONCreateRange</a>
  <a className="node-chip" href="./vJSONPointsOnGrid">vJSONPointsOnGrid</a>
  <a className="node-chip" href="../Modify/vJSONTranslate">vJSONTranslate</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
