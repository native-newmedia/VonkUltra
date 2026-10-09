---
sidebar_position: 8
title: vArrayViewer
description: "View a JSON array in the Inspector"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayViewer

View a JSON array in the Inspector

<div className="node-badge-row">
  <span className="node-badge">Core / Array</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/array/vArrayViewer.png" alt="vArrayViewer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | DATATYPE | `—` | JSON array text to inspect. |
| Show Dump | Integer | `0.0` | Prints the parsed array structure to the console each frame, in addition to the tree view below. |
| Sort List | Integer | `0.0` | Sorts keys alphabetically in the tree view below, instead of showing them in source order. |
| Display Lines | Integer | `25` | Number of visible lines in the tree view before scrolling. |
| JSON | ScriptVal | `—` | Read-only tree view of the parsed array structure. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayConcatenate">vArrayConcatenate</a>
  <a className="node-chip" href="./vArrayCountElement">vArrayCountElement</a>
  <a className="node-chip" href="./vArrayCountSubElements">vArrayCountSubElements</a>
  <a className="node-chip" href="./vArrayJoin">vArrayJoin</a>
</div>

{/*
Generated page — node: vArrayViewer (Core/Array/Utility).
Source: fuse vArrayViewer.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
