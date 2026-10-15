---
sidebar_position: 8
title: vScriptValCameraProjection
description: "Transforms ScriptVals using a perspective projection matrix"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCameraProjection

Transforms ScriptVals using a perspective projection matrix

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCameraProjection.png" alt="vScriptValCameraProjection node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `—` | Moves the points along X. |
| Y Offset | Float | `—` | Moves the points along Y. |
| Z Offset | Float | `1.0` | Moves the points along Z. |
| Rotation Order | Dropdown | ` XYZ ` | — |
| X Rotation | Float | `—` | Rotation around X in degrees. |

<details>
<summary>+17 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Rotation | Float | `—` | Rotation around Y in degrees. |
| Z Rotation | Float | `—` | Rotation around Z in degrees. |
| Rotate Around Center | Integer | `1` | — |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale along X. |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. Shown when the related option is enabled. |
| Field of view | Float | `90.0` | Perspective field of view in degrees. |
| Screen aspect ratio | Float | `16 / 9` | — |
| Near clipping plane | Float | `0.1` | — |
| Far clipping plane | Float | `1000` | — |
| X Shear | Float | `0.0` | — |
| Y Shear | Float | `0.0` | — |
| Input | ScriptVal | `—` | Data to process. |
| Edge | ScriptVal | `—` | — |
| Groups | ScriptVal | `—` | — |
| Auto Create Edges | Integer | `1` | — |
| Close Edge Loop | Integer | `0` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValFromXYZ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValFromXYZ">vScriptValFromXYZ</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValCameraProjection (ScriptVal/Modify).
Source: fuse vScriptValCameraProjection.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
