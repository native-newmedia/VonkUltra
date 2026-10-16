---
sidebar_position: 52
title: vArrayTextFont
description: "Convert text into outline points of a built-in vector font, with size, spacing, rotation and offset controls."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTextFont

Convert text into outline points of a built-in vector font, with size, spacing, rotation and offset controls.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTextFont.png" alt="vArrayTextFont node" />
</div>

vArrayTextFont takes the text of its Styled Text control and outputs the outline points of each character, and a Groups output with the number of points in each outline. The outlines come from a vector font that is built into the Vonk Ultra modules.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Styled Text | Text | `—` | Text to convert. It is changed to upper case. |
| Size | Float | `1.0` | Scale of the text when Lock X/Y is on. Default 1. |
| Character Spacing | Float | `0.05` | Gap added after each character. Default 0.05. |
| Line Spacing | Float | `—` | Hidden control. Distance added for each space character, which works as word spacing. |
| Letter Case | Dropdown | `ORIGINAL` | Hidden control. It is not used, the text is always upper case. |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Justification | Dropdown | `Left` | Hidden control. It is not used in the calculation. |
| Horizontal Adjustment | Float | `0.0` | Value added to X of every point before rotation. Range -0.5 to 0.5. |
| Vertical Adjustment | Float | `0.0` | Value added to Y of every point before rotation. Range -0.5 to 0.5. |
| X Offset | Float | `—` | Offset in X, added after rotation and then scaled. |
| Y Offset | Float | `—` | Offset in Y, added after rotation and then scaled. |
| Z Offset | Float | `0.0` | Offset in Z, added after rotation and then scaled. |
| Rotation Order | Dropdown | ` XYZ ` | Hidden control. It is not used, the rotation is always applied in X, Y, Z order. |
| X Rotation | Float | `—` | Rotation around the X axis, in degrees. |
| Y Rotation | Float | `—` | Rotation around the Y axis, in degrees. |
| Z Rotation | Float | `—` | Rotation around the Z axis, in degrees. |
| Lock X/Y | Integer | `1` | When on, the scale comes from Size. When off, X Scale and Y Scale are used. Default on. |
| X Scale | Float | `1.0` | Hidden while Lock X/Y is on. Scale in X, also used for Z, when Lock X/Y is off. Default 1. |
| Y Scale | Float | `1.0` | Hidden while Lock X/Y is on. Scale in Y when Lock X/Y is off. Default 1. |
| X Shear | Float | `0.0` | Hidden control. It is not used in the calculation. Default 0. |
| Y Shear | Float | `0.0` | Hidden control. It is not used in the calculation. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

The text is converted to upper case, then each character is looked up in the built-in font. A space adds the Line Spacing value to the horizontal position, which makes that control the word spacing. Characters that are not in the font are skipped. Each other character is written as its outlines. Every outline is a list of points, and the next character starts at the right edge of the first outline plus Character Spacing.

The outline points are first mirrored in X and Y, which turns each glyph by 180 degrees. Then Horizontal Adjustment and Vertical Adjustment are added, the points are rotated by X, Y and Z Rotation with the rotation matrices multiplied in X, Y, Z order, and X, Y and Z Offset are added. The values are then multiplied by the scale. The scale is Size when Lock X/Y is on. When it is off, X Scale and Y Scale are used instead and Size has no effect.

The Output socket holds all outline points in order. The Groups socket holds one number for each outline, the count of its points, so a node that takes a Groups input can draw each outline as a separate closed shape. Rotation Order, Letter Case, Justification and the two Shear controls are hidden and are not used in the calculation.

The font is limited to the characters that its glyph tables contain, and the case is always upper case. The Z coordinate comes from the rotation, so without rotation it is 0.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-text-outlines-with-their-groups" label="Draw the text outlines with their groups" default>

```
vArrayTextFont.Output -> vArrayCameraProjection.ArrayA
vArrayTextFont.ScriptVal_Groups -> vArrayCameraProjection.ArrayGroups
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
vArrayCameraProjection.Groups -> vArrayShapeRender.ArrayGroups
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-text-before-drawing" label="Offset the text before drawing">

```
vArrayTextFont.Output -> vArrayTranslate.ArrayA
vArrayTranslate.Output -> vArrayCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCreateFont">vArrayCreateFont</a>
  <a className="node-chip" href="./vArrayGenerateText">vArrayGenerateText</a>
  <a className="node-chip" href="./vArrayFromPolyline">vArrayFromPolyline</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
