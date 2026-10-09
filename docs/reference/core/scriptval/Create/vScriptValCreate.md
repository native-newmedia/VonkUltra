---
sidebar_position: 1
title: vScriptValCreate
description: "Create a Fusion ScriptVal object The ScriptVal datatype in Fusion is used to pass Lua tables that hold arbitrary data between nodes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCreate

Create a Fusion ScriptVal object The ScriptVal datatype in Fusion is used to pass Lua tables that hold arbitrary data between nodes. This makes it possible to create custom c-code struct like records that travel through the node graph in a seamless fashion. An example of Lua table formatted information is: \{ num = 3.14, foo = "Hello", snafu = \{ tarfu = "Fuse", \}, bar = "World", \}

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValCreate.png" alt="vScriptValCreate node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Lua Table Text | Text | `—` | Lua table literal defining the ScriptVal's contents, e.g. `{ num = 3.14, foo = "Hello", bar = { tarfu = "Fuse" } }`. |
| Display Lines | Integer | `25` | Number of visible lines in the text editor before scrolling. |
| Wrap Lines | Integer | `1.0` | Wraps long lines in the text editor instead of scrolling horizontally. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromApp">vScriptValFromApp</a>
  <a className="node-chip" href="./vScriptValFromCSV">vScriptValFromCSV</a>
  <a className="node-chip" href="./vScriptValFromDate">vScriptValFromDate</a>
  <a className="node-chip" href="./vScriptValFromListFiles">vScriptValFromListFiles</a>
</div>

{/*
Generated page — node: vScriptValCreate (Core/ScriptVal/Create).
Source: fuse vScriptValCreate.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
