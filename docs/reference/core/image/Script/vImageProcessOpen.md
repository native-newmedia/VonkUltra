---
sidebar_position: 1
title: vImageProcessOpen
description: "Launch a command-line process via popen."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageProcessOpen

Launch a command-line process via popen. The "Input 3D" field is used to connect 3D nodes that interact with Fusion's 3D workspace. The "Text" field is used to define the executable program name and the command-line arguments you want to run from a shell session. Typically a vTextSubFormat node is used to build the executable command line string that is supplied to the Text input on a vImageProcessOpen node. If you need cross-platform support, you can use a vTextCreatePlatform or vTextCreatePlatformBrowse node to automatically define the per-OS specific elements like the executable program name and its file extension (.exe, .app, .bat, .sh, .command).

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageProcessOpen.png" alt="vImageProcessOpen node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image passed through unchanged — connect any node interacting with the image pipeline to chain this process launch into it. |
| Text | Text | `—` | The executable name and command-line arguments to run, typically built with vTextSubFormat. Use vTextCreatePlatform/vTextCreatePlatformBrowse for cross-platform executable naming. |
| Show Input | Integer | `1.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageSlashCommand">vImageSlashCommand</a>
</div>

{/*
Generated page — node: vImageProcessOpen (Core/Image/Script).
Source: fuse vImageProcessOpen.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
