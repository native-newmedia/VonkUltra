---
sidebar_position: 1
title: vMatrixFromMOVE
description: "Import translation matrix content from the Maya MOVE ASCII format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMatrixFromMOVE

Import translation matrix content from the Maya MOVE ASCII format

<div className="node-badge-row">
  <span className="node-badge">Mograph / Matrix</span>
  <span className="node-badge">Matrix</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/matrix/vMatrixFromMOVE.png" alt="vMatrixFromMOVE node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |
| URL | Text | `—` | — |
| Input | Text | `—` | — |
| Channel 1 | Dropdown | `Translate` | — |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Channel 2 | Dropdown | `Rotate` | — |
| Channel 3 | Dropdown | `Scale` | — |
| Rotation Order | Dropdown | ` XYZ ` | — |
| Scale File Units By | Float | `1` | — |
| Timing Mode | Dropdown | `Timecode` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vTextCreateMultilineCode.Output -> vMatrixFromMOVE.Input
    vMatrixFromMOVE.Output -> vMatrixViewer.Matrix1
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMatrixToMOVE">vMatrixToMOVE</a>
</div>

{/*
Generated page — node: vMatrixFromMOVE (Matrix/IO).
Source: fuse vMatrixFromMOVE.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
