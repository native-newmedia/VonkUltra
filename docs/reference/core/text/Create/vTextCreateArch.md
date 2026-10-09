---
sidebar_position: 2
title: vTextCreateArch
description: "Creates a unique Fusion Text object per CPU architecture This node provides a series of text fields that allow you to enter three different string values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextCreateArch

Creates a unique Fusion Text object per CPU architecture This node provides a series of text fields that allow you to enter three different string values. The correct string that matches the current CPU architecture will be returned when the comp is rendered.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextCreateArch.png" alt="vTextCreateArch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| x86 | Text | `—` | String returned when rendering on a 32-bit Intel/AMD CPU. |
| x64 | Text | `—` | String returned when rendering on a 64-bit Intel/AMD CPU. |
| ARM64 | Text | `—` | String returned when rendering on an ARM 64-bit CPU (e.g. Apple Silicon). |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCreate">vTextCreate</a>
  <a className="node-chip" href="./vTextCreateBrowse">vTextCreateBrowse</a>
  <a className="node-chip" href="./vTextCreateMultiline">vTextCreateMultiline</a>
  <a className="node-chip" href="./vTextCreateMultilineCode">vTextCreateMultilineCode</a>
</div>

{/*
Generated page — node: vTextCreateArch (Core/Text/Create).
Source: fuse vTextCreateArch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
