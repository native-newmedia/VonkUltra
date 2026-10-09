---
sidebar_position: 14
title: vScriptValTrimElement
description: "Extract a range of elements from a ScriptVal array as a table This node is useful for creating animated vector graphics that are revealed over time when your…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTrimElement

Extract a range of elements from a ScriptVal array as a table This node is useful for creating animated vector graphics that are revealed over time when your 2D point data is encoded into a ScriptVal Lua table structure that represents a polyline shape.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValTrimElement.png" alt="vScriptValTrimElement node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | DATATYPE | `—` | ScriptVal array to trim, e.g. a polyline's point list. |
| From | Integer | `1` | 1-based index of the first element to keep. Animate together with To to reveal a shape over time. |
| To | Integer | `1` | 1-based index of the last element to keep. |
| Step | Integer | `1` | Interval between kept elements — 1 keeps every element, 2 keeps every other, and so on. |
| Show Input | Integer | `1.0` | Reveals the wire for the ScriptVal connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValGetElementToNumber">vScriptValGetElementToNumber</a>
  <a className="node-chip" href="./vScriptValGetElementToTable">vScriptValGetElementToTable</a>
  <a className="node-chip" href="./vScriptValGetElementToText">vScriptValGetElementToText</a>
  <a className="node-chip" href="./vScriptValGetElementXYZToNumber">vScriptValGetElementXYZToNumber</a>
</div>

{/*
Generated page — node: vScriptValTrimElement (Core/ScriptVal/Key Value).
Source: fuse vScriptValTrimElement.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
