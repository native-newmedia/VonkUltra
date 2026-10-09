---
sidebar_position: 2
title: vTextDoString
description: "Return a Text object from running a string of Lua code The node automatically creates new text input connections as needed."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextDoString

Return a Text object from running a string of Lua code The node automatically creates new text input connections as needed. The text based input data can be accessed in the script using a Lua table variable named "tbl". The text based output connection on the node receives the data that is defined by the "return" command. The "Script Header Wire" input is used to specify a text datatype connection of code that is appended to the top of the Lua Script field contents when run. The script content connected to the Script Header Wire field is typically sourced from a vTextCreateMultiline or vTextFromFile node. In your Lua Script code you can iterate through each record in the Lua table data using: for i, v in ipairs(tbl) do end If you need to temporarily troubleshoot the internals of what your code is doing in the vTextDoString node there are two diagnostic checkbox controls labelled "Show Code" and "Show Dump". The output from those options is displayed in the Console window. For performance reasons you probably want to leave those options turned off most of the time when rendering long sequences in Fusion to reduce the Console logging overhead.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextDoString.png" alt="vTextDoString node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Reserved input, referenced by name from inside the Lua Script. |
| Text1 | Text | `—` | Auto-created text input, referenced from the script as part of the `tbl` table — more are added automatically as each prior one gets wired. |
| Script Header Wire | Text | `—` | Optional Text input wired in as a header/preamble script, prepended to the Script field's code when run — typically sourced from a vTextCreateMultiline or vTextFromFile node. |
| > | Float | `—` | Run button — executes the Lua Script and returns its result as this node's output. |
| Script | Text | `—` | The Lua code to execute — its `return` value becomes the node's Text output. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextDoAction">vTextDoAction</a>
  <a className="node-chip" href="./vTextExecute">vTextExecute</a>
  <a className="node-chip" href="./vTextProcessOpen">vTextProcessOpen</a>
  <a className="node-chip" href="./vTextRunScript">vTextRunScript</a>
</div>

{/*
Generated page — node: vTextDoString (Core/Text/Script).
Source: fuse vTextDoString.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
