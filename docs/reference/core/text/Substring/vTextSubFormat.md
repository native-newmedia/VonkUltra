---
sidebar_position: 2
title: vTextSubFormat
description: "Formats a template string with input values Each input connection on the vTextSubFormat node can be placed exactly where it is needed using a token approach."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSubFormat

Formats a template string with input values Each input connection on the vTextSubFormat node can be placed exactly where it is needed using a token approach. A token value is entered using curly braces that surround an integer number like "`\{1\}`" or "`\{2\}`" that represent an input connection number on the node.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSubFormat.png" alt="vTextSubFormat node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Reserved input, referenced by name from inside the node's internal script. |
| Text1 | Text | `—` | The first token value, inserted wherever `{1}` appears in Format. |
| Format | Text | `—` | Template string containing `{1}`, `{2}`, etc. tokens for each connected input. |
| "Text" .. i | Text | `—` | Additional token value, added automatically as each prior input gets wired — appears in the UI as Text2, Text3, and so on. (The literal `"Text" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |
| "Text" .. (inp_nr + 1) | Text | `—` | The next available token slot, added automatically once the one before it is connected. Same display quirk as above — shows in Fusion as Text3, Text4, etc. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextMerge">vTextMerge</a>
  <a className="node-chip" href="./vTextSubFormatMultiline">vTextSubFormatMultiline</a>
  <a className="node-chip" href="./vTextSubJoin">vTextSubJoin</a>
  <a className="node-chip" href="./vTextSubReplace">vTextSubReplace</a>
</div>

{/*
Generated page — node: vTextSubFormat (Core/Text/Substring).
Source: fuse vTextSubFormat.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
