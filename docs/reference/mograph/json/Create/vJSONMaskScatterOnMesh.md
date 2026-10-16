---
sidebar_position: 33
title: vJSONMaskScatterOnMesh
description: "Scatter points on an OBJ mesh with the chance of each triangle weighted by a list of numbers or by an image."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMaskScatterOnMesh

Scatter points on an OBJ mesh with the chance of each triangle weighted by a list of numbers or by an image.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMaskScatterOnMesh.png" alt="vJSONMaskScatterOnMesh node" />
</div>

vJSONMaskScatterOnMesh reads an OBJ mesh from a file, a URL or text and scatters Point Count points on its triangles. Mask Source gives each triangle a weight from an array of numbers or from an image, and Invert Mask and Mask Bias adjust the weights.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the OBJ mesh comes from, File, URL or Text. Default File. |
| Filename | Text | `—` | Path of the OBJ file. Shown when Input Source is File. |
| URL | Text | `—` | Address of an OBJ file. Hidden until Input Source is URL. |
| Input | Text | `—` | OBJ text. Hidden until Input Source is Text. |
| Mask Source | Dropdown | `None` | Where the triangle weights come from, None, Array or Image. Default None. |

<details>
<summary>+15 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mask Array Input | Text | `—` | Hidden until Mask Source is Array. Numbers that give the weight of each triangle in order. |
| Mask Image Input | Image | `—` | Hidden until Mask Source is Image. Image that is read by triangle number. |
| Map Scale X | Float | `1` | Hidden until Mask Source is Image. Stretches the image lookup horizontally around the image center. Minimum 0.0001, default 1. |
| Map Scale Y | Float | `1` | Hidden until Mask Source is Image. Stretches the image lookup vertically around the image center. Minimum 0.0001, default 1. |
| Map Offset X | Float | `0` | Hidden until Mask Source is Image. Shifts the image lookup horizontally. Default 0. |
| Map Offset Y | Float | `0` | Hidden until Mask Source is Image. Shifts the image lookup vertically. Default 0. |
| Debug Image Mapping | Float | `0` | Hidden control. When on with an image mask, adds extra points that show the image lookup. Default off. |
| Debug Plane Z | Float | `0` | Hidden control. Z position of the debug points. Default 0. |
| Debug Sample Step | Integer | `20` | Hidden control. Number of image pixels between debug points. Minimum 1, default 20. |
| Scale File Units By | Float | `1` | Multiplier applied to the vertex coordinates. Default 1. |
| Point Count | Integer | `1000` | Number of points. Minimum 2, default 1000. |
| Random Seed | Integer | `0` | Seed of the random generator. Minimum 0, default 0. |
| Invert Mask | Float | `0` | When on, each weight is replaced by 1 minus the weight. Default off. |
| Mask Bias | Float | `1` | Exponent applied to each weight. Values above 1 favor high weights. Minimum 0.0001, default 1. |
| Surface Offset | Float | `0` | Distance each point is moved along the triangle normal. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

The node reads the vertex and face lines of the OBJ text, multiplies the vertices by Scale File Units By, and splits faces with more than three vertices into triangles. Each point goes to a random triangle with a probability proportional to the triangle area times its weight, and to a random position inside it, then is moved along the triangle normal by Surface Offset. With Mask Source set to None, every weight is 1 and the node scatters by area only.

The mask is a list of weights with one entry for each triangle, in the order the triangles were read from the file. With Array, the numbers are taken from the Mask Array Input text, in order, and a triangle without a number gets a weight of 1. With Image, triangle number n reads the image at column (n - 1) mod width and row floor((n - 1) / width), and the weight is the average of the red, green and blue values. The image is therefore read by triangle number, not by position on the mesh.

Each weight is clamped to 0 or more. If Invert Mask is on, it becomes 1 minus the weight, with the weight clamped to at most 1 first. The result is then raised to the power Mask Bias, so values above 1 concentrate the points on the triangles with a high weight. Triangles with a weight of 0 receive no points. If all weights are 0, the node outputs nothing. Map Scale and Map Offset move and stretch the lookup in the image, and the lookup position is clamped to the image.

The random generator is seeded with Random Seed, so the same Seed, mesh, mask and settings give the same points. Point Count has a minimum of 2. The hidden Debug Image Mapping control, shown when Mask Source is Image, adds extra points to the output on a plane at Debug Plane Z, one for each sampled image position that is brighter than 0.05, taken every Debug Sample Step pixels.

</details>

## Example Connections

<Tabs>
<TabItem value="scatter-with-a-mask-on-a-loaded-mesh-and-draw" label="Scatter with a mask on a loaded mesh and draw" default>

```
vJSONMaskScatterOnMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="use-an-image-as-the-mask" label="Use an image as the mask">

```
Loader.Output -> vJSONMaskScatterOnMesh.MaskImageInput
vJSONMaskScatterOnMesh.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONScatterOnMesh">vJSONScatterOnMesh</a>
  <a className="node-chip" href="./vJSONPoissonOnMesh">vJSONPoissonOnMesh</a>
  <a className="node-chip" href="./vJSONRelaxScatterOnMesh">vJSONRelaxScatterOnMesh</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
