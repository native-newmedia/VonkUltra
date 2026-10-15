---
sidebar_position: 2
title: vArrayPointsJitter
description: "Add jitter to array points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayPointsJitter

Add jitter to array points.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayPointsJitter.png" alt="vArrayPointsJitter node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Data to process. |
| Jitter X | Float | `0.1` | Maximum jitter per axis. |
| Jitter Y | Float | `0.1` | Maximum jitter per axis. |
| Jitter Z | Float | `0.1` | Maximum jitter per axis. |
| Seed | Integer | `42` | Random seed. Each point gets its own offset from it. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Time | Float | `0` | Speed of the wobble. At 0 the wobble is frozen. |
| Uniform Jitter | Integer | `1.0` | On: even spread from minus to plus Jitter. Off: bell-curve spread. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayMaterialEasing">vArrayMaterialEasing</a>
  <a className="node-chip" href="./vArrayStagger">vArrayStagger</a>
</div>

{/*
Generated page — node: vArrayPointsJitter (Array/Animate).
Source: fuse vArrayPointsJitter.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
