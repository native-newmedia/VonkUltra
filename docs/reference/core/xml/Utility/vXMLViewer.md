---
sidebar_position: 1
title: vXMLViewer
description: "View XML in the Inspector."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vXMLViewer

View XML in the Inspector.

<div className="node-badge-row">
  <span className="node-badge">Core / XML</span>
  <span className="node-badge">XML</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/xml/vXMLViewer.png" alt="vXMLViewer node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Dump | Integer | `0.0` | Prints the parsed XML structure to the console each frame, in addition to the tree view below. |
| Sort List | Integer | `0.0` | Sorts keys alphabetically in the tree view below, instead of showing them in source order. |
| Display Lines | Integer | `25` | Number of visible lines in the tree view before scrolling. |
| XML | ScriptVal | `—` | Read-only tree view of the parsed XML structure. |
| Text | Text | `—` | XML text to inspect — typically fed from a vScriptValFromXML or file-read node. |



{/*
Generated page — node: vXMLViewer (Core/XML/Utility).
Source: fuse vXMLViewer.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
