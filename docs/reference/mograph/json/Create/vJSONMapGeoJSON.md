---
sidebar_position: 32
title: vJSONMapGeoJSON
description: "Map from geographic coordinates"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMapGeoJSON

Map from geographic coordinates

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMapGeoJSON.png" alt="vJSONMapGeoJSON node" />
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
vJSONFromFile.Output -> vJSONMapGeoJSON.ArrayA
    vJSONMapGeoJSON.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    vJSONMapGeoJSON.ScriptVal_Groups -> vJSONShapeRender.JSONTextGroups
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONMapGeoJSON (JSON/Create).
Source: fuse vJSONMapGeoJSON.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
