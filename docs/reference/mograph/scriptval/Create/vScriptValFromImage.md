---
sidebar_position: 10
title: vScriptValFromImage
description: "Creates a ScriptVal array from Image."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromImage

Creates a ScriptVal array from Image.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFromImage.png" alt="vScriptValFromImage node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Image Input | Image | `—` | — |
| Sample Step | Integer | `10` | Distance between samples in pixels. |
| Threshold | Float | `0.5` | Samples above this value are kept. |
| Channel (0=R,1=G,2=B,3=A) | Integer | `0` | Channel that is tested. |
| Invert | Integer | `0` | Keeps samples below the threshold. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Preserve Image Aspect | Integer | `1` | Keeps the aspect ratio of the image. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValFromImage (ScriptVal/Create).
Source: fuse vScriptValFromImage.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
