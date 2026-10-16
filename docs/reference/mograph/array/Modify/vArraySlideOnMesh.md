---
sidebar_position: 57
title: vArraySlideOnMesh
description: "Moves each point in a direction, then snaps it to the closest mesh vertex."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArraySlideOnMesh

Moves each point in a direction, then snaps it to the closest mesh vertex.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArraySlideOnMesh.png" alt="vArraySlideOnMesh node" />
</div>

vArraySlideOnMesh takes an array of XYZ points and a mesh. Each point is moved by Slide Distance along Direction X, Y and Z, and the result is replaced by the closest mesh vertex.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Direction X | Float | `0` | X of the slide direction. Default 0. |
| Direction Y | Float | `0` | Y of the slide direction. Default 0. |
| Direction Z | Float | `0` | Z of the slide direction. Default 0. A direction of 0, 0, 0 is treated as 0, 0, 1. |
| Slide Distance | Float | `0.1` | Distance of the move along the direction. Slider -10 to 10, default 0.1. |
| Surface Offset | Float | `0` | Distance from the vertex along its estimated normal. Slider -1 to 1, default 0. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect X | Float | `1` | X comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z comes from the result when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

The direction is made unit length. A direction of 0, 0, 0, the default, becomes 0, 0, 1. Each point is moved by Slide Distance (default 0.1, slider -10 to 10) along it, and the node then finds the closest Mesh Points vertex to the moved position. The output is that vertex plus Surface Offset along the normal estimated there.

The output points are therefore always mesh vertices. Affect X, Y and Z keep unchecked axes at the input value. If the mesh or the points are empty, the points are output unchanged.

</details>

## Example Connections

<Tabs>
<TabItem value="slide-a-grid-over-a-loaded-mesh-and-draw" label="Slide a grid over a loaded mesh and draw" default>

```
vArrayPointsOnGrid.Output -> vArraySlideOnMesh.ArrayPoints
vArrayFromOBJ.Points -> vArraySlideOnMesh.MeshPoints
vArraySlideOnMesh.Output -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
Background.Output -> vArrayShapeRender.Input
```

</TabItem>
<TabItem value="slide-scattered-points" label="Slide scattered points">

```
vArrayRandom.Output -> vArraySlideOnMesh.ArrayPoints
vArrayFromOBJ.Points -> vArraySlideOnMesh.MeshPoints
vArraySlideOnMesh.Output -> vArrayTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayJitterOnMesh">vArrayJitterOnMesh</a>
  <a className="node-chip" href="./vArrayProjectOnMesh">vArrayProjectOnMesh</a>
  <a className="node-chip" href="./vArraySnapMeshVertex">vArraySnapMeshVertex</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
