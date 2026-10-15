---
sidebar_position: 9
title: vScriptValReducePoints
description: "Reduce points Operations on a ScriptVal Decimation Method options include: - Grid-Based - Random Sampling - Curvature-Based (SLOW)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValReducePoints

Reduce points Operations on a ScriptVal Decimation Method options include: - Grid-Based - Random Sampling - Curvature-Based (SLOW)

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValReducePoints.png" alt="vScriptValReducePoints node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Decimation Method | Dropdown | `Grid-Based` | Grid-Based, Random Sampling, or Curvature-Based (slow). |
| Grid Size | Float | `0.01` | Cell size of the grid. Shown for Grid-Based and Curvature-Based. |
| Target Count | Float | `3.0` | Number of points kept. Shown for Random Sampling and Curvature-Based. |
| Seed | Integer | `0` | — |
| Neighborhood Size | Float | `0.2` | Search radius for the curvature pass. Shown for Curvature-Based. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `0.0` | Shows the three parameter input socket on the node. |
| Input | ScriptVal | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointsOnSphere.Output -> vScriptValReducePoints.ScriptVal
    vScriptValReducePoints.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValReducePoints (ScriptVal/Utility).
Source: fuse vScriptValReducePoints.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
