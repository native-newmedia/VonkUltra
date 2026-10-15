---
sidebar_position: 53
title: vArrayToOBJ
description: "Convert an Array into Wavefront OBJ ASCII Text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayToOBJ

Convert an Array into Wavefront OBJ ASCII Text

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayToOBJ.png" alt="vArrayToOBJ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Edges | DATATYPE | `—` | Edges that connect the points. |
| Points | DATATYPE | `—` | Point positions. |
| UVs | DATATYPE | `—` | — |
| UV Edges | DATATYPE | `—` | — |
| Matrix | Text | `—` | — |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `1.0` | Shows the input sockets of the controls. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayFromOBJ1.Points -> vArrayMergeOBJ.Points1
    vArrayFromOBJ1.Edges -> vArrayMergeOBJ.Edges1
    vArrayFromOBJ2.Points -> vArrayMergeOBJ.Points2
    vArrayFromOBJ2.Edges -> vArrayMergeOBJ.Edges2
    vArrayMergeOBJ.OutputPoints -> vArrayToOBJ.ArrayPoints
    vArrayMergeOBJ.OutputEdges -> vArrayToOBJ.ArrayEdges
    vArrayToOBJ.Output -> vTextViewer.Input
    vArrayToOBJ.Output -> vTextToFile.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Utility/vArrayMergeOBJ">vArrayMergeOBJ</a>
</div>

{/*
Generated page — node: vArrayToOBJ (Array/Create).
Source: fuse vArrayToOBJ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
