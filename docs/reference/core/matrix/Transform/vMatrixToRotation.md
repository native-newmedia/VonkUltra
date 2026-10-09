---
sidebar_position: 5
title: vMatrixToRotation
description: "Decomposes a rotation from a matrix in [Euler angles](https://en.wikipedia.org/wiki/Euler_angles)."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixToRotation

Decomposes a rotation from a matrix in [Euler angles](https://en.wikipedia.org/wiki/Euler_angles). This returns XYZ rotation values from a 4x4 vMatrix input.

<div className="node-badge-row">
  <span className="node-badge">Core / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/matrix/vMatrixToRotation.png" alt="vMatrixToRotation node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | 4×4 matrix to decompose — Output is its rotation as X/Y/Z Euler angle values. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixFromRotation">vMatrixFromRotation</a>
  <a className="node-chip" href="./vMatrixFromScale">vMatrixFromScale</a>
  <a className="node-chip" href="./vMatrixFromTranslation">vMatrixFromTranslation</a>
  <a className="node-chip" href="./vMatrixToEuler">vMatrixToEuler</a>
</div>

{/*
Generated page — node: vMatrixToRotation (Core/Matrix/Transform).
Source: fuse vMatrixToRotation.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
