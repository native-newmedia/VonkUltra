---
sidebar_position: 2
title: vTextWireless
description: "The vTextWireless node allows you to connect to other text based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextWireless

The vTextWireless node allows you to connect to other text based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view. This can be helpful if you need to reduce clutter.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextWireless.png" alt="vTextWireless node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | datatype | `—` | The upstream Text connection to link wirelessly. The wire stays hidden in the Flow view unless Show Input is enabled — data still passes through to Output as normal. |
| Show Input | Integer | `0.0` | Reveals the wire connecting Input, so it's visible in the Flow/Nodes view like a normal connection. |
| Get Color | Float | `—` | Copies the connected node's tile and text colour onto this node — a quick way to visually match a wireless link with its source. |
| Get Name | Float | `—` | Renames this node to `wire_<source node name>`, so it's identifiable as the wireless counterpart of its source. |
| Get Source | Float | `—` | Selects and activates the connected source node in the flow — a quick way to jump to it. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextSwitch">vTextSwitch</a>
</div>

{/*
Generated page — node: vTextWireless (Core/Text/Flow).
Source: fuse vTextWireless.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
