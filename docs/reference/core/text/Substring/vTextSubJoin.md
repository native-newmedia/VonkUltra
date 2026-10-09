---
sidebar_position: 4
title: vTextSubJoin
description: "Dynamically joins strings into one"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSubJoin

Dynamically joins strings into one

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSubJoin.png" alt="vTextSubJoin node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Reserved input, referenced by name from inside the node's internal script. |
| Text1 | Text | `—` | First string to join — more Text inputs (Text2, Text3…) are added automatically as each prior one gets wired. |
| Separator | Text | `—` | Character(s) placed between each joined string. |
| "Text" .. i | Text | `—` | Additional string to join, added automatically as each prior input gets wired — appears in the UI as Text2, Text3, and so on. (The literal `"Text" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |
| "Text" .. (inp_nr + 1) | Text | `—` | The next available join slot, added automatically once the one before it is connected. Same display quirk as above — shows in Fusion as Text3, Text4, etc. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextMerge">vTextMerge</a>
  <a className="node-chip" href="./vTextSubFormat">vTextSubFormat</a>
  <a className="node-chip" href="./vTextSubFormatMultiline">vTextSubFormatMultiline</a>
  <a className="node-chip" href="./vTextSubReplace">vTextSubReplace</a>
</div>

{/*
Generated page — node: vTextSubJoin (Core/Text/Substring).
Source: fuse vTextSubJoin.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
