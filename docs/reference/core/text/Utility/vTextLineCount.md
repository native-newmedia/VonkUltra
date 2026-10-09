---
sidebar_position: 7
title: vTextLineCount
description: "Returns the line count of a multi-line string This node is especially useful if you are working with IFL (Image File Lists), or CSV (Comma Separated Value) / TSV (Tab Separated Value) text files."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextLineCount

Returns the line count of a multi-line string This node is especially useful if you are working with IFL (Image File Lists), or CSV (Comma Separated Value) / TSV (Tab Separated Value) text files. It gives you a quick indication of how many rows of text are in the supplied multi-line block of text. The output from the node is a Number data type that indicates the total line count. If the text file had ten lines of text supplied to the input connection, then the output from the node would be the number 10.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextLineCount.png" alt="vTextLineCount node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The multi-line text block to count lines in. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDelay">vTextDelay</a>
  <a className="node-chip" href="./vTextDump">vTextDump</a>
  <a className="node-chip" href="./vTextExpandEscapedCharacters">vTextExpandEscapedCharacters</a>
  <a className="node-chip" href="./vTextFromCSVViewer">vTextFromCSVViewer</a>
</div>

{/*
Generated page — node: vTextLineCount (Core/Text/Utility).
Source: fuse vTextLineCount.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
