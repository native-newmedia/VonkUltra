---
sidebar_position: 3
title: vPointCreateRandom
description: "Create a Fusion Point object with a random position."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointCreateRandom

Create a Fusion Point object with a random position.

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointCreateRandom.png" alt="vPointCreateRandom node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| SeedX | Integer | `0` | Seed for the X value's random generator. Different seeds produce different values; animate it for evolving randomness. |
| SeedY | Integer | `0` | Seed for the Y value's random generator, independent of SeedX. |
| Upper | Integer | `1` | Upper bound of the random range, shared by both X and Y. |
| Lower | Integer | `0` | Lower bound of the random range, shared by both X and Y. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointCreate">vPointCreate</a>
  <a className="node-chip" href="./vPointCreateImage">vPointCreateImage</a>
  <a className="node-chip" href="./vPointFromMousePos">vPointFromMousePos</a>
</div>

{/*
Generated page — node: vPointCreateRandom (Core/Point/Create).
Source: fuse vPointCreateRandom.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
