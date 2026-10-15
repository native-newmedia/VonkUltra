---
sidebar_position: 46
title: vJSONRadialSymmetry
description: "Create radial symmetry from source points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONRadialSymmetry

Create radial symmetry from source points.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONRadialSymmetry.png" alt="vJSONRadialSymmetry node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Data to process. |
| Copies | Integer | `8` | Number of copies. |
| Angle Offset | Float | `0` | Rotation of the first copy. |
| Angle Step | Float | `0` | Rotation between copies. |
| Fallback Radius | Float | `0.2` | Radius used when the points have none. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius Step | Float | `0` | Radius change per copy. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONRadialSymmetry (JSON/Create).
Source: fuse vJSONRadialSymmetry.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
