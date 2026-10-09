---
sidebar_position: 6
title: vMatrixToScale
description: "Decomposes scale from a matrix."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixToScale

Decomposes scale from a matrix. This returns XYZ scale values from a 4x4 vMatrix input.

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixToScale.png" alt="vMatrixToScale node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | 4×4 matrix to decompose. |
| X Scale | Float | `—` | Read-only output of the matrix's X scale component. |
| Y Scale | Float | `—` | Read-only output of the matrix's Y scale component. |
| Z Scale | Float | `—` | Read-only output of the matrix's Z scale component. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixFromRotation">vMatrixFromRotation</a>
  <a className="node-chip" href="./vMatrixFromScale">vMatrixFromScale</a>
  <a className="node-chip" href="./vMatrixFromTranslation">vMatrixFromTranslation</a>
  <a className="node-chip" href="./vMatrixToEuler">vMatrixToEuler</a>
</div>

{/*
Generated page — node: vMatrixToScale (Core/Matrix/Transform).
Source: fuse vMatrixToScale.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
