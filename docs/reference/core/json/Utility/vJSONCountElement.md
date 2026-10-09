---
sidebar_position: 1
title: vJSONCountElement
description: "Counts the elements in a JSON array The node expects a text based JSON array object as the input."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONCountElement

Counts the elements in a JSON array The node expects a text based JSON array object as the input. This node returns a number data type that indicates how many array elements exist at this level in a JSON hierarchy. This return value could be used to drive a vTextAccumulator node's EndFrame attribute if you wanted to increment through each of the array elements.

<div className="node-badge-row">
  <span className="node-badge">Core / JSON</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/json/vJSONCountElement.png" alt="vJSONCountElement node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | JSON array text to count. Output is the number of elements at this level of the hierarchy — useful for driving a vTextAccumulator's EndFrame to step through each element. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONViewer">vJSONViewer</a>
</div>

{/*
Generated page — node: vJSONCountElement (Core/JSON/Utility).
Source: fuse vJSONCountElement.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
