---
sidebar_position: 56
title: vJSONTorus
description: "Generate points on a torus."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONTorus

Generate points on a torus.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONTorus.png" alt="vJSONTorus node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Major Radius | Float | `0.35` | Radius of the ring. |
| Minor Radius | Float | `0.1` | Radius of the tube. |
| U Segments | Integer | `24` | Segments around the ring. |
| V Segments | Integer | `12` | Segments around the tube. |
| U Sweep | Float | `360` | Angle covered around the ring. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include End | Integer | `0.0` | Repeats the first point at the end. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONTorus (JSON/Create).
Source: fuse vJSONTorus.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
