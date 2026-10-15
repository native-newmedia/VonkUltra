---
sidebar_position: 4
title: vJSONCreateAsset
description: "Create a JSON-based 3D asset from JSON text payload of Points, Edges, and Matrix data."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONCreateAsset

Create a JSON-based 3D asset from JSON text payload of Points, Edges, and Matrix data.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONCreateAsset.png" alt="vJSONCreateAsset node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Asset Name | Text | `—` | Name of the asset. |
| Asset Version | Integer | `1` | Version of the asset. |
| Points | Text | `—` | Point positions. |
| Edges | Text | `—` | Edges that connect the points. |
| UVs | Text | `—` | — |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| UV Edges | Text | `—` | — |
| Matrix | Text | `—` | — |
| Red | Float | `0.0` | Color of the asset. |
| Green | Float | `1.0` | Color of the asset. |
| Blue | Float | `1.0` | Color of the asset. |
| Alpha | Float | `1.0` | Color of the asset. |
| Soft Edge | Float | `0` | Softness of the asset edges. |
| Show Input | Integer | `1.0` | Shows the input sockets of the controls. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
  <a className="node-chip" href="./vJSONCubicBezier">vJSONCubicBezier</a>
</div>

{/*
Generated page — node: vJSONCreateAsset (JSON/Create).
Source: fuse vJSONCreateAsset.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
