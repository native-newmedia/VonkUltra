---
sidebar_position: 6
title: vFileSystemFileCopy
description: "Copies a file This node allows you to define a \"Source File\" that will be copied to the disk-based filepath defined in the \"Destination File\" field."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vFileSystemFileCopy

Copies a file This node allows you to define a "Source File" that will be copied to the disk-based filepath defined in the "Destination File" field. The "Create Destination Directory" checkbox is useful if you need to dynamically create the output folder at the same time.

<div className="node-badge-row">
  <span className="node-badge">Core / FileSystem</span>
  <span className="node-badge">FileSystem</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/filesystem/vFileSystemFileCopy.png" alt="vFileSystemFileCopy node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Source File | Text | `—` | Path to the file to copy. |
| Destination File | Text | `—` | Path to copy the file to. |
| Create Destination Directory | Integer | `1.0` | Creates the destination folder automatically if it doesn't already exist. |
| Show Input | Integer | `0.0` | Reveals the wire for the Source File connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vFileSystemChmod">vFileSystemChmod</a>
  <a className="node-chip" href="./vFileSystemColorTags">vFileSystemColorTags</a>
  <a className="node-chip" href="./vFileSystemCreateDir">vFileSystemCreateDir</a>
  <a className="node-chip" href="./vFileSystemDirExists">vFileSystemDirExists</a>
</div>

{/*
Generated page — node: vFileSystemFileCopy (Core/FileSystem/Utility).
Source: fuse vFileSystemFileCopy.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
