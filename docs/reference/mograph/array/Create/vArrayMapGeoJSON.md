---
sidebar_position: 32
title: vArrayMapGeoJSON
description: "Map from geographic coordinates"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayMapGeoJSON

Map from geographic coordinates

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayMapGeoJSON.png" alt="vArrayMapGeoJSON node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Auto Fit | Float | `1` | — |
| GeoJSON | Text | `—` | — |
| Map Zoom Width | Float | `1.0` | Width of the mapped area. |
| Center Latitude | Float | `0.0` | Latitude of the center. |
| Center Longitude | Float | `0.0` | Longitude of the center. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale | Float | `1.0` | Scale of the result. |
| Offset X | Float | `0.0` | Moves the result along X. |
| Offset Y | Float | `0.0` | Moves the result along Y. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONFromFile.Output -> vArrayMapGeoJSON.ArrayA
    vArrayMapGeoJSON.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayMapGeoJSON.ScriptVal_Groups -> vArrayShapeRender.ArrayGroups
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
Generated page — node: vArrayMapGeoJSON (Array/Create).
Source: fuse vArrayMapGeoJSON.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
