---
sidebar_position: 17
title: vArrayRenderTextPath
description: "Using Text and Strings on Array based Lua table of XY points path"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderTextPath

Using Text and Strings on Array based Lua table of XY points path

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderTextPath.png" alt="vArrayRenderTextPath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Offset Text | Integer | `0` | Moves the text along the path. |
| Offset Text Y Pos | Float | `0` | Moves the text across the path. |
| Path Width | Float | `0.001` | Width of the path line. |
| Show Path | Integer | `1` | Draws the path. |
| Text Mode | Dropdown | `Generate` | Input text or Generate random text. |

<details>
<summary>+28 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Generate Random →  | Dropdown | `Bool` | Random text generator. Shown when Text Mode is Generate. |
| Array length | Integer | `1` | Number of generated items. Shown when Text Mode is Generate. |
| Seed | Float | `0` | Random seed. Shown when Text Mode is Generate. |
| Styled Text | Text | `—` | Text to place on the path. Shown when Text Mode is Input. |
| Font | Text | `—` | Font family. |
| Style | Text | `—` | Font style. |
| Size | Float | `0.03` | Text size. |
| Character Spacing | Float | `0.02` | Extra spacing between characters. |
| Letter Case | Dropdown | `NONE` | NONE, UPPER, or LOWER. |
| Justification | Dropdown | `Center` | Left, Center, or Right. |
| Horizontal Adjustment | Float | `0.0` | — |
| Vertical Adjustment | Float | `0.0` | — |
| Show Box Background | Integer | `0.0` | Draws a box behind each text item. |
| Box Padding | Float | `0.5` | Space between text and box. Shown with Show Box Background. |
| Box Vertical Adjustment | Float | `0.0` | Vertical box offset. Shown with Show Box Background. |
| Box Round Corners | Float | `0.01` | Corner radius of the box. Shown with Show Box Background. |
| Red | Float | `1.0` | Color for the text. |
| Green | Float | `1.0` | Color for the text. |
| Blue | Float | `0.0` | Color for the text. |
| Alpha | Float | `1.0` | Color for the text. |
| Red | Float | `0` | Color for the text. |
| Green | Float | `0` | Color for the text. |
| Blue | Float | `0.3` | Color for the text. |
| Alpha | Float | `1.0` | Color for the text. |
| Position | Point | `—` | — |
| Input | Image | `—` | Image that the result is drawn onto. |
| Input Text | Text | `—` | — |
| Path | Text | `—` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayCircularPoints.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayConvert2D_3D.ArrayA
    vArrayConvert2D_3D.Output -> vArrayRenderTextPath.ArrayPath
    Background.Output -> vArrayRenderTextPath.Input
    vTextCreate.Output -> vArrayRenderTextPath.inputtext
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../Modify/vArrayConvert2D_3D">vArrayConvert2D_3D</a>
</div>

{/*
Generated page — node: vArrayRenderTextPath (Array/ShapeRender).
Source: fuse vArrayRenderTextPath.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
