---
sidebar_position: 18
title: vArrayGenerateSphere
description: "Generates a Sphere with longitude/latitude lines"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayGenerateSphere

Generates a Sphere with longitude/latitude lines

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayGenerateSphere.png" alt="vArrayGenerateSphere node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.3` | Radius. |
| Number Lat Lines | Integer | `1` | Number of latitude lines. |
| Number Lon Lines | Integer | `1` | Number of longitude lines. |
| Trim Top | Float | `0` | Removes the top part of the sphere. |
| Trim Bottom | Float | `0` | Removes the bottom part of the sphere. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include Lon Lines | Integer | `0.0` | Adds the longitude lines. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayGenerateSphere.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
</div>

{/*
Generated page — node: vArrayGenerateSphere (Array/Create).
Source: fuse vArrayGenerateSphere.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
