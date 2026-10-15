---
sidebar_position: 5
title: vArrayShapeText
description: "Example, using Text and Strings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayShapeText

Example, using Text and Strings

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayShapeText.png" alt="vArrayShapeText node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Generate Random →  | Dropdown | `Bool` | None, Pick from input Array, Pick from input Text, Bool, Character, Word, Letter, Vowel, Name, Male name, Female name, Hash, Integer, rgb, rgba, hsl, hsla, ip, ipv4, ipv6, Phone, Address, Street, String, Syllable, Shuffle, and the name variants. |
| Array length | Integer | `2` | Number of generated items. |
| Seed | Float | `0` | Random seed. |
| Font Select | Dropdown | `Use Font` | Use Font or Use Front Array (font array from the ScriptVal Font input). |
| Font | Text | `—` | Font family. Hidden when the font array is used. |

<details>
<summary>+16 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Style | Text | `—` | Font style. Hidden when the font array is used. |
| Font Select Probability | Float | `0` | — |
| Size | Float | `0.08` | Text size. |
| Character Spacing | Float | `0.0` | Extra spacing between characters. |
| Letter Case | Dropdown | `NONE` | NONE, UPPER, or LOWER. |
| Justification | Dropdown | `Center` | Left, Center, or Right. |
| Horizontal Adjustment | Float | `0.0` | Horizontal text offset. |
| Vertical Adjustment | Float | `0.0` | Vertical text offset. |
| Show Box Background | Integer | `0.0` | Draws a box behind each text item. |
| Box Padding | Float | `0.5` | Space between text and box. |
| Box Vertical Adjustment | Float | `0.0` | Vertical box offset. |
| Box Round Corners | Float | `0.01` | Corner radius of the box. |
| Pos Adjustment | Float | `0.0` | Position offset of the items. |
| ScriptVal Font | ScriptVal | `—` | — |
| ScriptVal Text | ScriptVal | `—` | — |
| Text | Text | `—` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayPointsOnCircle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
    vArrayShapeText.OutputValShape -> vArrayShapeRender.ArrayShape
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayPointsOnCircle">vArrayPointsOnCircle</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayShapeText (Array/Shapes).
Source: fuse vArrayShapeText.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
