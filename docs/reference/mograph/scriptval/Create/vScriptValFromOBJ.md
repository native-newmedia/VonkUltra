---
sidebar_position: 11
title: vScriptValFromOBJ
description: "Read Wavefront OBJ text from a file, a URL or pasted text and output points, faces, UVs and UV indices as arrays."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromOBJ

Read Wavefront OBJ text from a file, a URL or pasted text and output points, faces, UVs and UV indices as arrays.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFromOBJ.png" alt="vScriptValFromOBJ node" />
</div>

vScriptValFromOBJ has no input socket and outputs four arrays read from OBJ text: Points, Edges, UVs and UV Edges. Input Source picks a file, a URL or text typed into the node.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the OBJ text comes from, File, URL or Text. Default File. |
| Filename | Text | `—` | Path of the OBJ file. Shown when Input Source is File. |
| URL | Text | `—` | Address of an OBJ text file. Shown when Input Source is URL. |
| Input | Text | `—` | OBJ text typed or pasted into the node. Shown when Input Source is Text. |
| Scale File Units By | Float | `1` | Multiplier applied to X, Y and Z of every point. Default 1. |

<details>
<summary>Read the full description</summary>

The node reads the source line by line. Lines that start with v give the Points array, with the first three values of each line multiplied by Scale File Units By. Lines that start with vt give the UVs array with two values each. UV values are not scaled.

Each line that starts with f gives one entry in the Edges array, holding the vertex indices of the face, and one entry in the UV Edges array, holding the texture coordinate indices. The indices are copied as they are in the file, which means 1-based values for a standard OBJ. Other lines, such as vn, g and usemtl, are ignored.

The face parser expects vertex references with two slashes, such as 1/2/3 or 1//3. A face written as f 1 2 3 or as 1/2 gives an empty entry, and an index written as 1//3 gives no UV index. The code does not skip a v line that has fewer than three values. Normals are not read.

Filename goes through Fusion path mapping before it is opened. URL is downloaded as text. Input is used as it is. Only the control for the selected source is shown.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-points-of-a-mesh" label="Draw the points of a mesh" default>

```
vScriptValFromOBJ.Points -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="pass-the-faces-along-with-the-points" label="Pass the faces along with the points">

```
vScriptValFromOBJ.Points -> vScriptValCameraProjection.ArrayA
vScriptValFromOBJ.Edges -> vScriptValCameraProjection.ArrayEdge
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
vScriptValCameraProjection.Edges -> vScriptValShapeRender.ArrayEdge
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValToOBJ">vScriptValToOBJ</a>
  <a className="node-chip" href="./vScriptValFromXYZ">vScriptValFromXYZ</a>
  <a className="node-chip" href="./vScriptValToUSD">vScriptValToUSD</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
