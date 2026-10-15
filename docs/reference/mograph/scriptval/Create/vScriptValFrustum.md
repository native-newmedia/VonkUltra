---
sidebar_position: 17
title: vScriptValFrustum
description: "Generate points on a cone or frustum."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFrustum

Generate points on a cone or frustum.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFrustum.png" alt="vScriptValFrustum node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Bottom Radius | Float | `0.2` | Radius at the bottom. |
| Top Radius | Float | `0.1` | Radius at the top. |
| Height | Float | `0.5` | Height. |
| Radial Segments | Integer | `24` | Segments around the axis. |
| Height Segments | Integer | `8` | Segments along the height. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include Caps | Integer | `1` | Adds the end caps. |
| Cap Rings | Integer | `4` | Rings on each cap. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValFrustum (ScriptVal/Create).
Source: fuse vScriptValFrustum.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
