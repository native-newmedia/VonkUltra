---
sidebar_position: 6
title: vTextSubReturn
description: "Returns a substring of a string This node is used to shorten a string by using the Start and End numeric fields to define the number of characters to remove."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSubReturn

Returns a substring of a string This node is used to shorten a string by using the Start and End numeric fields to define the number of characters to remove. A positive number entered in the number input fields is used to define the removal of characters by starting the counting process at the left side of the input string. A negative number in the number input fields is used to define the removal of characters starting on the right side of the input string. This added complexity makes it easier to remove elements like a 3 letter file extension using the negative number input ability to trim off characters starting from the end (right side) of a variable length text string in a precise fashion.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSubReturn.png" alt="vTextSubReturn node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The source string to extract a substring from. |
| Start | Integer | `1` | First character to keep — positive counts from the left, negative from the right. |
| End | Integer | `-1` | Last character to keep — positive counts from the left, negative from the right. |
| Show Input | Integer | `1.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextMerge">vTextMerge</a>
  <a className="node-chip" href="./vTextSubFormat">vTextSubFormat</a>
  <a className="node-chip" href="./vTextSubFormatMultiline">vTextSubFormatMultiline</a>
  <a className="node-chip" href="./vTextSubJoin">vTextSubJoin</a>
</div>

{/*
Generated page — node: vTextSubReturn (Core/Text/Substring).
Source: fuse vTextSubReturn.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
