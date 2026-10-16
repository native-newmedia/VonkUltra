---
sidebar_position: 53
title: vScriptValToOBJ
description: "Convert point, edge, UV and UV edge arrays into Wavefront OBJ ASCII text, with an optional 4x4 matrix applied to the points."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValToOBJ

Convert point, edge, UV and UV edge arrays into Wavefront OBJ ASCII text, with an optional 4x4 matrix applied to the points.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValToOBJ.png" alt="vScriptValToOBJ node" />
</div>

vScriptValToOBJ takes arrays on its Points, Edges, UVs and UV Edges sockets and outputs OBJ text. A matrix on the Matrix socket transforms the points before they are written.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Edges | ScriptVal | `—` | Edges that connect the points. |
| Points | ScriptVal | `—` | Point positions. |
| UVs | ScriptVal | `—` | Array of texture coordinates. Each entry becomes one vt line. |
| UV Edges | ScriptVal | `—` | Array of UV index lists, matched to the entries of the Edges array. |
| Matrix | Text | `—` | A 4x4 matrix as JSON text that is applied to the points. Without it the identity matrix is used. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show Input | Integer | `1.0` | Shows or hides the five input sockets. Default on. |

</details>

<details>
<summary>Read the full description</summary>

The text starts with a comment line and the line g default. Every entry of the Points array becomes a v line with X, Y and Z written to four decimal places. Every entry of the UVs array becomes a vt line. Entries with two values get a third value of 0, and entries with one value get two values of 0 in the UVs list.

Each entry of the Edges array becomes one f line. Its numbers are the vertex indices of the face and are written as they are, without any change. If the UV Edges array has an entry at the same position, each vertex is written as vertex/uv/. Otherwise it is written as vertex//.

Points are multiplied by the matrix from the Matrix socket before writing, in the row-vector form that puts the translation in the last row. Without a connected matrix the identity matrix is used, so the points are unchanged. A point entry that does not have two or three values is treated as the origin before the transform.

The output is plain text, not an array. Show Input is on by default and shows the five sockets. The node does not write a file. Connect the text to a node that saves text, or copy it from the viewer.

</details>

## Example Connections

<Tabs>
<TabItem value="write-a-generated-grid-as-obj-text" label="Write a generated grid as OBJ text" default>

```
vScriptValPointsOnGrid.Output -> vScriptValToOBJ.ArrayPoints
```

</TabItem>
<TabItem value="transform-the-points-with-a-matrix" label="Transform the points with a matrix">

```
vScriptValPointsOnGrid.Output -> vScriptValToOBJ.ArrayPoints
vMatrixCreateTRS.Output -> vScriptValToOBJ.Matrix
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromOBJ">vScriptValFromOBJ</a>
  <a className="node-chip" href="./vScriptValToUSD">vScriptValToUSD</a>
  <a className="node-chip" href="./vScriptValToXYZ">vScriptValToXYZ</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
