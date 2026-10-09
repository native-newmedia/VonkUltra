---
sidebar_position: 2
title: vVectorCrossProduct
description: "Computes the cross product of two vectors"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vVectorCrossProduct

Computes the cross product of two vectors. (The source fuse's own description string says "Adds two vectors" — a copy-paste leftover from vVectorAdd; the node's actual output, confirmed from its `Process` function, is the cross product.)

<div className="node-badge-row">
  <span className="node-badge">Core / Vector</span>
  <span className="node-badge">Vector</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/vector/vVectorCrossProduct.png" alt="vVectorCrossProduct node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Vector1 | Text | `—` | First vector operand (encoded as text). |
| Vector2 | Text | `—` | Second vector operand — Output is the cross product Vector1 × Vector2. |
| Show Input | Integer | `1.0` | Reveals the wires for the Vector1/Vector2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vVectorAdd">vVectorAdd</a>
  <a className="node-chip" href="./vVectorDivideNumber">vVectorDivideNumber</a>
  <a className="node-chip" href="./vVectorDotProduct">vVectorDotProduct</a>
  <a className="node-chip" href="./vVectorMultiplyNumber">vVectorMultiplyNumber</a>
</div>

{/*
Generated page — node: vVectorCrossProduct (Core/Vector/Operators).
Source: fuse vVectorCrossProduct.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
