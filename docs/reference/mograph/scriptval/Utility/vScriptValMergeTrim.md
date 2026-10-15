---
sidebar_position: 8
title: vScriptValMergeTrim
description: "Dynamically join ScriptVal elements into one table."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMergeTrim

Dynamically join ScriptVal elements into one table.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

{/* No screenshot available for vScriptValMergeTrim yet. */}

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | — |
| Input 1 | DATATYPE | `—` | — |
| Trim Start | Integer | `0` | Entries removed from the start. |
| Trim End | Integer | `0` | Entries removed from the end. |
| Every Nth | Integer | `1` | Keeps one entry out of every N. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reverse | Integer | `0.0` | Reverses the order of the result. |
| "Input " .. i | DATATYPE | `—` | — |
| "Input " .. (inp_nr + 1) | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValAppend">vScriptValAppend</a>
  <a className="node-chip" href="./vScriptValAppendGroup">vScriptValAppendGroup</a>
  <a className="node-chip" href="./vScriptValDataComposite">vScriptValDataComposite</a>
  <a className="node-chip" href="./vScriptValFontArray">vScriptValFontArray</a>
</div>

{/*
Generated page — node: vScriptValMergeTrim (ScriptVal/Utility).
Source: fuse vScriptValMergeTrim.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
