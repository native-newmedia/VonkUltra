---
sidebar_position: 58
title: vArraySnapFaceCentroid
description: "Moves each point toward the closest patch point of a mesh, by a Blend amount."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySnapFaceCentroid

Moves each point toward the closest patch point of a mesh, by a Blend amount.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySnapFaceCentroid.png" alt="vArraySnapFaceCentroid node" />
</div>

vArraySnapFaceCentroid takes an array of XYZ points and a mesh. For each point it finds the closest patch point, the average of a mesh vertex and its 7 nearest neighbors, and moves the point toward it.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Blend | Float | `1` | Mix between the point (0) and the patch point (1). Slider 0 to 1, default 1. Not limited in the code. |
| Max Distance | Float | `0` | Points farther from the closest patch point than this stay where they are. 0 switches it off. Slider 0 to 2, default 0. |
| Affect X | Float | `1` | X moves when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y moves when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z moves when checked (default), otherwise it keeps the input value. |

<details>
<summary>+2 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the closest of the patch points, one per mesh vertex. If Max Distance is above 0 and the point is farther away than that, it stays where it is. Otherwise the output is the point plus (patch point - point) * Blend. Blend defaults to 1, which puts the point on the patch point.

Affect X, Y and Z keep unchecked axes at the input value. Only the vertex list of Mesh Points is used, not faces. Blend is not limited in the code, so values outside 0 to 1 extrapolate. If the points or the mesh are empty, the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="snap-a-grid-to-a-loaded-mesh-and-draw" label="Snap a grid to a loaded mesh and draw" default>

```
vArrayPointsOnGrid.Output -> vArraySnapFaceCentroid.ArrayPoints
vArrayFromOBJ.Points -> vArraySnapFaceCentroid.MeshPoints
vArraySnapFaceCentroid.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="snap-scattered-points" label="Snap scattered points">

```
vArrayRandom.Output -> vArraySnapFaceCentroid.ArrayPoints
vArrayFromOBJ.Points -> vArraySnapFaceCentroid.MeshPoints
vArraySnapFaceCentroid.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArraySnapMeshVertex">vArraySnapMeshVertex</a>
  <a className="node-chip" href="./vArrayAttractToMesh">vArrayAttractToMesh</a>
  <a className="node-chip" href="./vArrayClampToMeshProx">vArrayClampToMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
