---
sidebar_position: 12
title: vArrayFromPolyline
description: "Sample a drawn Polyline into a vArray point list using arc-length uniform sampling."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromPolyline

Sample a drawn Polyline into a vArray point list using arc-length uniform sampling.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromPolyline.png" alt="vArrayFromPolyline node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Reset Path | Integer | `0.0` | — |
| Point Count | Integer | `64` | Number of points. |
| Closed Loop | Integer | `0.0` | Connects the last point to the first. |
| Flip Y | Integer | `1.0` | Mirrors the result along Y. |
| Flip X | Integer | `1.0` | Mirrors the result along X. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Aspect Correct | Integer | `1.0` | Corrects for the aspect ratio of the image. |
| Scale X | Float | `2.0` | Scale along X. |
| Scale Y | Float | `2.0` | Scale along Y. |
| Canvas R | Float | `0.15` | Background color red. |
| Canvas G | Float | `0.15` | Background color green. |
| Canvas B | Float | `0.25` | Background color blue. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayAttractorPoints">vArrayAttractorPoints</a>
</div>

{/*
Generated page — node: vArrayFromPolyline (Array/Create).
Source: fuse vArrayFromPolyline.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
