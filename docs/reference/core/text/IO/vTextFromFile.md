---
sidebar_position: 3
title: vTextFromFile
description: "Reads a Text string from a file This node is used to access a block of text from a plain-text format style of document stored on disk."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextFromFile

Reads a Text string from a file This node is used to access a block of text from a plain-text format style of document stored on disk. This is useful for accessing CSV (Comma Separated Value), TSV (Tab Separated Value), IFL (Image File Lists), or other external data resources. The "Input" text field is used to specify the disk-based filename of the plain-text document to be read. The "Remove Non-Printable Characters" checkbox is used to remove ASCII invisible control characters from the text stream. This allows the node to be used to extract ASCII strings from binary files. The output from this node is a text data type.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextFromFile.png" alt="vTextFromFile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Path to the plain-text file to read (e.g. CSV, TSV, IFL). |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextFromClipboard">vTextFromClipboard</a>
  <a className="node-chip" href="./vTextFromComp">vTextFromComp</a>
  <a className="node-chip" href="./vTextFromNet">vTextFromNet</a>
  <a className="node-chip" href="./vTextFromZip">vTextFromZip</a>
</div>

{/*
Generated page — node: vTextFromFile (Core/Text/IO).
Source: fuse vTextFromFile.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
