---
sidebar_position: 1
title: vMTLXToFile
description: "Writes an XML string to a MaterialX file"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMTLXToFile

Writes an XML string to a MaterialX file

<div className="node-badge-row">
  <span className="node-badge">Core / MTLX</span>
  <span className="node-badge">MTLX</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/mtlx/vMTLXToFile.png" alt="vMTLXToFile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| MTLX File | Text | `—` | Destination path for the saved MaterialX (`.mtlx`) file. Hidden until Show Input is enabled. |
| Font Size | Dropdown | `14` | Font size used in the XML text preview below. |
| Display Lines | Integer | `25` | Number of visible lines in the XML preview before scrolling. |
| Wrap Lines | Integer | `1.0` | Wraps long lines in the XML preview instead of scrolling horizontally. |
| XML | Text | `—` | The MaterialX XML content to write, typically fed from vMTLXUsdPreviewSurface or vMTLXMerge. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | Reveals the MTLX File path control so a destination can be chosen or typed. |

</details>



{/*
Generated page — node: vMTLXToFile (Core/MTLX/IO).
Source: fuse vMTLXToFile.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
