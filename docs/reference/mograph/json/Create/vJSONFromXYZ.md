---
sidebar_position: 40
title: vJSONFromXYZ
description: "Convert ASCII XYZ point cloud data into a JSON format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromXYZ

Convert ASCII XYZ point cloud data into a JSON format

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromXYZ.png" alt="vJSONFromXYZ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | — |
| Filename | Text | `—` | — |
| URL | Text | `—` | — |
| Input | Text | `—` | — |
| Point Cloud Density | Integer | `100` | — |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale File Units By | Float | `1` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONFromXYZ.Points -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
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
Generated page — node: vJSONFromXYZ (JSON/Create).
Source: fuse vJSONFromXYZ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
