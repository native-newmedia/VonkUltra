---
sidebar_position: 1
title: vMTLXMerge
description: "Dynamically joins separate MTLX content into one"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMTLXMerge

Dynamically joins separate MTLX content into one

<div className="node-badge-row">
  <span className="node-badge">Core / MTLX</span>
  <span className="node-badge">MTLX</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/mtlx/vMTLXMerge.png" alt="vMTLXMerge node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Internal control tracking how many XML inputs are currently connected. Not meant to be set manually — every connected input is merged, regardless of this value. |
| Export XML Headers | Integer | `1.0` | Includes the MaterialX XML declaration and namespace headers in the merged output. |
| XML1 | Text | `—` | The first MaterialX XML fragment to merge. Connecting it reveals XML2 for the next fragment, and so on. |



{/*
Generated page — node: vMTLXMerge (Core/MTLX/Utility).
Source: fuse vMTLXMerge.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
