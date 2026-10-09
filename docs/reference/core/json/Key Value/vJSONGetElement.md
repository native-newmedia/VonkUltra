---
sidebar_position: 2
title: vJSONGetElement
description: "Gets the element of a JSON array The \"Index\" control is used to access individual entries from a JSON array type of object."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONGetElement

Gets the element of a JSON array The "Index" control is used to access individual entries from a JSON array type of object. The node expects a text based JSON array object as the input. The output from the vJSONGetElement node is a text based data type. It is possible to translate the text based output from this node into numerical values via the vNumberFromText node. The first item is accessed at Index position 1.

<div className="node-badge-row">
  <span className="node-badge">Core / JSON</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/json/vJSONGetElement.png" alt="vJSONGetElement node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | JSON array text to query. |
| Index | Integer | `1` | 1-based position of the element to retrieve. |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONGet">vJSONGet</a>
  <a className="node-chip" href="./vJSONSet">vJSONSet</a>
</div>

{/*
Generated page — node: vJSONGetElement (Core/JSON/Key Value).
Source: fuse vJSONGetElement.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
