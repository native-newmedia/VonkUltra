---
sidebar_position: 27
title: vJSONMath
description: "Applies one of 31 math operations to every X, Y and Z value, with a number or a second array."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMath

Applies one of 31 math operations to every X, Y and Z value, with a number or a second array.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMath.png" alt="vJSONMath node" />
</div>

vJSONMath reads each element of Input A as X, Y and Z and combines it with a number or with the matching element of Input B. Operation chooses the formula, and the output has three values per element.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Hidden control. Range 1 to 64. Not read by the code. |
| Operation  | Dropdown | `Add` | One of 31 operations, default Add: Add, Subtract A-B, Multiply, Divide A/B, Min, Max, Average, Difference, Modulo A/B, Power A^B, Arc Tangent A/B, Pi, Sine, Cosine, Tangent, Arc Sine, Arc Cosine, Arc Tangent, Log, Log 10, Exponential, Degrees to Radians, Radians to Degrees, Absolute Value, Ceiling, Floor, Square Root, Reciprocal, Negate, Random, Random A to B and Matrix Multiply. |
| Input Number | Dropdown | `Use Number` | Use Number (default) uses the Number control as B. Use Array uses Input B and shows its port. |
| Number | Float | `1` | The B value in Use Number mode, used on all three axes. Slider -1 to 1, default 1. |
| Connected | Integer | `0.0` | Set to 1 automatically when Input B is connected, otherwise 0. Not meant to be edited. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input A | DATATYPE | `—` | Values to process. |
| Input B | DATATYPE | `—` | Second operand in Use Array mode, matched by index. For Matrix Multiply, the matrix text. |

</details>

<details>
<summary>Read the full description</summary>

Each element of Input A is read as X, Y and Z (a single number is used for all three) and the operation runs on each axis against B. B is the Number control (default 1) in Use Number mode, or the matching element of Input B in Use Array mode, with 0 for missing entries.

Operation offers 31 choices: arithmetic, min, max, modulo, power, trigonometry, logs, rounding, reciprocal and random values. Divide, Modulo, Log, Square Root, Reciprocal, Arc Sine and Arc Cosine return 0 where they are undefined. Matrix Multiply multiplies a translation made from each element by a matrix from Input B and outputs the resulting position.

Negate returns -A. Random returns A times a random value from 0 to 1, and Random A to B returns a random value between A and B.

</details>

## Example Connections

<Tabs>
<TabItem value="scale-displacement-amounts" label="Scale displacement amounts" default>

```
vJSONRandom.Output -> vJSONMath.ArrayA
vJSONMath.Output -> vJSONDisplaceValues.ArrayA
vJSONDisplaceValues.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
<TabItem value="add-two-arrays" label="Add two arrays">

```
vJSONPointsOnGrid.Output -> vJSONMath.ArrayA
vJSONRandom.Output -> vJSONMath.ArrayB
vJSONMath.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONMapRange">vJSONMapRange</a>
  <a className="node-chip" href="./vJSONSin">vJSONSin</a>
  <a className="node-chip" href="./vJSONClamp">vJSONClamp</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}
