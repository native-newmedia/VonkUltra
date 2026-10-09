---
sidebar_position: 4
title: vVectorDotProduct
description: "Computes the dot product of two vectors"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vVectorDotProduct

Computes the dot product of two vectors. (The source fuse's own description string says "Adds two vectors" — a copy-paste leftover from vVectorAdd; the node's actual output, confirmed from its `Process` function, is the dot product.)

<div className="node-badge-row">
  <span className="node-badge">Core / Vector</span>
  <span className="node-badge">Vector</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/vector/vVectorDotProduct.png" alt="vVectorDotProduct node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Vector1 | Text | `—` | First vector operand (encoded as text). |
| Vector2 | Text | `—` | Second vector operand — Output is the scalar dot product Vector1 · Vector2. |
| Show Input | Integer | `1.0` | Reveals the wires for the Vector1/Vector2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vVectorAdd">vVectorAdd</a>
  <a className="node-chip" href="./vVectorCrossProduct">vVectorCrossProduct</a>
  <a className="node-chip" href="./vVectorDivideNumber">vVectorDivideNumber</a>
  <a className="node-chip" href="./vVectorMultiplyNumber">vVectorMultiplyNumber</a>
</div>

{/*
Generated page — node: vVectorDotProduct (Core/Vector/Operators).
Source: fuse vVectorDotProduct.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
