---
sidebar_position: 1
title: v3DToFile
description: "Writes PointCloud3D data from the Fusion 3D node-graph to a file."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# v3DToFile

Writes PointCloud3D data from the Fusion 3D node-graph to a file. Connect a PointCloud3D node's output connection directly to the v3DToFile node: PointCloud3D.Output -> v3DToFile.Input The "Input 3D" connection accepts a wireless link style drag-and-drop attachment of a PointCloud3D node. Clicking the "Show 3D Source" button will select the connected upstream node in the Nodes view, which displays the node in the Inspector view. The "Point Cloud Format" ComboControl allows you to select the export format used. Options include: "XYZ ASCII (.xyz)", "PLY ASCII (.ply)", and "PIXAR USDA ASCII (.usda)". The "Filename" text field supports Vonk vText based connections. This allows you to dynamically generate a filename via data node approaches. The Filename field contents can include relative PathMap values like "Comp:/" that will be expanded at render time. If a sub-folder is specified in the filename field, and it is missing at render time, the sub-folders will be re-created automatically when the file is saved to disk. This is helpful if you want to use per--timeline-frame numbered folders in the output filepath.

<div className="node-badge-row">
  <span className="node-badge">Core / 3D</span>
  <span className="node-badge">3D</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/3d/v3DToFile.png" alt="v3DToFile node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input 3D | DataType3D | `—` | PointCloud3D data to export — connect a PointCloud3D node's output directly, or use a wireless link. Hidden until Show 3D Input is enabled. |
| Show 3D Source | Float | `—` | Selects the connected upstream 3D node in the Nodes view, so it opens in the Inspector. |
| Point Cloud Format | Dropdown | `XYZ ASCII (.xyz)` | Export file format: XYZ ASCII (.xyz), PLY ASCII (.ply), PIXAR USDA ASCII (.usda), or JSON Array (.json). |
| Filename | Text | `—` | Destination path for the exported file. Supports Text/vText connections for dynamically generated filenames, and PathMap values like `Comp:/`. Missing sub-folders are created automatically at render time. |
| Show 3D Input | Integer | `1.0` | Reveals the wire for the Input 3D connection in the Flow view. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show File Input | Integer | `0.0` | Reveals the wire for the Filename connection in the Flow view, for driving it from a Text node. |

</details>



{/*
Generated page — node: v3DToFile (Core/3D/IO).
Source: fuse v3DToFile.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
