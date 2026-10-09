---
sidebar_position: 6
title: vImageFromNet
description: "Reads an Image object from a network URL The \"Input\" control is used to define the image URL such as an http://, https://, or file:/// based resource."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageFromNet

Reads an Image object from a network URL The "Input" control is used to define the image URL such as an http://, https://, or file:/// based resource. The URL can be driven externally by a Text data type connection to the node. The "File Type" ComboBox control helps Fusion decode the exact type of content being downloaded when the media is loaded into the Fusion viewer window context. An example image you can use to test this node is an Eastern Canada weather satellite URL: https://weather.gc.ca/data/satellite/goes_ecan_1070_100.jpg

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageFromNet.png" alt="vImageFromNet node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Image URL to download (http://, https://, or file:///). Can be driven externally by a Text data type connection. |
| File Type | Dropdown | `JPEG` | Format of the downloaded content, so Fusion decodes it correctly: JPEG, PNG, BMP, EXR, FUSEPIC, RAW, TGA, TIFF, PSD, MP4, or MOV. |
| View URL | Float | `—` | Opens Input's URL in the system's default web browser, for a quick sanity check of the source. |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageEXRFromFile">vImageEXRFromFile</a>
  <a className="node-chip" href="./vImageEXRToFile">vImageEXRToFile</a>
  <a className="node-chip" href="./vImageFromClipboard">vImageFromClipboard</a>
  <a className="node-chip" href="./vImageFromColor">vImageFromColor</a>
</div>

{/*
Generated page — node: vImageFromNet (Core/Image/IO).
Source: fuse vImageFromNet.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
