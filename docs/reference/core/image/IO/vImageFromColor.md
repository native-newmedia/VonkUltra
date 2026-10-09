---
sidebar_position: 4
title: vImageFromColor
description: "Creates an image from a color This node can act as a fuse based alternative to a Background node if you need to create a fixed size image and fill the image canvas with a flat color."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageFromColor

Creates an image from a color This node can act as a fuse based alternative to a Background node if you need to create a fixed size image and fill the image canvas with a flat color.

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageFromColor.png" alt="vImageFromColor node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Red | Float | `1.0` | Red channel of the fill colour (0–1). |
| Green | Float | `1.0` | Green channel of the fill colour (0–1). |
| Blue | Float | `1.0` | Blue channel of the fill colour (0–1). |
| Alpha | Float | `1.0` | Alpha (opacity) of the fill colour (0–1). |
| Show Color Inputs | Integer | `0.0` | Reveals the wires for the Red/Green/Blue/Alpha connections in the Flow view. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Width | Integer | `1920` | Width of the generated image, in pixels. |
| Height | Integer | `1080` | Height of the generated image, in pixels. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageEXRFromFile">vImageEXRFromFile</a>
  <a className="node-chip" href="./vImageEXRToFile">vImageEXRToFile</a>
  <a className="node-chip" href="./vImageFromClipboard">vImageFromClipboard</a>
  <a className="node-chip" href="./vImageFromFile">vImageFromFile</a>
</div>

{/*
Generated page — node: vImageFromColor (Core/Image/IO).
Source: fuse vImageFromColor.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
