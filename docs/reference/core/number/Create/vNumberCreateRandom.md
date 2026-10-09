---
sidebar_position: 6
title: vNumberCreateRandom
description: "Creates a Fusion Number object This node uses a pseudo-random number generator to create a number that fits within the upper and lower range that is defined."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberCreateRandom

Creates a Fusion Number object This node uses a pseudo-random number generator to create a number that fits within the upper and lower range that is defined. If you animate the seed value, the number will change on each frame.

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberCreateRandom.png" alt="vNumberCreateRandom node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Seed | Integer | `0` | Seeds the random number generator — animate this value to get a new random number on each frame. |
| Upper | Integer | `0` | Upper bound of the random range. |
| Lower | Integer | `0` | Lower bound of the random range. |
| Show Input | Integer | `1.0` | Reveals the wires for the Seed/Upper/Lower connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberCreate">vNumberCreate</a>
  <a className="node-chip" href="./vNumberCreateArch">vNumberCreateArch</a>
  <a className="node-chip" href="./vNumberCreateBool">vNumberCreateBool</a>
  <a className="node-chip" href="./vNumberCreateMultiButton">vNumberCreateMultiButton</a>
</div>

{/*
Generated page — node: vNumberCreateRandom (Core/Number/Create).
Source: fuse vNumberCreateRandom.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
