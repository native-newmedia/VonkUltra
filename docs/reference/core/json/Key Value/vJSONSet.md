---
sidebar_position: 3
title: vJSONSet
description: "Sets a new key value pair in a JSON table The \"Key\" text-field lets you enter the name of the JSON element to be modified/inserted."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONSet

Sets a new key value pair in a JSON table The "Key" text-field lets you enter the name of the JSON element to be modified/inserted. The 2nd text field is used for the "Value" field which holds the actual data you want to store. The vJSONSet node makes it possible to create new JSON data structures that can be saved to disk using a vJSONToFile node.

<div className="node-badge-row">
  <span className="node-badge">Core / JSON</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/json/vJSONSet.png" alt="vJSONSet node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | JSON text to modify. |
| Key | Text | `—` | Name of the key to insert or update. |
| Value | Text | `—` | Value to store under Key. |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |
| Get Key | Float | `—` | Renames this node to `json_<Key>`, making it easy to identify which key it sets at a glance. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONGet">vJSONGet</a>
  <a className="node-chip" href="./vJSONGetElement">vJSONGetElement</a>
</div>

{/*
Generated page — node: vJSONSet (Core/JSON/Key Value).
Source: fuse vJSONSet.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
