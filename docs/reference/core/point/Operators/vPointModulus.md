---
sidebar_position: 6
title: vPointModulus
description: "Returns the remainder of the division of a Fusion Point object that rounds the quotient towards zero The \"Divisor X\" and \"Divisor Y\" controls make it possible…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointModulus

Returns the remainder of the division of a Fusion Point object that rounds the quotient towards zero The "Divisor X" and "Divisor Y" controls make it possible to create a looping effect that wraps the Point locator on each axis of motion so it stays within a range of 0 to (one less than the Divisor value).

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointModulus.png" alt="vPointModulus node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point | Point | `—` | Point to wrap. |
| Divisor X | Float | `1.0` | Wrap range for the X axis — X output loops within 0 to (Divisor X − 1). |
| Divisor Y | Float | `1.0` | Wrap range for the Y axis — Y output loops within 0 to (Divisor Y − 1). |
| Show Input | Integer | `1.0` | Reveals the wire for the Point connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointAbsolute">vPointAbsolute</a>
  <a className="node-chip" href="./vPointAdd">vPointAdd</a>
  <a className="node-chip" href="./vPointClamp">vPointClamp</a>
  <a className="node-chip" href="./vPointDivide">vPointDivide</a>
</div>

{/*
Generated page — node: vPointModulus (Core/Point/Operators).
Source: fuse vPointModulus.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
