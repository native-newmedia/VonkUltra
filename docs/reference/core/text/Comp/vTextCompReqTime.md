---
sidebar_position: 5
title: vTextCompReqTime
description: "Returns the comp's request time This is the currently requested frame that is being processed at render time."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextCompReqTime

Returns the comp's request time This is the currently requested frame that is being processed at render time. It supports temporal effects like the vTextAccumulate node that iterates over a frame duration.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextCompReqTime.png" alt="vTextCompReqTime node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sequence Offset | Integer | `0` | Shifts the returned request-time frame number forwards or backwards. |
| Padding | Integer | `1` | Minimum digit count — zero-pads the frame number string (e.g. 3 → "007"). |
| Show Input | Integer | `1.0` | Reveals the wire for the Sequence Offset connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCompAppUUID">vTextCompAppUUID</a>
  <a className="node-chip" href="./vTextCompCurrentTime">vTextCompCurrentTime</a>
  <a className="node-chip" href="./vTextCompFilename">vTextCompFilename</a>
  <a className="node-chip" href="./vTextCompName">vTextCompName</a>
</div>

{/*
Generated page — node: vTextCompReqTime (Core/Text/Comp).
Source: fuse vTextCompReqTime.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
