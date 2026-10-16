---
sidebar_position: 29
title: vJSONMirrorThruMesh
description: "Reflects each point through the closest mesh vertex, by a Blend amount."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONMirrorThruMesh

Reflects each point through the closest mesh vertex, by a Blend amount.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONMirrorThruMesh.png" alt="vJSONMirrorThruMesh node" />
</div>

vJSONMirrorThruMesh takes an array of XYZ points and a mesh, finds the reference point on the mesh for each point, and puts the point on the opposite side of it. Blend sets how far the point moves toward the reflected position.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mirror Through | Dropdown | `Surface` | Surface (default), Vertex or Face Centroid. Surface and Vertex use the closest Mesh Points vertex. Face Centroid uses the closest average of a vertex and its 7 nearest neighbors. |
| Blend | Float | `1` | Mix between the original (0) and the reflected position (1). Range 0 to 1, default 1. |
| Affect X | Float | `1` | X is reflected when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y is reflected when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z is reflected when checked (default), otherwise it keeps the input value. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For each input point the node finds a reference point R: the closest Mesh Points vertex (Surface and Vertex give the same result) or the closest patch point (Face Centroid), the average of a vertex and its 7 nearest neighbors. The reflected position is 2 * R - P, and the output is P plus the difference to that position times Blend.

Blend runs from 0 to 1 and defaults to 1, which gives the full reflection. Affect X, Y and Z are checked by default, and an unchecked axis keeps the input value.

With no mesh vertices, no points are written and the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="reflect-a-grid-through-a-loaded-mesh-and-draw" label="Reflect a grid through a loaded mesh and draw" default>

```
vJSONPointsOnGrid.Output -> vJSONMirrorThruMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONMirrorThruMesh.MeshPoints
vJSONMirrorThruMesh.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="reflect-scattered-points" label="Reflect scattered points">

```
vJSONRandom.Output -> vJSONMirrorThruMesh.ArrayPoints
vJSONFromOBJ.Points -> vJSONMirrorThruMesh.MeshPoints
vJSONMirrorThruMesh.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONMirror">vJSONMirror</a>
  <a className="node-chip" href="./vJSONAttractToMesh">vJSONAttractToMesh</a>
  <a className="node-chip" href="./vJSONSnapMeshVertex">vJSONSnapMeshVertex</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
