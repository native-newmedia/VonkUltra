---
sidebar_position: 7
title: vTextCreatePlatformBrowse
description: "Creates a unique Fusion Text object per OS platform This node provides a series of Browse buttons and text fields that allow you to enter three different string values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextCreatePlatformBrowse

Creates a unique Fusion Text object per OS platform This node provides a series of Browse buttons and text fields that allow you to enter three different string values. The correct string that matches the current operating system platform will be returned when the comp is rendered. This node is a handy way to define the correct parameters to use with a vTextSubFormat or ProcessOpen node.

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextCreatePlatformBrowse.png" alt="vTextCreatePlatformBrowse node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mac | Text | `—` | String used when rendering on macOS — click Browse to fill it in via a file picker dialog. |
| Windows | Text | `—` | String used when rendering on Windows — click Browse to fill it in via a file picker dialog. |
| Linux | Text | `—` | String used when rendering on Linux — click Browse to fill it in via a file picker dialog. |
| Expand PathMaps | Integer | `0.0` | Converts a relative PathMap-based filepath into an absolute path on the output. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextCreate">vTextCreate</a>
  <a className="node-chip" href="./vTextCreateArch">vTextCreateArch</a>
  <a className="node-chip" href="./vTextCreateBrowse">vTextCreateBrowse</a>
  <a className="node-chip" href="./vTextCreateMultiline">vTextCreateMultiline</a>
</div>

{/*
Generated page — node: vTextCreatePlatformBrowse (Core/Text/Create).
Source: fuse vTextCreatePlatformBrowse.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
