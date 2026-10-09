---
sidebar_position: 4
title: vScriptValToBinaryFile
description: "Writes a Fusion ScriptVal blob encoded object to a binary file The binary file data is Base64 encoded and placed in a Lua table structure."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValToBinaryFile

Writes a Fusion ScriptVal blob encoded object to a binary file The binary file data is Base64 encoded and placed in a Lua table structure. A sample output from this encoding process looks like: \{ Base64 = "SGVsbG8gV29ybGQh", Base64Size = 16, BinarySize = 12, Ext = ".txt", Filename = "Hello.txt" Source = "/Users/vfx/Desktop/Hello.txt", Type = "File", \}

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValToBinaryFile.png" alt="vScriptValToBinaryFile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ScriptVal | DATATYPE | `—` | Base64-encoded ScriptVal blob to decode and write out as a binary file. |
| File | Text | `—` | Destination path for the saved file. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromBinaryFile">vScriptValFromBinaryFile</a>
  <a className="node-chip" href="./vScriptValFromClipboard">vScriptValFromClipboard</a>
  <a className="node-chip" href="./vScriptValFromFile">vScriptValFromFile</a>
  <a className="node-chip" href="./vScriptValToClipboard">vScriptValToClipboard</a>
</div>

{/*
Generated page — node: vScriptValToBinaryFile (Core/ScriptVal/IO).
Source: fuse vScriptValToBinaryFile.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
