---
sidebar_position: 3
title: vGuideText
description: "Create a vGuide object from Lua table formatted text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGuideText

Create a vGuide object from Lua table formatted text

<div className="node-badge-row">
  <span className="node-badge">Core / Guide</span>
  <span className="node-badge">Guide</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/guide/vGuideText.png" alt="vGuideText node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | Lua table source defining the guide's elements, using the same `Rectangle`/`VLine`/`HLine`/`Grid` syntax vGuideShape generates. Write or paste guide definitions directly. |
| Display Lines | Integer | `15` | Number of visible lines in the text editor. A UI sizing control only — has no effect on the guide data itself. |
| Wrap Lines | Integer | `1.0` | Wraps long lines in the text editor instead of scrolling horizontally. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGuideCreate">vGuideCreate</a>
  <a className="node-chip" href="./vGuideShape">vGuideShape</a>
</div>

{/*
Generated page — node: vGuideText (Core/Guide/Create).
Source: fuse vGuideText.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
