---
sidebar_position: 7
title: vTextSlashCommand
description: "Run a Console Fuse SlashCommand as a node A SlashCommand is a type of Lua or Python script in Fusion that is normally launched from the Console window by…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextSlashCommand

Run a Console Fuse SlashCommand as a node A SlashCommand is a type of Lua or Python script in Fusion that is normally launched from the Console window by prefacing a command with a leading "/" character.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextSlashCommand.png" alt="vTextSlashCommand node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The SlashCommand to run, e.g. `/footage list`. |
| Display Lines | Integer | `25` | Number of lines shown in the Text box in the Inspector. |
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Text box instead of scrolling horizontally. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |
| [=[SlashCommand Examples: /footage list  /for (selected\|visible\|all) [tooltype[ | Float | `—` | A read-only label listing example SlashCommand syntax — not a real setting. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDoAction">vTextDoAction</a>
  <a className="node-chip" href="./vTextDoString">vTextDoString</a>
  <a className="node-chip" href="./vTextExecute">vTextExecute</a>
  <a className="node-chip" href="./vTextProcessOpen">vTextProcessOpen</a>
</div>

{/*
Generated page — node: vTextSlashCommand (Core/Text/Script).
Source: fuse vTextSlashCommand.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
