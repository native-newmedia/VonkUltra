---
sidebar_position: 1
title: vYAMLViewer
description: "View YAML in the Inspector"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vYAMLViewer

View YAML in the Inspector

<div className="node-badge-row">
  <span className="node-badge">Core / YAML</span>
  <span className="node-badge">YAML</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/yaml/vYAMLViewer.png" alt="vYAMLViewer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | DATATYPE | `—` | YAML-formatted text to inspect — typically fed from a vScriptValFromYAML or file-read node. |
| Show Dump | Integer | `0.0` | Prints the parsed YAML structure to the console each frame, in addition to the tree view below. |
| Sort List | Integer | `0.0` | Sorts keys alphabetically in the tree view below, instead of showing them in source order. |
| Display Lines | Integer | `25` | Number of visible lines in the tree view before scrolling. |
| YAML | ScriptVal | `—` | Read-only tree view of the parsed YAML structure. |



{/*
Generated page — node: vYAMLViewer (Core/YAML/Utility).
Source: fuse vYAMLViewer.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
