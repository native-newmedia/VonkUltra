---
sidebar_position: 1
title: vGuideCreate
description: "Create a vGuide object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGuideCreate

Create a vGuide object

<div className="node-badge-row">
  <span className="node-badge">Core / Guide</span>
  <span className="node-badge">Guide</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/guide/vGuideCreate.png" alt="vGuideCreate node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Guide Name | Text | `—` | Name assigned to the combined guide, stored in the output ScriptVal's `Name` field. |
| Which | Integer | `—` | Internal control tracking how many ScriptVal inputs are currently connected. Not meant to be set manually. |
| Show Dump | Integer | `0.0` | Prints the assembled guide table to the console each frame — useful for checking the merged output while building a guide chain. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGuideShape">vGuideShape</a>
  <a className="node-chip" href="./vGuideText">vGuideText</a>
</div>

{/*
Generated page — node: vGuideCreate (Core/Guide/Create).
Source: fuse vGuideCreate.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
