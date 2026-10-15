---
sidebar_position: 15
title: vArrayRenderSweepProfile
description: "Sweep a profile along a path and output ribbon/tube mesh data."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderSweepProfile

Sweep a profile along a path and output ribbon/tube mesh data.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderSweepProfile.png" alt="vArrayRenderSweepProfile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Close Profile | Integer | `1` | Connects the last profile point to the first. |
| Closed Path | Integer | `0` | Connects the last path point to the first. |
| Caps | Integer | `1` | Closes the ends of the swept mesh. |
| Default Width | Float | `1` | Width used when no Width input is connected. |
| Path/Packet | DATATYPE | `—` | — |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Profile | DATATYPE | `—` | — |
| Width | DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayColor">vArrayColor</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
</div>

{/*
Generated page — node: vArrayRenderSweepProfile (Array/ShapeRender).
Source: fuse vArrayRenderSweepProfile.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
