---
sidebar_position: 34
title: vJSONMinMax
description: "Generate an array of random values where each value in an entry has its own minimum and maximum."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMinMax

Generate an array of random values where each value in an entry has its own minimum and maximum.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMinMax.png" alt="vJSONMinMax node" />
</div>

vJSONMinMax has no input and outputs an array of random entries. Array length sets the number of entries, Pack To sets whether each entry holds X, X Y or X Y Z, and each value has its own range.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Array length | Integer | `1` | Number of entries in the output. Minimum 0, default 1. |
| Pack To: | Dropdown | `XY` | Options: X, XY, XYZ. |
| Min1 | Float | `-1` | Lower limit of the first value in each entry. Default -1. |
| Max1 | Float | `1` | Upper limit of the first value in each entry. Default 1. |
| Min2 | Float | `-1` | Lower limit of the second value in each entry. Default -1. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max2 | Float | `1` | Upper limit of the second value in each entry. Default 1. |
| Min3 | Float | `-1` | Lower limit of the third value in each entry. Default -1. |
| Max3 | Float | `1` | Upper limit of the third value in each entry. Default 1. |
| Seed | Integer | `0` | Seed of the random generator. Default 0. |
| Show Input | Integer | `0.0` | Shows or hides a connection point on the Array length control. Default off. |

</details>

<details>
<summary>Read the full description</summary>

The node seeds Lua's random generator with Seed and writes Array length entries. The first value of each entry is drawn uniformly between Min 1 and Max 1, the second between Min 2 and Max 2 and the third between Min 3 and Max 3. The same Seed gives the same output.

Pack To selects how many of the three ranges are used: X uses range 1, XY uses ranges 1 and 2, and XYZ uses all three. With the defaults (Array length 1, XY, every range -1 to 1) the node outputs one entry with two values. Ranges that are not used are ignored.

Array length can be 0, which gives an empty array. Show Input adds a connection point to the Array length control so that the length can be driven from another node.

Use vJSONRandom when one range is enough for every value.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-random-points" label="Draw random points" default>

```
vJSONMinMax.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
vJSONMinMax.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONRandom">vJSONRandom</a>
  <a className="node-chip" href="./vJSONNoise">vJSONNoise</a>
  <a className="node-chip" href="./vJSONCreateRange">vJSONCreateRange</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
