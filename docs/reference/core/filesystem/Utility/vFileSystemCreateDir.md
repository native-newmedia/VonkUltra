---
sidebar_position: 3
title: vFileSystemCreateDir
description: "Creates a new directory This node will create a new directory."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vFileSystemCreateDir

Creates a new directory This node will create a new directory. The "Text" field is used to define the desired folder path. Any required intermediate subfolders are created at the same time. When enabled, the "\[x\] Use Parent Directory" checkbox allows you to enter a filepath into the "Text" field. The base folder path for the specified file will be used for the directory creation task.

<div className="node-badge-row">
  <span className="node-badge">Core / FileSystem</span>
  <span className="node-badge">FileSystem</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/filesystem/vFileSystemCreateDir.png" alt="vFileSystemCreateDir node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Folder path to create. Required intermediate subfolders are created automatically. |
| Use Parent Directory | Integer | `0.0` | Treats Text as a file path instead, and creates that file's containing folder rather than the path itself. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vFileSystemChmod">vFileSystemChmod</a>
  <a className="node-chip" href="./vFileSystemColorTags">vFileSystemColorTags</a>
  <a className="node-chip" href="./vFileSystemDirExists">vFileSystemDirExists</a>
  <a className="node-chip" href="./vFileSystemExtendedAttributes">vFileSystemExtendedAttributes</a>
</div>

{/*
Generated page — node: vFileSystemCreateDir (Core/FileSystem/Utility).
Source: fuse vFileSystemCreateDir.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
