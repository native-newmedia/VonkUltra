---
sidebar_position: 2
title: vScriptValToCustomData
description: "Save a Fusion ScriptVal object to Custom Data The \"Text\" control is used to specify the key used for the CustomData record."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValToCustomData

Save a Fusion ScriptVal object to Custom Data The "Text" control is used to specify the key used for the CustomData record. CustomData entries use a dot syntax for the hierarchy. If you define a lower level name it will return the full Lua table structure with multiple preference items at the same time. The "Context" control writes the CustomData to either the Fusion scope, or the Comp scope.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValToCustomData.png" alt="vScriptValToCustomData node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | ScriptVal | `—` | ScriptVal value to save. |
| Text | Text | `—` | CustomData key to write to, using dot syntax for nested levels. |
| Context | Dropdown | `Fusion` | Scope to write the CustomData to: Fusion (application-wide) or Comp (this composition only). |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromCustomData">vScriptValFromCustomData</a>
</div>

{/*
Generated page — node: vScriptValToCustomData (Core/ScriptVal/Custom Data).
Source: fuse vScriptValToCustomData.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
