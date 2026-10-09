---
sidebar_position: 3
title: vScriptValMerge
description: "Dynamically join ScriptVal elements into one table"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMerge

Dynamically join ScriptVal elements into one table

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValMerge.png" alt="vScriptValMerge node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Internal control tracking how many ScriptVal inputs are currently connected. Not meant to be set manually — every connected input is merged, regardless of this value. |
| ScriptVal1 | DATATYPE | `—` | The first ScriptVal table to merge. Connecting it reveals ScriptVal2 for the next one, and so on. |
| Show Input | Integer | `0.0` | Reveals the wire for the ScriptVal1 connection in the Flow view. |
| "ScriptVal" .. i | ScriptVal | `—` | Additional ScriptVal table to merge, added automatically as each prior input gets wired — appears in the UI as ScriptVal2, ScriptVal3, and so on. (The literal `"ScriptVal" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |
| "ScriptVal" .. (inp_nr + 1) | ScriptVal | `—` | The next available ScriptVal slot, added automatically once the one before it is connected. Same display quirk as above. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValCount">vScriptValCount</a>
  <a className="node-chip" href="./vScriptValDump">vScriptValDump</a>
  <a className="node-chip" href="./vScriptValViewer">vScriptValViewer</a>
</div>

{/*
Generated page — node: vScriptValMerge (Core/ScriptVal/Utility).
Source: fuse vScriptValMerge.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
