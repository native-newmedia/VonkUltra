---
sidebar_position: 1
title: vColorJuggler
description: "A color node that works with a \"Palette Array\"."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vColorJuggler

A color node that works with a "Palette Array".

<div className="node-badge-row">
  <span className="node-badge">Core / Color</span>
  <span className="node-badge">Color</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/color/vColorJuggler.png" alt="vColorJuggler node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Palette Array | Text | `—` | JSON-encoded array of colors — the source palette. Hidden by default; enable Show Input to edit or wire it directly. |
| Palette Result | Text | `—` | JSON-encoded array holding the current (possibly reordered) palette — feeds back into itself so Mirror/Left/Right/Shuffle build on the previous result rather than the original. |
| Show Input | Integer | `1.0` | Reveals the Palette Array field for editing or wiring. |
| Mirror | Float | `—` | Reverses the order of the palette in Palette Result. |
| Left | Float | `—` | Rotates the palette in Palette Result one step to the left. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Right | Float | `—` | Rotates the palette in Palette Result one step to the right. |
| Shuffle | Float | `—` | Randomizes the order of the palette in Palette Result. |
| Reset | Float | `—` | Restores Palette Result back to the original Palette Array order, discarding any Mirror/Left/Right/Shuffle changes. |
| Mirror Callback | Integer | `0.0` | Internal flag set by the Mirror button above and cleared once processed — not meant to be toggled manually. |
| Left Callback | Integer | `0.0` | Internal flag set by the Left button above and cleared once processed — not meant to be toggled manually. |
| Right Callback | Integer | `0.0` | Internal flag set by the Right button above and cleared once processed — not meant to be toggled manually. |
| Shuffle Callback | Integer | `0.0` | Internal flag set by the Shuffle button above and cleared once processed — not meant to be toggled manually. |
| Reset Callback | Integer | `0.0` | Internal flag set by the Reset button above and cleared once processed — not meant to be toggled manually. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vColorPermutations">vColorPermutations</a>
  <a className="node-chip" href="./vColorSet">vColorSet</a>
</div>

{/*
Generated page — node: vColorJuggler (Core/Color/Utility).
Source: fuse vColorJuggler.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
