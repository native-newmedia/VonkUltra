---
sidebar_position: 1
title: vTextMerge
description: "Dynamically joins strings into one Merge together several strings that are connected to the node's text based input connections."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextMerge

Dynamically joins strings into one Merge together several strings that are connected to the node's text based input connections. The combined strings are joined with the addition of a user defined separator character.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextMerge.png" alt="vTextMerge node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Reserved input, referenced by name from inside the node's internal script. |
| Text1 | Text | `—` | First string to merge — more Text inputs (Text2, Text3…) are added automatically as each prior one gets wired. |
| Separator | Text | `—` | Character(s) placed between each merged string. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextSubFormat">vTextSubFormat</a>
  <a className="node-chip" href="./vTextSubFormatMultiline">vTextSubFormatMultiline</a>
  <a className="node-chip" href="./vTextSubJoin">vTextSubJoin</a>
  <a className="node-chip" href="./vTextSubReplace">vTextSubReplace</a>
</div>

{/*
Generated page — node: vTextMerge (Core/Text/Substring).
Source: fuse vTextMerge.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
