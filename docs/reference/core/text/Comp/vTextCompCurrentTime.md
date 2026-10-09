---
sidebar_position: 2
title: vTextCompCurrentTime
description: "Returns the comp's current time value The current time represents the point where the timeline playhead is positioned regardless of any temporal effects that might be happening."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextCompCurrentTime

Returns the comp's current time value The current time represents the point where the timeline playhead is positioned regardless of any temporal effects that might be happening.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextCompCurrentTime.png" alt="vTextCompCurrentTime node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sequence Offset | Integer | `0` | Shifts the returned current-time frame number forwards or backwards. |
| Padding | Integer | `1` | Minimum digit count — zero-pads the frame number string (e.g. 3 → "007"). |
| Show Input | Integer | `1.0` | Reveals the wire for the Sequence Offset connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCompAppUUID">vTextCompAppUUID</a>
  <a className="node-chip" href="./vTextCompFilename">vTextCompFilename</a>
  <a className="node-chip" href="./vTextCompName">vTextCompName</a>
  <a className="node-chip" href="./vTextCompReqTime">vTextCompReqTime</a>
</div>

{/*
Generated page — node: vTextCompCurrentTime (Core/Text/Comp).
Source: fuse vTextCompCurrentTime.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
