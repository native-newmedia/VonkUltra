---
sidebar_position: 52
title: vJSONTextFont
description: "Creates Text Font"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTextFont

Creates Text Font

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTextFont.png" alt="vJSONTextFont node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Styled Text | Text | `—` | Text to convert. |
| Size | Float | `1.0` | Text size. |
| Character Spacing | Float | `0.05` | Extra spacing between characters. |
| Line Spacing | Float | `—` | — |
| Letter Case | Dropdown | `ORIGINAL` | — |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Justification | Dropdown | `Left` | — |
| Horizontal Adjustment | Float | `0.0` | Horizontal offset. |
| Vertical Adjustment | Float | `0.0` | Vertical offset. |
| X Offset | Float | `—` | Moves the result along X. |
| Y Offset | Float | `—` | Moves the result along Y. |
| Z Offset | Float | `0.0` | Moves the result along Z. |
| Rotation Order | Dropdown | ` XYZ ` | — |
| X Rotation | Float | `—` | Rotation around X in degrees. |
| Y Rotation | Float | `—` | Rotation around Y in degrees. |
| Z Rotation | Float | `—` | Rotation around Z in degrees. |
| Lock X/Y | Integer | `1` | — |
| X Scale | Float | `1.0` | — |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. |
| X Shear | Float | `0.0` | — |
| Y Shear | Float | `0.0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONTextFont.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONTextFont (JSON/Create).
Source: fuse vJSONTextFont.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
