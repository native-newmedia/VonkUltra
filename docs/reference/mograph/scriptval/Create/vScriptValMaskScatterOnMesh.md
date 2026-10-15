---
sidebar_position: 33
title: vScriptValMaskScatterOnMesh
description: "Scatter points across OBJ mesh surface area using a density mask."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMaskScatterOnMesh

Scatter points across OBJ mesh surface area using a density mask.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMaskScatterOnMesh.png" alt="vScriptValMaskScatterOnMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Text. |
| Filename | Text | `—` | File to read. Shown when Input Source is File. |
| URL | Text | `—` | Address to read. Shown when Input Source is URL. |
| Input | Text | `—` | Text to read. Shown when Input Source is Text. |
| Mask Source | Dropdown | `None` | None, Array or Image. |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mask Array Input | Text | `—` | Mask values. Shown when Mask Source is Array. |
| Mask Image Input | Image | `—` | — |
| Map Scale X | Float | `1` | Scale of the mask image along X. Shown when Mask Source is Image. |
| Map Scale Y | Float | `1` | Scale of the mask image along Y. Shown when Mask Source is Image. |
| Map Offset X | Float | `0` | Offset of the mask image along X. Shown when Mask Source is Image. |
| Map Offset Y | Float | `0` | Offset of the mask image along Y. Shown when Mask Source is Image. |
| Debug Image Mapping | Float | `0` | Shows how the image maps to the mesh. Shown when Mask Source is Image. |
| Debug Plane Z | Float | `0` | Z position of the debug plane. Shown when debug is on. |
| Debug Sample Step | Integer | `20` | Sampling step of the debug display. Shown when debug is on. |
| Scale File Units By | Float | `1` | Multiplies the coordinates of the file. |
| Point Count | Integer | `1000` | Number of points. |
| Random Seed | Integer | `0` | Seed of the random generator. |
| Invert Mask | Float | `0` | Swaps high and low mask values. |
| Mask Bias | Float | `1` | Shifts the mask values. |
| Surface Offset | Float | `0` | Moves the points away from the surface along the normal. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValMaskScatterOnMesh (ScriptVal/Create).
Source: fuse vScriptValMaskScatterOnMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
