---
sidebar_position: 5
title: vScriptValGetToNumber
description: "Gets the value of a ScriptVal key as a Fusion Number The output from the vScriptValGetToNumber node is a Number based data type that can be used to drive…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGetToNumber

Gets the value of a ScriptVal key as a Fusion Number The output from the vScriptValGetToNumber node is a Number based data type that can be used to drive number based controls in the Inspector view like transforms, rotations, scale, angle, or other parameters. You can also use the Number based output from the vScriptValGetToNumber node to carry out further node-based math operations with nodes like vNumberAdd, vNumberSubtract, vNumberMultiply, vNumberDivide, etc..

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValGetToNumber.png" alt="vScriptValGetToNumber node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | ScriptVal | `—` | ScriptVal object to query. |
| Key | Text | `—` | The key to look up, returned as a Number for driving Inspector controls or downstream math nodes. |
| Show Input | Integer | `0.0` | Reveals the wire for the ScriptVal connection in the Flow view. |
| Get Key | Float | `—` | Renames this node to `scriptval_<Key>`, making it easy to identify which key it reads at a glance. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValGetElementToNumber">vScriptValGetElementToNumber</a>
  <a className="node-chip" href="./vScriptValGetElementToTable">vScriptValGetElementToTable</a>
  <a className="node-chip" href="./vScriptValGetElementToText">vScriptValGetElementToText</a>
  <a className="node-chip" href="./vScriptValGetElementXYZToNumber">vScriptValGetElementXYZToNumber</a>
</div>

{/*
Generated page — node: vScriptValGetToNumber (Core/ScriptVal/Key Value).
Source: fuse vScriptValGetToNumber.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
