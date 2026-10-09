---
sidebar_position: 11
title: vFileSystemMapPath
description: "Expands a PathMap This node automatically converts a relative filepath into an absolute filepath on the output."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vFileSystemMapPath

Expands a PathMap This node automatically converts a relative filepath into an absolute filepath on the output. This is useful if you want to supply an executable program name, or a filename to an operation like the ProcessOpen node that carries out command-line tasks.

<div className="node-badge-row">
  <span className="node-badge">Core / FileSystem</span>
  <span className="node-badge">FileSystem</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/filesystem/vFileSystemMapPath.png" alt="vFileSystemMapPath node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Relative path (e.g. using a `Comp:/` PathMap) to expand into an absolute filepath. |
| Show Input | Integer | `1.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vFileSystemChmod">vFileSystemChmod</a>
  <a className="node-chip" href="./vFileSystemColorTags">vFileSystemColorTags</a>
  <a className="node-chip" href="./vFileSystemCreateDir">vFileSystemCreateDir</a>
  <a className="node-chip" href="./vFileSystemDirExists">vFileSystemDirExists</a>
</div>

{/*
Generated page — node: vFileSystemMapPath (Core/FileSystem/Utility).
Source: fuse vFileSystemMapPath.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
