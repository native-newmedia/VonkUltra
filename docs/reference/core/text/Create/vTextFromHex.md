---
sidebar_position: 13
title: vTextFromHex
description: "Converts a Base16 Hex encoded string to ASCII text The \"Input\" field is used to supply the block of HEX encoded content."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextFromHex

Converts a Base16 Hex encoded string to ASCII text The "Input" field is used to supply the block of HEX encoded content. The "Separator" text field allows you to enter a value like a space, a tab, a dash, a semicolon, or other character that is present between the Base16 encoded number groups. This user supplied separator information is then used to guide the decoding process. The "Remove Non-Printable Characters" control will automatically remove any ASCII characters that are control characters. In software like the macOS based BBEdit text editor, a non-printable character in a text file would be described as a "Gremlin" and this process would be called "Zapping Gremlins". A sample Hex string that says "Hello World!" is "48656C6C6F20576F726C6421".

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextFromHex.png" alt="vTextFromHex node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | The Base16 (hex) encoded text to decode. |
| Separator | Text | `—` | Character(s) between each hex byte group in Input (e.g. a space or dash). |
| Remove Non-Printable Characters | Integer | `1.0` | Strips ASCII control characters from the decoded output. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCreate">vTextCreate</a>
  <a className="node-chip" href="./vTextCreateArch">vTextCreateArch</a>
  <a className="node-chip" href="./vTextCreateBrowse">vTextCreateBrowse</a>
  <a className="node-chip" href="./vTextCreateMultiline">vTextCreateMultiline</a>
</div>

{/*
Generated page — node: vTextFromHex (Core/Text/Create).
Source: fuse vTextFromHex.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
