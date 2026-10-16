---
sidebar_position: 47
title: vJSONRandom
description: "Generate an array of random values between a low and a high limit, packed as X, X Y or X Y Z entries."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRandom

Generate an array of random values between a low and a high limit, packed as X, X Y or X Y Z entries.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRandom.png" alt="vJSONRandom node" />
</div>

vJSONRandom has no input and outputs an array of random entries. Array length sets the number of entries, Pack To sets how many values each entry holds, and the Low and High range sets the limits.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `2` | Number of entries in the output. Minimum 2, default 2. |
| Low | Float | `-1` | Lower end of the range the values are drawn from. Default -1. |
| High | Float | `1` | Upper end of the range the values are drawn from. Default 1. |
| Multiply | Float | `0` | Hidden control. It is read by the node but has no effect on the output. Default 0. |
| Seed | Integer | `0` | Seed of the random generator. Default 0. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Pack To: | Dropdown | `X Y Z` | Number of values in each entry, X, X Y or X Y Z. Default X Y Z. |

</details>

<details>
<summary>Read the full description</summary>

The node seeds Lua's random generator with Seed and writes Array length entries. Every value is drawn from a uniform distribution between Low and High. The same Seed gives the same output.

Pack To selects the entry size: X gives one value per entry, X Y gives two and X Y Z gives three. The same Low and High apply to every value in an entry. With the defaults (Array length 2, Low -1, High 1, X Y Z) the node outputs two entries of three values each, so it can be used directly as XYZ points.

Array length has a minimum of 2. Seed is a whole number from a slider with a displayed range of -100 to 100 and no limit in the code. Use vJSONMinMax if each value needs its own range.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-random-points" label="Draw random points" default>

```
vJSONRandom.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
vJSONRandom.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONMinMax">vJSONMinMax</a>
  <a className="node-chip" href="./vJSONNoise">vJSONNoise</a>
  <a className="node-chip" href="./vJSONCreateRange">vJSONCreateRange</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
