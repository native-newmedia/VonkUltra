---
sidebar_position: 10
title: vNumberCompReqTime
description: "Returns the comp's request time This is the currently requested frame that is being processed at render time."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberCompReqTime

Returns the comp's request time This is the currently requested frame that is being processed at render time. It supports temporal effects like the vTextAccumulator node that iterates over a frame duration.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberCompReqTime.png" alt="vNumberCompReqTime node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Sequence Offset | Integer | `0` | Shifts the returned request-time frame number forwards or backwards. |
| Show Input | Integer | `1.0` | Reveals the wire for the Sequence Offset connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberCompCurrentTime">vNumberCompCurrentTime</a>
  <a className="node-chip" href="./vNumberCompFPS">vNumberCompFPS</a>
  <a className="node-chip" href="./vNumberCompFrameFormat">vNumberCompFrameFormat</a>
  <a className="node-chip" href="./vNumberCompGlobalEnd">vNumberCompGlobalEnd</a>
</div>

{/*
Generated page — node: vNumberCompReqTime (Core/Number/Comp).
Source: fuse vNumberCompReqTime.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
