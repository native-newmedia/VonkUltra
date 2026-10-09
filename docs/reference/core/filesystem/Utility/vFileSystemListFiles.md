---
sidebar_position: 10
title: vFileSystemListFiles
description: "Creates a Fusion Text object with a list of the folder contents This node scans the contents of a folder path defined in the \"Text\" field."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vFileSystemListFiles

Creates a Fusion Text object with a list of the folder contents This node scans the contents of a folder path defined in the "Text" field. The output is created as a text based multi-line list of files or folders. The "Pattern" field is used to enter part of the filename that you would like to match in the output. An asterisk character is supported as a wildcard symbol to help with partial filename entry. The Pattern field is typically used to help find files by their extension by entering a value like "`*.exr`", "`*.png`", "`*.mov`", "`*.mp4`", etc. The Mode control can be set to "List Files" or "List Directories". This allows you to filter the output. If you enable the "Export Fullpath" checkbox the full absolute filepath for each item is returned. If the checkbox is disabled, only the filename of the resource is returned without any folder path elements included. The "Expand PathMaps" checkbox will automatically convert any relative filepaths into absolute filepaths on the output. The "Skip Hidden Files" checkbox is used to ignore hidden files like "`.DS_Store`" and "Thumbs.db" documents, along with UNIX style filenames that start with a period. This helps reduce clutter on file listing based outputs.

<div className="node-badge-row">
  <span className="node-badge">Core / FileSystem</span>
  <span className="node-badge">FileSystem</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/filesystem/vFileSystemListFiles.png" alt="vFileSystemListFiles node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Folder path to scan. |
| Pattern | Text | `—` | Wildcard filter for filenames, e.g. `*.exr` or `*.png`. Leave empty to match everything. |
| Mode | Dropdown | `List Files` | Whether to list files or subdirectories: List Files or List Directories. |
| Export Fullpath | Integer | `0.0` | Returns each item's full absolute path, instead of just its filename. |
| Expand PathMaps | Integer | `1.0` | Converts relative paths (like `Comp:/`) into absolute paths in the output. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Skip Hidden Files | Integer | `1.0` | Excludes hidden files (`.DS_Store`, `Thumbs.db`, and UNIX dotfiles) from the output. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vFileSystemChmod">vFileSystemChmod</a>
  <a className="node-chip" href="./vFileSystemColorTags">vFileSystemColorTags</a>
  <a className="node-chip" href="./vFileSystemCreateDir">vFileSystemCreateDir</a>
  <a className="node-chip" href="./vFileSystemDirExists">vFileSystemDirExists</a>
</div>

{/*
Generated page — node: vFileSystemListFiles (Core/FileSystem/Utility).
Source: fuse vFileSystemListFiles.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
