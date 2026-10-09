---
sidebar_position: 13
title: vNumberMix
description: "Performs a linear interpolation between two numbers"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberMix

Performs a linear interpolation between two numbers

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberMix.png" alt="vNumberMix node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Number1 | Float | `0` | Value at Weight = 0. |
| Number2 | Float | `0` | Value at Weight = 1. |
| Weight | Float | `0` | Interpolation factor between Number1 (0) and Number2 (1). Values outside 0–1 extrapolate beyond either number. |
| Show Input | Integer | `0.0` | Reveals the wires for the Number1/Number2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberAbsolute">vNumberAbsolute</a>
  <a className="node-chip" href="./vNumberAdd">vNumberAdd</a>
  <a className="node-chip" href="./vNumberCeil">vNumberCeil</a>
  <a className="node-chip" href="./vNumberClamp">vNumberClamp</a>
</div>

{/*
Generated page — node: vNumberMix (Core/Number/Operators).
Source: fuse vNumberMix.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
