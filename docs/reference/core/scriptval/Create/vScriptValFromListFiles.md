---
sidebar_position: 5
title: vScriptValFromListFiles
description: "Create a Fusion ScriptVal object from a bmd.readdir() listing of files"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromListFiles

Create a Fusion ScriptVal object from a bmd.readdir() listing of files

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFromListFiles.png" alt="vScriptValFromListFiles node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Folder path to scan. |
| Pattern | Text | `—` | Wildcard filter for filenames, e.g. `*.exr` or `*.png`. Leave empty to match everything. |
| Mode | Dropdown | `List Files` | Whether to list files or subdirectories: List Files or List Directories. |
| Skip Hidden Files | Integer | `1.0` | Excludes hidden files (`.DS_Store`, `Thumbs.db`, and UNIX dotfiles) from the output. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCreate">vScriptValCreate</a>
  <a className="node-chip" href="./vScriptValFromApp">vScriptValFromApp</a>
  <a className="node-chip" href="./vScriptValFromCSV">vScriptValFromCSV</a>
  <a className="node-chip" href="./vScriptValFromDate">vScriptValFromDate</a>
</div>

{/*
Generated page — node: vScriptValFromListFiles (Core/ScriptVal/Create).
Source: fuse vScriptValFromListFiles.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
