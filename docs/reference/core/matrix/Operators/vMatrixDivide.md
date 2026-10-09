---
sidebar_position: 2
title: vMatrixDivide
description: "Divides two matrices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixDivide

Divides two matrices, element-wise. (The old Docsify source text said "Divides a matrix by a number" — a copy-paste leftover from vMatrixDivideNumber; the fuse's own `REGS_OpDescription` and its two-matrix `Matrix1`/`Matrix2` inputs confirm it actually operates on two matrices.)

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixDivide.png" alt="vMatrixDivide node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Matrix1 | Text | `—` | First matrix operand. |
| Matrix2 | Text | `—` | Second matrix operand — Matrix1 is divided by it, element-wise. |
| Show Input | Integer | `1.0` | Reveals the wires for the Matrix1/Matrix2 connections in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixDeterminant">vMatrixDeterminant</a>
  <a className="node-chip" href="./vMatrixDivideNumber">vMatrixDivideNumber</a>
  <a className="node-chip" href="./vMatrixInvert">vMatrixInvert</a>
  <a className="node-chip" href="./vMatrixMultiply">vMatrixMultiply</a>
</div>

{/*
Generated page — node: vMatrixDivide (Core/Matrix/Operators).
Source: fuse vMatrixDivide.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
