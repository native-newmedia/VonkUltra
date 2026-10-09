---
sidebar_position: 1
title: vScriptValFromMetadata
description: "Casts image metadata to a Fusion ScriptVal object This node takes an image as the input."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromMetadata

Casts image metadata to a Fusion ScriptVal object This node takes an image as the input. The output is the image metadata encoded in a ScriptVal object format.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFromMetadata.png" alt="vScriptValFromMetadata node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image whose metadata is converted to a ScriptVal object. |
| Key | Text | `—` | Optional metadata field name to isolate — leave empty to return the full metadata record. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValToMetadata">vScriptValToMetadata</a>
</div>

{/*
Generated page — node: vScriptValFromMetadata (Core/ScriptVal/Meta).
Source: fuse vScriptValFromMetadata.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
