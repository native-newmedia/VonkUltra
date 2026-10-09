---
sidebar_position: 1
title: vScriptValCreatePolyline
description: "Create a polygon line shape from a ScriptVal based Lua table of XY point pairs An example of 2D point like elements in a Lua table would look like this: { {…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCreatePolyline

Create a polygon line shape from a ScriptVal based Lua table of XY point pairs An example of 2D point like elements in a Lua table would look like this: \{ \{ 0.382075787528567, 0.534720150858805 \}, \{ 0.436349336750095, 0.490753326992875 \}, \{ 0.486955559603984, 0.440547877640415 \}, \{ 0.531495059415565, 0.386469304121596 \}, \{ 0.568050230127849, 0.331244047492371 \}, \{ 0.595285357663032, 0.277804252649087 \}, \{ 0.612508622697929, 0.229116724236359 \}, \{ 0.619692622456641, 0.188006456120492 \} \}

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValCreatePolyline.png" alt="vScriptValCreatePolyline node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Level | Float | `1` | Overall brightness/opacity multiplier for the line. |
| Filter | Dropdown | `Gaussian` | Anti-aliasing filter used to soften the line's edges: Box, Bartlett, Multi-box, or Gaussian. |
| Soft Edge | Float | `0` | Additional edge softness, blended on top of the Filter setting. |
| Width | Float | `0.01` | Line thickness, as a fraction of frame size. |
| Border Width | Float | `0.0` | Width of an additional outline drawn around the line. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Line Type | Dropdown | `Solid` | Dash pattern for the line: Solid, Dash, Dot, Dash Dot, or Dash Dot Dot. |
| Join Type | Dropdown | `Round` | Corner style where line segments meet: Bevel, Miter, or Round. |
| Close Shape | Integer | `0` | Connects the last point back to the first, closing the polyline into a loop. |
| Show Dump | Integer | `0.0` | Prints the ScriptVal point table to the console each frame. |
| Input | Image | `—` | Background image the line is drawn onto. |
| ScriptVal | ScriptVal | `—` | Lua table of XY point pairs defining the polyline, e.g. `{ {0.38, 0.53}, {0.44, 0.49}, ... }`. |

</details>



{/*
Generated page — node: vScriptValCreatePolyline (Core/ScriptVal/Shape).
Source: fuse vScriptValCreatePolyline.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
