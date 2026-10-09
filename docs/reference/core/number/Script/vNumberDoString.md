---
sidebar_position: 1
title: vNumberDoString
description: "Return a Number object from running a string of Lua code"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberDoString

Return a Number object from running a string of Lua code

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberDoString.png" alt="vNumberDoString node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Reserved input, referenced by name from inside the Lua Script. |
| Number1 | Float | `—` | Reserved input, referenced by name from inside the Lua Script. |
| Script Header Wire | Text | `—` | Optional Text input wired in as a header/preamble string, available to the script. |
| > | Float | `—` | Run button — executes the Lua Script and returns its result as this node's output. |
| Script | Text | `—` | The Lua code to execute — its return value becomes the node's Number output. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberProcessOpen">vNumberProcessOpen</a>
  <a className="node-chip" href="./vNumberSlashCommand">vNumberSlashCommand</a>
</div>

{/*
Generated page — node: vNumberDoString (Core/Number/Script).
Source: fuse vNumberDoString.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
