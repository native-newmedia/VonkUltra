---
sidebar_position: 5
title: vMatrixMultiply
description: "Multiplies two matrices It is possible combine separate rotation, translation, and scale matrices using a series of connected vMatrixMultiply nodes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixMultiply

Multiplies two matrices It is possible combine separate rotation, translation, and scale matrices using a series of connected vMatrixMultiply nodes.

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixMultiply.png" alt="vMatrixMultiply node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Matrix1 | Text | `—` | First matrix operand. |
| Matrix2 | Text | `—` | Second matrix operand — Output is Matrix1 × Matrix2. Chain several vMatrixMultiply nodes to combine separate rotation, translation, and scale matrices. |
| Show Input | Integer | `1.0` | Reveals the wires for the Matrix1/Matrix2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixDeterminant">vMatrixDeterminant</a>
  <a className="node-chip" href="./vMatrixDivide">vMatrixDivide</a>
  <a className="node-chip" href="./vMatrixDivideNumber">vMatrixDivideNumber</a>
  <a className="node-chip" href="./vMatrixInvert">vMatrixInvert</a>
</div>

{/*
Generated page — node: vMatrixMultiply (Core/Matrix/Operators).
Source: fuse vMatrixMultiply.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
