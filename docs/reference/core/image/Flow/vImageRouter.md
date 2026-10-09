---
sidebar_position: 2
title: vImageRouter
description: "Control the output routing of a Fusion Image object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageRouter

Control the output routing of a Fusion Image object

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageRouter.png" alt="vImageRouter node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Selects which output receives Input: 1 sends it to Output1 (Output2 gets an empty image), any other value sends it to Output2 instead. |
| Input | Image | `—` | The image to route to one of the two outputs. |
| Show Input | Integer | `1.0` | Reveals the wire for the Which control in the Flow view (despite the name, this toggles Which's visibility, not Input's). |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageHook">vImageHook</a>
  <a className="node-chip" href="./vImageSwitch">vImageSwitch</a>
  <a className="node-chip" href="./vImageWireless">vImageWireless</a>
</div>

{/*
Generated page — node: vImageRouter (Core/Image/Flow).
Source: fuse vImageRouter.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
