---
sidebar_position: 3
title: vColorSet
description: "This node was created by Chad Capeland."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vColorSet

This node was created by Chad Capeland. The "Palette Array" field allows you to use HTML hex style RGB color values to fill in the background of image elements with the format of "RRGGBB" color values. A hex number range includes the digits from 0-9 then it continues along to include the extra characters A-F as a representation of a single value. Palette Array Sample Colors: "FFFFFF" = White "000000" = Black "404040" = 25% Grey "808080" = 50% Grey "BFBFBF" = 75% Grey "FF0000" = Red "00FF00" = Green "0000FF" = Blue "00FFFF" = Cyan "FF00FF" = Magenta "FFFF00" = Yellow The "Preserve Alpha" checkbox is used to retain the alpha channel input data. The "Multiply by Alpha" checkbox is used to perform pre-multiplication math on the imagery. This control will make the transparent areas in the image, as defined by the source alpha channel data, turn black in the RGB channels. The "Affect Canvas" checkbox is used to extend the color fill operation beyond the current DoD (Domain of Definition) region in the viewer window. When this checkbox is enabled, the background canvas color is pre-defined, if you ever expand the image larger than its original dimensions using a Crop node.

<div className="node-badge-row">
  <span className="node-badge">Core / Color</span>
  <span className="node-badge">Color</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/color/vColorSet.png" alt="vColorSet node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Palette Array | Text | `—` | A single RRGGBB hex colour used to fill the background, e.g. `FF0000` for red — see the sample values above. Hidden by default; enable Show Input to edit. |
| Show Input | Integer | `1.0` | Reveals the Palette Array field for editing or wiring. |
| Preserve Alpha | Integer | `0.0` | Copies the source Input image's alpha channel onto the output, instead of using a solid alpha of 1. |
| Multiply by Alpha | Integer | `0.0` | Pre-multiplies the output by alpha, turning transparent areas black in the RGB channels. |
| Affect Canvas | Integer | `1.0` | Extends the fill beyond the current DoD by also setting the background canvas colour — useful when a later Crop node expands the image beyond its original size. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Source image. Its alpha channel is preserved when Preserve Alpha is on; otherwise only its dimensions/canvas are used. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vColorJuggler">vColorJuggler</a>
  <a className="node-chip" href="./vColorPermutations">vColorPermutations</a>
</div>

{/*
Generated page — node: vColorSet (Core/Color/Utility).
Source: fuse vColorSet.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
