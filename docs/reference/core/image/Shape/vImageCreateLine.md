---
sidebar_position: 1
title: vImageCreateLine
description: "Creates a Line Shape object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageCreateLine

Creates a Line Shape object

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageCreateLine.png" alt="vImageCreateLine node" />
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
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Line Type | Dropdown | `Solid` | Dash pattern for the line: Solid, Dash, Dot, Dash Dot, or Dash Dot Dot. |
| Join Type | Dropdown | `Round` | Corner style where line segments meet: Bevel, Miter, or Round. |
| Start | Point | `—` | Start position of the line, in screen coordinates. |
| End | Point | `—` | End position of the line, in screen coordinates. |
| Input | Image | `—` | Background image the line is drawn onto. |

</details>



{/*
Generated page — node: vImageCreateLine (Core/Image/Shape).
Source: fuse vImageCreateLine.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
