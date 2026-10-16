---
sidebar_position: 50
title: vScriptValScatterOnMesh
description: "Scatter points randomly over the surface of a mesh loaded from a file, URL or text."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValScatterOnMesh

Scatter points randomly over the surface of a mesh loaded from a file, URL or text.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValScatterOnMesh.png" alt="vScriptValScatterOnMesh node" />
</div>

vScriptValScatterOnMesh reads a mesh and outputs Number of Points points sampled on its triangles. Seed makes the result repeatable and Surface Offset moves points along the surface normal.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Selects the mesh source. File, URL or Text. |
| Filename | Text | `—` | Mesh file to load when Input Source is File. Also available as a socket. |
| URL | Text | `—` | Mesh URL when Input Source is URL. Hidden until URL is selected. |
| Input | Text | `—` | Mesh text when Input Source is Text. Available as a socket. |
| Scale File Units By | Float | `1` | Multiplier applied to the mesh coordinates. Default 1. |

<details>
<summary>+3 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Point Count | Integer | `1000` | Number of points to scatter. Minimum 2, default 1000. |
| Random Seed | Integer | `0` | Random seed. Same seed gives the same points. Default 0. |
| Surface Offset | Float | `0` | Distance to move each point along the triangle normal. Default 0. |

</details>

<details>
<summary>Read the full description</summary>

The mesh source is set by Input Source: File, URL or Text. File uses the Filename socket, URL uses the URL control (hidden until URL is selected) and Text uses the Text input socket. The Scale File Units By control multiplies the mesh coordinates.

Triangles are picked with probability proportional to their area, so large triangles receive more points. Within a triangle the position uses barycentric coordinates built from two random numbers: u = 1 - sqrt(r1), v = sqrt(r1) * (1 - r2), w = sqrt(r1) * r2. This gives a uniform distribution over the triangle.

The random generator is seeded with Random Seed, so the same Random Seed, mesh and Number of Points give the same points. Change Random Seed for a different scatter. Surface Offset moves each point along its triangle normal by that distance; 0 keeps points on the surface.

If the mesh has no triangles, the output is an empty array. Number of Points has a minimum of 2.

</details>

## Example Connections

<Tabs>
<TabItem value="scatter-on-a-loaded-mesh-and-draw" label="Scatter on a loaded mesh and draw" default>

```
vScriptValScatterOnMesh.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="scatter-then-jitter" label="Scatter, then jitter">

```
vScriptValScatterOnMesh.Output -> vScriptValDisplaceValues.ArrayA
vScriptValDisplaceValues.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValMaskScatterOnMesh">vScriptValMaskScatterOnMesh</a>
  <a className="node-chip" href="./vScriptValRelaxScatterOnMesh">vScriptValRelaxScatterOnMesh</a>
  <a className="node-chip" href="./vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
