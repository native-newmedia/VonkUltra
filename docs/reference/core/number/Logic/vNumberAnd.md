---
sidebar_position: 1
title: vNumberAnd
description: "Performs a logical AND operation on two numbers"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vNumberAnd

Performs a logical AND operation on two numbers

<div className="node-badge-row">
  <span className="node-badge">Core / Number</span>
  <span className="node-badge">Number</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/number/vNumberAnd.png" alt="vNumberAnd node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Term 1 | Float | `0` | First value (treated as false when 0, true otherwise). |
| Term1Separator | Float | `—` | A UI separator, not a real setting. |
| Term 2 | Float | `0` | Second value — Output is 1 only if both Term 1 and Term 2 are true (non-zero), otherwise 0. |
| Show Input | Integer | `0.0` | Reveals the wires for the Term 1/Term 2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vNumberEqual">vNumberEqual</a>
  <a className="node-chip" href="./vNumberGreater">vNumberGreater</a>
  <a className="node-chip" href="./vNumberGreaterEqual">vNumberGreaterEqual</a>
  <a className="node-chip" href="./vNumberLess">vNumberLess</a>
</div>

{/*
Generated page — node: vNumberAnd (Core/Number/Logic).
Source: fuse vNumberAnd.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
