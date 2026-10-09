---
sidebar_position: 16
title: vTextToHex
description: "Converts a string into Base16 Hex encoded text The \"Separator\" text field allows you to enter a value like a space, a tab, a dash, a semicolon, or other…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextToHex

Converts a string into Base16 Hex encoded text The "Separator" text field allows you to enter a value like a space, a tab, a dash, a semicolon, or other character you want to use between the Base16 encoded output number groups. The "Remove Non-Printable Characters" control will automatically remove any ASCII characters that are control characters.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextToHex.png" alt="vTextToHex node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | The text to encode as Base16 (hex). |
| Separator | Text | `—` | Character(s) placed between each hex byte group in the output (e.g. a space or dash). |
| Remove Non-Printable Characters | Integer | `1.0` | Strips ASCII control characters from Input before encoding. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCreate">vTextCreate</a>
  <a className="node-chip" href="./vTextCreateArch">vTextCreateArch</a>
  <a className="node-chip" href="./vTextCreateBrowse">vTextCreateBrowse</a>
  <a className="node-chip" href="./vTextCreateMultiline">vTextCreateMultiline</a>
</div>

{/*
Generated page — node: vTextToHex (Core/Text/Create).
Source: fuse vTextToHex.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
