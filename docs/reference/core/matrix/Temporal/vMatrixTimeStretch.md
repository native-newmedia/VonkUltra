---
sidebar_position: 2
title: vMatrixTimeStretch
description: "Time based operation on a vMatrix"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixTimeStretch

Time based operation on a vMatrix

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixTimeStretch.png" alt="vMatrixTimeStretch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Matrix to sample at a specific time. |
| Time | Float | `0.0` | The frame number to read Input's value at, regardless of the comp's current playhead position. |
| Set To Current Time | Float | `—` | Sets Time to the comp's current playhead position — a quick way to snapshot "now". |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixTimeSpeed">vMatrixTimeSpeed</a>
</div>

{/*
Generated page — node: vMatrixTimeStretch (Core/Matrix/Temporal).
Source: fuse vMatrixTimeStretch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
