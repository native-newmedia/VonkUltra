---
sidebar_position: 7
title: vMatrixToTranslation
description: "Decomposes translation from a matrix."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixToTranslation

Decomposes translation from a matrix. This returns XYZ rotation values from a 4x4 vMatrix input.

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixToTranslation.png" alt="vMatrixToTranslation node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | 4×4 matrix to decompose. |
| X Offset | Float | `—` | Read-only output of the matrix's X translation component. |
| Y Offset | Float | `—` | Read-only output of the matrix's Y translation component. |
| Z Offset | Float | `—` | Read-only output of the matrix's Z translation component. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixFromRotation">vMatrixFromRotation</a>
  <a className="node-chip" href="./vMatrixFromScale">vMatrixFromScale</a>
  <a className="node-chip" href="./vMatrixFromTranslation">vMatrixFromTranslation</a>
  <a className="node-chip" href="./vMatrixToEuler">vMatrixToEuler</a>
</div>

{/*
Generated page — node: vMatrixToTranslation (Core/Matrix/Transform).
Source: fuse vMatrixToTranslation.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
