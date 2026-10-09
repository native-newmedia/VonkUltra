---
sidebar_position: 2
title: vPointCreateImage
description: "Create a Fusion Point object with an image visible in the background The \"Add Metadata\" checkbox creates image output metadata entries for the point…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointCreateImage

Create a Fusion Point object with an image visible in the background The "Add Metadata" checkbox creates image output metadata entries for the point coordinates formatted as: XOffset = 0.5 YOffset = 0.5 If you enable the viewer window's "Metadata" sub-viewer entry you can quickly see the information that is appended to the image output stream.

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointCreateImage.png" alt="vPointCreateImage node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Image | Image | `—` | Background image shown behind the point picker in the viewer, for visual reference while placing it. |
| Point | Point | `—` | On-screen position picker — drag directly in the viewer or type X/Y values in the Inspector. |
| Flip Horiz | Integer | `0.0` | Mirrors the X value around the center of the frame (X → 1 − X). |
| Flip Vert | Integer | `0.0` | Mirrors the Y value around the center of the frame (Y → 1 − Y). |
| Add Metadata | Integer | `0.0` | Writes the point's coordinates into the output image's metadata as `XOffset`/`YOffset` — viewable via the viewer's Metadata sub-panel. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointCreate">vPointCreate</a>
  <a className="node-chip" href="./vPointCreateRandom">vPointCreateRandom</a>
  <a className="node-chip" href="./vPointFromMousePos">vPointFromMousePos</a>
</div>

{/*
Generated page — node: vPointCreateImage (Core/Point/Create).
Source: fuse vPointCreateImage.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
