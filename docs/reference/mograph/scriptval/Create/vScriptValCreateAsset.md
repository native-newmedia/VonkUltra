---
sidebar_position: 4
title: vScriptValCreateAsset
description: "Create a ScriptVal based 3D asset from Edge, Point, and vMatrix data"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCreateAsset

Create a ScriptVal based 3D asset from Edge, Point, and vMatrix data

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCreateAsset.png" alt="vScriptValCreateAsset node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Asset Name | Text | `—` | Name of the asset. |
| Asset Version | Integer | `1` | Version of the asset. |
| Points | ScriptVal | `—` | Point positions. |
| Edges | ScriptVal | `—` | Edges that connect the points. |
| UVs | ScriptVal | `—` | — |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| UV Edges | ScriptVal | `—` | — |
| Matrix | Text | `—` | — |
| Red | Float | `0.0` | Color of the asset. |
| Green | Float | `1.0` | Color of the asset. |
| Blue | Float | `1.0` | Color of the asset. |
| Alpha | Float | `1.0` | Color of the asset. |
| Soft Edge | Float | `0` | Softness of the asset edges. |
| Show Input | Integer | `1.0` | Shows the input sockets of the controls. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValFromOBJ.ScriptValPoints -> vScriptValCreateAsset.ScriptValPoints
    vScriptValFromOBJ.ScriptValEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValFromOBJ.ScriptValUVs -> vScriptValCreateAsset.ScriptValUVs
    vScriptValFromOBJ.ScriptValUVEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValCreateAsset.Output -> vScriptValMergeAsset.ScriptVal1
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromOBJ">vScriptValFromOBJ</a>
  <a className="node-chip" href="../Utility/vScriptValMergeAsset">vScriptValMergeAsset</a>
  <a className="node-chip" href="../ShapeRender/vScriptValRenderAsset">vScriptValRenderAsset</a>
</div>

{/*
Generated page — node: vScriptValCreateAsset (ScriptVal/Create).
Source: fuse vScriptValCreateAsset.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
