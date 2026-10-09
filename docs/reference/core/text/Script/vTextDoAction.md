---
sidebar_position: 1
title: vTextDoAction
description: "Executes Fusion actions The \"Action Name\" text field is where the action you want to run is entered."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextDoAction

Executes Fusion actions The "Action Name" text field is where the action you want to run is entered. The "Action Params" text field contents are placed inside a Lua table like element \{\}. This information is used to specify any extra attributes you would like to pass along to the action when it is run. The "Wrap Lines" checkbox makes it possible to enable/disable line wrapping in the text preview area. DoAction is launched via the "self.Comp:Execute()" function so it is run asynchronously.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextDoAction.png" alt="vTextDoAction node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Output preview — shows the text result once the action runs. |
| Action Name | Text | `—` | Name of the Fusion action to run. |
| Action Params | Text | `—` | Extra attributes to pass to the action, written as the contents of a Lua table `{}`. |
| Wrap Lines | Integer | `0.0` | Wraps long lines in the text preview instead of scrolling horizontally. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDoString">vTextDoString</a>
  <a className="node-chip" href="./vTextExecute">vTextExecute</a>
  <a className="node-chip" href="./vTextProcessOpen">vTextProcessOpen</a>
  <a className="node-chip" href="./vTextRunScript">vTextRunScript</a>
</div>

{/*
Generated page — node: vTextDoAction (Core/Text/Script).
Source: fuse vTextDoAction.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
