---
sidebar_position: 10
title: vArrayFromImage
description: "Creates an Array from Image."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromImage

Creates an Array from Image.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromImage.png" alt="vArrayFromImage node" />
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
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayAttractorPoints">vArrayAttractorPoints</a>
</div>

{/*
Generated page — node: vArrayFromImage (Array/Create).
Source: fuse vArrayFromImage.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
