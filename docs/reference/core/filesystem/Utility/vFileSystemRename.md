---
sidebar_position: 14
title: vFileSystemRename
description: "Rename a file or folder."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vFileSystemRename

Rename a file or folder. This node can also be used to move files on disk.

<div className="node-badge-row">
  <span className="node-badge">Core / FileSystem</span>
  <span className="node-badge">FileSystem</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/filesystem/vFileSystemRename.png" alt="vFileSystemRename node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source | Text | `—` | Path to the file or folder to rename or move. |
| Destination | Text | `—` | New path — a different filename renames in place; a different folder moves it. |
| Create Destination Directory | Integer | `1.0` | Creates the destination folder automatically if it doesn't already exist. |
| Show Input | Integer | `0.0` | Reveals the wire for the Source connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vFileSystemChmod">vFileSystemChmod</a>
  <a className="node-chip" href="./vFileSystemColorTags">vFileSystemColorTags</a>
  <a className="node-chip" href="./vFileSystemCreateDir">vFileSystemCreateDir</a>
  <a className="node-chip" href="./vFileSystemDirExists">vFileSystemDirExists</a>
</div>

{/*
Generated page — node: vFileSystemRename (Core/FileSystem/Utility).
Source: fuse vFileSystemRename.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
