---
sidebar_position: 5
title: vImageFromFile
description: "Reads an Image object from a file The \"Input\" control is used to define the image filename to load."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageFromFile

Reads an Image object from a file The "Input" control is used to define the image filename to load. It can be driven externally by a Text data type connection to the node. The "Time Mode" control allows you to adjust how the frame number for image sequences is processed.

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageFromFile.png" alt="vImageFromFile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Path to the image (or image sequence) to load. Can be driven externally by a Text data type connection. |
| Time Mode | Dropdown | `Static Frame` | How the sequence frame number is resolved: Static Frame (always use Time below), Current Frame (follow the comp's playhead), Request Time (follow the incoming render request), or Time (an explicit, wireable frame number). |
| Time | Integer | `0.0` | Frame number to load, used when Time Mode is Static Frame or Time. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageEXRFromFile">vImageEXRFromFile</a>
  <a className="node-chip" href="./vImageEXRToFile">vImageEXRToFile</a>
  <a className="node-chip" href="./vImageFromClipboard">vImageFromClipboard</a>
  <a className="node-chip" href="./vImageFromColor">vImageFromColor</a>
</div>

{/*
Generated page — node: vImageFromFile (Core/Image/IO).
Source: fuse vImageFromFile.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
