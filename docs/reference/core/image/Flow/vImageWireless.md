---
sidebar_position: 4
title: vImageWireless
description: "The vImageWireless node allows you to connect to other image based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageWireless

The vImageWireless node allows you to connect to other image based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view. This can be helpful if you need to reduce clutter.

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageWireless.png" alt="vImageWireless node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | datatype | `—` | The upstream Image connection to link wirelessly. The wire stays hidden in the Flow view unless Show Input is enabled — data still passes through to Output as normal. |
| Show Input | Integer | `0.0` | Reveals the wire connecting Input, so it's visible in the Flow/Nodes view like a normal connection. |
| Get Color | Float | `—` | Copies the connected node's tile and text colour onto this node — a quick way to visually match a wireless link with its source. |
| Get Name | Float | `—` | Renames this node to `wire_<source node name>`, so it's identifiable as the wireless counterpart of its source. |
| Get Source | Float | `—` | Selects and activates the connected source node in the flow — a quick way to jump to it. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageHook">vImageHook</a>
  <a className="node-chip" href="./vImageRouter">vImageRouter</a>
  <a className="node-chip" href="./vImageSwitch">vImageSwitch</a>
</div>

{/*
Generated page — node: vImageWireless (Core/Image/Flow).
Source: fuse vImageWireless.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
