---
sidebar_position: 16
title: vArrayFromXYZ
description: "Convert ASCII XYZ point cloud data into a vArray format Transform XYZ Points Node Connections:"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromXYZ

Convert ASCII XYZ point cloud data into a vArray format Transform XYZ Points Node Connections:

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromXYZ.png" alt="vArrayFromXYZ node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Text. |
| Filename | Text | `—` | File to read. Shown when Input Source is File. |
| URL | Text | `—` | Address to read. Shown when Input Source is URL. |
| Input | Text | `—` | Text to read. Shown when Input Source is Text. |
| Point Cloud Density | Integer | `100` | Share of points kept. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Scale File Units By | Float | `1` | Multiplies the coordinates of the file. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vArrayFromXYZ.Points -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="example-2" label="Example 2">

```
vArrayFromXYZ.Points -> vArrayMath.ArrayA
    vMatrixCreateTRS1.Output -> vArrayMath.ArrayB
    vArrayMath.Operation = "Matrix Multiply"
    vArrayMath.Output -> vArrayToXYZ.ArrayA
    vArrayToXYZ.Output -> vTextToFile.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vArrayCameraProjection">vArrayCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vArrayShapeRender">vArrayShapeRender</a>
  <a className="node-chip" href="../Modify/vArrayMath">vArrayMath</a>
  <a className="node-chip" href="./vArrayToXYZ">vArrayToXYZ</a>
</div>

{/*
Generated page — node: vArrayFromXYZ (Array/Create).
Source: fuse vArrayFromXYZ.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
