---
sidebar_position: 10
title: vJSONFromImage
description: "Creates a JSON array from Image."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromImage

Creates a JSON array from Image.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromImage.png" alt="vJSONFromImage node" />
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
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONFromImage (JSON/Create).
Source: fuse vJSONFromImage.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
