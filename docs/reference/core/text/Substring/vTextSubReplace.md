---
sidebar_position: 5
title: vTextSubReplace
description: "Replaces substrings of a string The \"Pattern\" text field uses [Lua Patterns](http://lua-users.org/wiki/PatternsTutorial) to parse the string."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSubReplace

Replaces substrings of a string The "Pattern" text field uses [Lua Patterns](http://lua-users.org/wiki/PatternsTutorial) to parse the string. Additional information about patterns can be read in the [Lua manual](https://www.lua.org/manual/5.3/manual.html#6.4.1). The 2nd text field represents the "Replace" text that will be substituted.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSubReplace.png" alt="vTextSubReplace node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The source text to search and replace within. |
| Pattern | Text | `—` | Lua pattern describing the substring(s) to find. |
| Replace | Text | `—` | Text that replaces each match of Pattern. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextMerge">vTextMerge</a>
  <a className="node-chip" href="./vTextSubFormat">vTextSubFormat</a>
  <a className="node-chip" href="./vTextSubFormatMultiline">vTextSubFormatMultiline</a>
  <a className="node-chip" href="./vTextSubJoin">vTextSubJoin</a>
</div>

{/*
Generated page — node: vTextSubReplace (Core/Text/Substring).
Source: fuse vTextSubReplace.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
