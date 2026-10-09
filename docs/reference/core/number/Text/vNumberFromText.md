---
sidebar_position: 2
title: vNumberFromText
description: "Returns a number from a Fusion Text object This node converts an ASCII text based string that holds numerical content like \"5\" into an actual number data type…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberFromText

Returns a number from a Fusion Text object This node converts an ASCII text based string that holds numerical content like "5" into an actual number data type that can have math operations performed on the value. This is a useful step if you need to connect a numerical value to an Inspector based attribute on another node.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberFromText.png" alt="vNumberFromText node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The text string to convert — its content must be numeric (e.g. "5"). |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberFromCSV">vNumberFromCSV</a>
  <a className="node-chip" href="./vNumberXYZFromCSV">vNumberXYZFromCSV</a>
</div>

{/*
Generated page — node: vNumberFromText (Core/Number/Text).
Source: fuse vNumberFromText.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
