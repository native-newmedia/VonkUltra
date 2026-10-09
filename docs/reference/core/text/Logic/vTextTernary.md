---
sidebar_position: 3
title: vTextTernary
description: "Compare a value and return one of two possible strings as the result"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextTernary

Compare a value and return one of two possible strings as the result

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextTernary.png" alt="vTextTernary node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Term 1 | Float | `0` | Condition — treated as false when 0, true otherwise. |
| Term1Separator | Float | `—` | A UI separator, not a real setting. |
| True | Text | `—` | String output when Term 1 is true. |
| False | Text | `—` | String output when Term 1 is false. |
| Display Lines | Integer | `5` | Number of lines shown in the True/False text boxes in the Inspector. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Wrap Lines | Integer | `1.0` | Wraps long lines in the True/False text boxes instead of scrolling horizontally. |
| Show Input | Integer | `0.0` | Reveals the wire for the Term 1 connection in the Flow view. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextEqual">vTextEqual</a>
  <a className="node-chip" href="./vTextNotEqual">vTextNotEqual</a>
</div>

{/*
Generated page — node: vTextTernary (Core/Text/Logic).
Source: fuse vTextTernary.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
