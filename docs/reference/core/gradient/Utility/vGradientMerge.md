---
sidebar_position: 2
title: vGradientMerge
description: "Merge several Gradients into a single output"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientMerge

Merge several Gradients into a single output

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientMerge.png" alt="vGradientMerge node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Internal control tracking how many Gradient inputs are currently connected. Not meant to be set manually — every connected input is merged, regardless of this value. |
| Gradient1 | Gradient | `—` | The first gradient to merge. Connecting it reveals Gradient2 for the next one, and so on. |
| Show Dump | Integer | `0.0` | Prints the merged gradient to the console each frame. |
| "Gradient" .. i | Gradient | `—` | Additional gradient to merge, added automatically as each prior input gets wired — appears in the UI as Gradient2, Gradient3, and so on. (The literal `"Gradient" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |
| "Gradient" .. (inp_nr + 1) | Gradient | `—` | The next available gradient slot, added automatically once the one before it is connected. Same display quirk as above. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientColorCount">vGradientColorCount</a>
  <a className="node-chip" href="./vGradientNormalizePosition">vGradientNormalizePosition</a>
  <a className="node-chip" href="./vGradientSlice">vGradientSlice</a>
  <a className="node-chip" href="./vGradientSort">vGradientSort</a>
</div>

{/*
Generated page — node: vGradientMerge (Core/Gradient/Utility).
Source: fuse vGradientMerge.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
