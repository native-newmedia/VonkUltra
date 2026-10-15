---
sidebar_position: 30
title: vScriptValLocatorAsset
description: "Create a ScriptVal based 3D locator cursor asset"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValLocatorAsset

Create a ScriptVal based 3D locator cursor asset

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValLocatorAsset.png" alt="vScriptValLocatorAsset node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Asset Name | Text | `—` | Name of the asset. |
| Asset Version | Integer | `1` | Version of the asset. |
| Locator | Dropdown | `Gnomon Locator` | Locator, camera or light symbol. Options: Gnomon Locator, Plus Locator, Camera Locator, Ambient Light, Area Light, Directional Light, Dome Light, Point Light, Spot Light, Sphere Light, Tube Light. |
| Matrix | Text | `—` | — |
| Red | Float | `0.0` | Color of the asset. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
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
vMatrixCreateTRS.Output -> vScriptValLocatorAsset.Matrix
    vScriptValLocatorAsset.Output -> vScriptValMergeAsset.ScriptVal
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../../Matrix/Create/vMatrixCreateTRS">vMatrixCreateTRS</a>
  <a className="node-chip" href="../Utility/vScriptValMergeAsset">vScriptValMergeAsset</a>
  <a className="node-chip" href="../ShapeRender/vScriptValRenderAsset">vScriptValRenderAsset</a>
</div>

{/*
Generated page — node: vScriptValLocatorAsset (ScriptVal/Create).
Source: fuse vScriptValLocatorAsset.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
