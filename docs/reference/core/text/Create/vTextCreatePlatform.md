---
sidebar_position: 6
title: vTextCreatePlatform
description: "Creates a unique Fusion Text object per OS platform This node provides a series of text fields that allow you to enter three different string values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextCreatePlatform

Creates a unique Fusion Text object per OS platform This node provides a series of text fields that allow you to enter three different string values. The correct string that matches the current operating system platform will be returned when the comp is rendered. This node is a handy way to define the correct parameters to use with a vTextSubFormat or ProcessOpen node.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextCreatePlatform.png" alt="vTextCreatePlatform node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| macOS | Text | `—` | String returned when rendering on macOS. |
| Windows | Text | `—` | String returned when rendering on Windows. |
| Linux | Text | `—` | String returned when rendering on Linux. |
| Expand PathMaps | Integer | `0.0` | Converts a relative PathMap-based filepath into an absolute path on the output. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCreate">vTextCreate</a>
  <a className="node-chip" href="./vTextCreateArch">vTextCreateArch</a>
  <a className="node-chip" href="./vTextCreateBrowse">vTextCreateBrowse</a>
  <a className="node-chip" href="./vTextCreateMultiline">vTextCreateMultiline</a>
</div>

{/*
Generated page — node: vTextCreatePlatform (Core/Text/Create).
Source: fuse vTextCreatePlatform.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
