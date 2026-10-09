---
sidebar_position: 1
title: vGradientAccumulator
description: "Temporally concatenate Gradients"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientAccumulator

Temporally concatenate Gradients

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientAccumulator.png" alt="vGradientAccumulator node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Gradient | Gradient | `—` | Gradient sampled once per frame across the Start/End range and concatenated into a single output. |
| Start Frame | Integer | `0` | First frame to sample. |
| End Frame | Integer | `0` | Last frame to sample. |
| Step | Float | `1` | Frame increment between samples — use a value above 1 to sample more sparsely. |
| Show Dump | Integer | `0.0` | Prints the accumulated gradient to the console each frame. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | Reveals the wire for the Gradient connection in the Flow view. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientTimeSpeed">vGradientTimeSpeed</a>
  <a className="node-chip" href="./vGradientTimeStretch">vGradientTimeStretch</a>
</div>

{/*
Generated page — node: vGradientAccumulator (Core/Gradient/Temporal).
Source: fuse vGradientAccumulator.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
