---
sidebar_position: 4
title: vScriptValCreateAsset
description: "Bundle points, edges, UVs, UV edges and a matrix into one vGeometry asset with a name, version, wire color and bounding box."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValCreateAsset

Bundle points, edges, UVs, UV edges and a matrix into one vGeometry asset with a name, version, wire color and bounding box.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValCreateAsset.png" alt="vScriptValCreateAsset node" />
</div>

vScriptValCreateAsset takes arrays on its Points, Edges, UVs, UV Edges and Matrix sockets and outputs one JSON asset of type vGeometry. The asset adds a name, a version, a wire color, a soft edge value and the bounding box of the points.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Asset Name | Text | `—` | Name stored in the asset. An empty name becomes Object. |
| Asset Version | Integer | `1` | Version number stored in the asset. Default 1. |
| Points | ScriptVal | `—` | Array of points to store. |
| Edges | ScriptVal | `—` | Array of face or edge index lists to store. |
| UVs | ScriptVal | `—` | Array of texture coordinates to store. |

<details>
<summary>+8 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| UV Edges | ScriptVal | `—` | Array of UV index lists to store. |
| Matrix | Text | `—` | 4x4 matrix as JSON text. Its list of numbers is stored in the asset. |
| Red | Float | `0.0` | Red level of the wire color. Default 0. |
| Green | Float | `1.0` | Green level of the wire color. Default 1. |
| Blue | Float | `1.0` | Blue level of the wire color. Default 1. |
| Alpha | Float | `1.0` | Alpha level of the wire color. Range 0 to 1, default 1. |
| Soft Edge | Float | `0` | Soft edge value stored in the asset. Minimum 0, default 0. |
| Show Input | Integer | `1.0` | Shows or hides the input sockets and the Asset Name connection point. Default on. |

</details>

<details>
<summary>Read the full description</summary>

The node collects the arrays that are connected and stores them in the asset under the names Points, Edges, UVs, UVEdges and Matrix. The Matrix is stored as its flat list of numbers. Sockets without a connection are stored as empty lists.

The asset also holds the Name from Asset Name, the Version from Asset Version, the color from Red, Green, Blue and Alpha, the Soft Edge value, the ID vGeometry and a new UUID. If Asset Name is empty or only a space or tab, the name Object is used. The UUID is created on every calculation, so it changes each time the node renders.

The bounding box is calculated from the points and stored as BBoxPoints and BBoxEdges. For three-value points it is the 8 corners of a box with 6 faces. For two-value points it is the 4 corners of a rectangle with 4 edges. For one-value points it is the minimum and maximum with one edge. The values in the bounding box are the minimum and the maximum of each axis, over all points.

The asset is the input of vScriptValRenderAsset, which draws it as a 3D wireframe, and of vScriptValRenderAssetSVG, which exports an SVG wireframe. The Show Input checkbox shows or hides the input sockets and the Asset Name connection point.

</details>

## Example Connections

<Tabs>
<TabItem value="build-an-asset-from-a-generated-grid" label="Build an asset from a generated grid" default>

```
vScriptValPointsOnGrid.Output -> vScriptValCreateAsset.ArrayPoints
vScriptValCreateAsset.Output -> vScriptValRenderAsset.Input
```

</TabItem>
<TabItem value="add-a-transform-matrix-to-the-asset" label="Add a transform matrix to the asset">

```
vScriptValPointsOnGrid.Output -> vScriptValCreateAsset.ArrayPoints
vMatrixCreateTRS.Output -> vScriptValCreateAsset.Matrix
vScriptValCreateAsset.Output -> vScriptValRenderAsset.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValLocatorAsset">vScriptValLocatorAsset</a>
  <a className="node-chip" href="./vScriptValToOBJ">vScriptValToOBJ</a>
  <a className="node-chip" href="./vScriptValToUSD">vScriptValToUSD</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
