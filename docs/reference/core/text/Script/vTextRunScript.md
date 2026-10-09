---
sidebar_position: 5
title: vTextRunScript
description: "Runs an external Lua script The \"File\" text-field is used to specify an external .lua script file."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextRunScript

Runs an external Lua script The "File" text-field is used to specify an external .lua script file. This node is powered by the Lua "`dofile()`" function. Note: This node is effectively deprecated please use vTextDoString Instead.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextRunScript.png" alt="vTextRunScript node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| File | Text | `—` | Path to the external .lua script file to run via `dofile()`. |
| Show Input | Integer | `1.0` | Reveals the wire for the File connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDoAction">vTextDoAction</a>
  <a className="node-chip" href="./vTextDoString">vTextDoString</a>
  <a className="node-chip" href="./vTextExecute">vTextExecute</a>
  <a className="node-chip" href="./vTextProcessOpen">vTextProcessOpen</a>
</div>

{/*
Generated page — node: vTextRunScript (Core/Text/Script).
Source: fuse vTextRunScript.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
