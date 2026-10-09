---
sidebar_position: 3
title: vScriptValDoStringMultiplex
description: "Return a ScriptVal object from running a string of Lua code."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValDoStringMultiplex

Return a ScriptVal object from running a string of Lua code. Supports multi-input connections for ScriptVals, along with a header code block input for pre-made user defined functions

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValDoStringMultiplex.png" alt="vScriptValDoStringMultiplex node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Internal control tracking how many ScriptVal inputs are currently connected. Not meant to be set manually. |
| Script Header Wire | Text | `—` | Optional wired-in Lua source prepended to the script before it runs, for pre-made user-defined functions shared across nodes. |
| > | Float | `—` | Selects and activates the node connected to Script Header Wire — a quick way to jump to it. |
| Text | Text | `—` | Lua code to execute. Its `return` value becomes the node's ScriptVal output. |
| Display Lines | Integer | `25` | Number of visible lines in the Text editor before scrolling. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Text editor instead of scrolling horizontally. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |
| Show Code | Integer | `0.0` | Prints the assembled script (including the Script Header Wire) to the console — leave off during long renders to avoid logging overhead. |
| Show Dump | Integer | `0.0` | Prints the script's output ScriptVal to the console — leave off during long renders to avoid logging overhead. |
| ScriptVal1 | DATATYPE | `—` | The first of the multiple ScriptVal inputs, each accessible in the script by its own variable name. Connecting it reveals ScriptVal2 for the next one, and so on. |
| "ScriptVal" .. i | ScriptVal | `—` | Additional ScriptVal input, added automatically as each prior one gets wired. (The literal `"ScriptVal" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |
| "ScriptVal" .. (inp_nr + 1) | ScriptVal | `—` | The next available ScriptVal input slot, added automatically once the one before it is connected. Same display quirk as above. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValDoFile">vScriptValDoFile</a>
  <a className="node-chip" href="./vScriptValDoString">vScriptValDoString</a>
</div>

{/*
Generated page — node: vScriptValDoStringMultiplex (Core/ScriptVal/Script).
Source: fuse vScriptValDoStringMultiplex.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
