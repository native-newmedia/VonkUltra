---
sidebar_position: 14
title: vArrayFromPolylineMulti
description: "Sample up to 8 drawn Polylines into a single vArray point list with per-path groups."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromPolylineMulti

Sample up to 8 drawn Polylines into a single vArray point list with per-path groups.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromPolylineMulti.png" alt="vArrayFromPolylineMulti node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Path Count | Integer | `2` | Number of polylines used. |
| Point Count (Global) | Integer | `64` | Number of points per path. |
| Closed Loop (Global) | Integer | `0.0` | Connects the last point of each path to the first. |
| Flip Y | Integer | `1.0` | Mirrors the result along Y. |
| Flip X | Integer | `1.0` | Mirrors the result along X. |

<details>
<summary>+10 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Aspect Correct | Integer | `1.0` | Corrects for the aspect ratio of the image. |
| Scale X | Float | `2.0` | Scale along X. |
| Scale Y | Float | `2.0` | Scale along Y. |
| "Reset Path " .. pid | Integer | `0.0` | — |
| Override Count | Integer | `0.0` | — |
| Count | Integer | `64` | — |
| Closed | Integer | `0.0` | — |
| Canvas R | Float | `0.05` | Background color red. |
| Canvas G | Float | `0.05` | Background color green. |
| Canvas B | Float | `0.08` | Background color blue. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayAttractorPoints">vArrayAttractorPoints</a>
</div>

{/*
Generated page — node: vArrayFromPolylineMulti (Array/Create).
Source: fuse vArrayFromPolylineMulti.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
