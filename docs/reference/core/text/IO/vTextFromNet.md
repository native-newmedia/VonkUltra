---
sidebar_position: 4
title: vTextFromNet
description: "Reads a Text string from a network URL The \"Input\" text-field is used to supply the http://, https://, or file:// based URL."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextFromNet

Reads a Text string from a network URL The "Input" text-field is used to supply the http://, https://, or file:// based URL. The network-based text resource downloading functionality provided by this node makes it possible to drive a composite from an external cloud based datasource like a CSV (Comma Separated Value), TSV (Tab Separated Value), SVG (Scalable Vector Graphics), Fusion Macro .setting, Fusion .comp, etc. This means IoT (Internet of Things) electronic sensors, sports statistics, financial data, or any other web enabled datasource can be used on-the-fly to supply Text, Number, Matrix, Array, or other values to nodes in the comp.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextFromNet.png" alt="vTextFromNet node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | The http://, https://, or file:// URL to download text from. |
| View URL | Float | `—` | Button — opens the Input URL in your default browser. |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextFromClipboard">vTextFromClipboard</a>
  <a className="node-chip" href="./vTextFromComp">vTextFromComp</a>
  <a className="node-chip" href="./vTextFromFile">vTextFromFile</a>
  <a className="node-chip" href="./vTextFromZip">vTextFromZip</a>
</div>

{/*
Generated page — node: vTextFromNet (Core/Text/IO).
Source: fuse vTextFromNet.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
