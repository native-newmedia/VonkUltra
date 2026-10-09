---
sidebar_position: 11
title: vTextSortLines
description: "Sorts a multi-line block of text The \"Sort List\" checkbox will break apart a multi-line block of text and alphabetically sort the content on a line-by-line basis."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSortLines

Sorts a multi-line block of text The "Sort List" checkbox will break apart a multi-line block of text and alphabetically sort the content on a line-by-line basis. The "Remove Duplicates" checkbox is used to remove any line entry that is a duplicate entry, meaning the content is not unique.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSortLines.png" alt="vTextSortLines node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The multi-line block of text to sort. |
| Sort List | Integer | `1.0` | Alphabetically sorts the text on a line-by-line basis. |
| Remove Duplicates | Integer | `0.0` | Drops any line that duplicates one already in the results. |
| Show Input | Integer | `1.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDelay">vTextDelay</a>
  <a className="node-chip" href="./vTextDump">vTextDump</a>
  <a className="node-chip" href="./vTextExpandEscapedCharacters">vTextExpandEscapedCharacters</a>
  <a className="node-chip" href="./vTextFromCSVViewer">vTextFromCSVViewer</a>
</div>

{/*
Generated page — node: vTextSortLines (Core/Text/Utility).
Source: fuse vTextSortLines.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
