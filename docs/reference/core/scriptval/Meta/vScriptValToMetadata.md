---
sidebar_position: 2
title: vScriptValToMetadata
description: "Creates a Fusion image with metadata added from a ScriptVal object This node has two input connections which are used for connecting an image and a ScriptVal data type."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValToMetadata

Creates a Fusion image with metadata added from a ScriptVal object This node has two input connections which are used for connecting an image and a ScriptVal data type. The output from the node is the image with metadata added.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValToMetadata.png" alt="vScriptValToMetadata node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image the new metadata is attached to. |
| ScriptVal | ScriptVal | `—` | ScriptVal value to write into the image's metadata. |
| Key | Text | `—` | Metadata field name to store ScriptVal under. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromMetadata">vScriptValFromMetadata</a>
</div>

{/*
Generated page — node: vScriptValToMetadata (Core/ScriptVal/Meta).
Source: fuse vScriptValToMetadata.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
