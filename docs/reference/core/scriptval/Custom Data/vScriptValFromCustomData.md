---
sidebar_position: 1
title: vScriptValFromCustomData
description: "Create a Fusion ScriptVal object from Custom Data The \"Text\" control is used to specify the key used for the CustomData record."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromCustomData

Create a Fusion ScriptVal object from Custom Data The "Text" control is used to specify the key used for the CustomData record. CustomData entries use a dot syntax for the hierarchy. If you define a lower level name it will return the full Lua table structure with multiple preference items at the same time. The "Context" control reads the CustomData from either the Fusion scope, or the Comp scope.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFromCustomData.png" alt="vScriptValFromCustomData node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | CustomData key to read, using dot syntax for nested levels — a higher-level key returns the full sub-table at that level. |
| Context | Dropdown | `Fusion` | Scope to read the CustomData from: Fusion (application-wide) or Comp (this composition only). |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValToCustomData">vScriptValToCustomData</a>
</div>

{/*
Generated page — node: vScriptValFromCustomData (Core/ScriptVal/Custom Data).
Source: fuse vScriptValFromCustomData.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
