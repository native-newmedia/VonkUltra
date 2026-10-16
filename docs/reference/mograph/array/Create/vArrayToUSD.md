---
sidebar_position: 54
title: vArrayToUSD
description: "Convert point, edge, UV and UV edge arrays into OpenUSD ASCII (USDA) text for a single mesh, with an optional 4x4 matrix."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayToUSD

Convert point, edge, UV and UV edge arrays into OpenUSD ASCII (USDA) text for a single mesh, with an optional 4x4 matrix.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayToUSD.png" alt="vArrayToUSD node" />
</div>

vArrayToUSD takes arrays on its Points, Edges, UVs and UV Edges sockets and outputs a USDA text for one mesh. A matrix on the Matrix socket transforms the points before they are written.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Edges | Text | `—` | Array of face index lists. Each entry is one face and becomes part of faceVertexCounts and faceVertexIndices. |
| Points | Text | `—` | Array of points. The points are written as point3f values. |
| UVs | Text | `—` | Array of texture coordinates. Written as primvars:st when UV Edges is also connected. |
| UV Edges | Text | `—` | Array of UV index lists. Written as primvars:st:indices. |
| Matrix | Text | `—` | A 4x4 matrix as JSON text that is applied to the points. Without it the identity matrix is used. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Object Sort | Text | `—` | Sort value stored in the sort field of the Array output. Default Mesh. |
| Object Path | Text | `—` | Prim path stored in the path field of the Array output. Default /vMograph/mesh. |
| Show Input | Integer | `1.0` | Shows or hides the Edges, Points, UVs and UV Edges sockets. Default on. |

</details>

<details>
<summary>Read the full description</summary>

The text is a USDA 1.0 file with the default prim vMograph, a document string that names the composition, metersPerUnit 0.01 and upAxis Y. It holds one Xform named vMograph with one Mesh named mesh, which is written as double sided.

Edges become faceVertexCounts and faceVertexIndices. Each entry of the Edges array is one face, its length is the vertex count, and every index has 1 subtracted, so the node expects 1-based indices like the ones used in OBJ. Points are transformed by the Matrix socket, or by the identity matrix if nothing is connected, and written as point3f values with four decimal places.

UVs are written only when both the UVs and the UV Edges arrays have content. The node writes the first two values of each UV as primvars:st with faceVarying interpolation, and the UV Edges as primvars:st:indices, again with 1 subtracted.

The Output socket carries the USDA text. The Array socket carries JSON text with the fields sort, path and usda. Sort and Path come from the Object Sort and Object Path controls, which have the defaults Mesh and /vMograph/mesh. They are not written into the USDA text itself.

</details>

## Example Connections

<Tabs>
<TabItem value="convert-a-generated-grid-to-usda-text" label="Convert a generated grid to USDA text" default>

```
vArrayPointsOnGrid.Output -> vArrayToUSD.ArrayPoints
```

</TabItem>
<TabItem value="transform-the-points-with-a-matrix" label="Transform the points with a matrix">

```
vArrayPointsOnGrid.Output -> vArrayToUSD.ArrayPoints
vMatrixCreateTRS.Output -> vArrayToUSD.Matrix
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayToOBJ">vArrayToOBJ</a>
  <a className="node-chip" href="./vArrayFromOBJ">vArrayFromOBJ</a>
  <a className="node-chip" href="./vArrayToXYZ">vArrayToXYZ</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
