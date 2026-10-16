---
sidebar_position: 68
title: vScriptValWeightByMeshProx
description: "Outputs a 0 to 1 weight per point from its distance to the closest mesh vertex."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValWeightByMeshProx

Outputs a 0 to 1 weight per point from its distance to the closest mesh vertex.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValWeightByMeshProx.png" alt="vScriptValWeightByMeshProx node" />
</div>

vScriptValWeightByMeshProx takes an array of XYZ points and a mesh, and outputs one weight per point on the Output socket. A second output, Points, holds the points projected toward the mesh.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Max Distance | Float | `0.5` | Distance at which the weight reaches 1. Minimum 0.0001, slider 0.0001 to 10, default 0.5. |
| Falloff | Dropdown | `Linear` | Linear (default), Squared or Root. The shape of the weight. |
| Invert Weight | Integer | `0` | Uses 1 minus the weight when on. Default off. |
| Project Amount | Float | `1` | How far the Points output moves toward the closest vertex. Range 0 to 1, default 1. |
| Points | DATATYPE | `—` | Point positions. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mesh Points | DATATYPE | `—` | Mesh vertices that distances are measured to. |

</details>

<details>
<summary>Read the full description</summary>

For each point the node finds the closest Mesh Points vertex and takes the distance d. The raw weight is min(1, d / Max Distance), which is 0 at the mesh and 1 at Max Distance or farther. Falloff shapes it: Linear uses it as it is, Squared squares it, Root takes the square root. Invert Weight turns the weight into 1 minus it. Max Distance defaults to 0.5 and has a minimum of 0.0001.

The Points output holds each point moved toward its closest vertex by Project Amount (0 to 1, default 1), so by default it holds the vertices. Both outputs have the array and size wrapper. With an empty mesh both outputs are empty.

</details>

## Example Connections

<Tabs>
<TabItem value="use-weights-as-a-mask" label="Use weights as a mask" default>

```
vScriptValPointsOnGrid.Output -> vScriptValWeightByMeshProx.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValWeightByMeshProx.MeshPoints
vScriptValWeightByMeshProx.Output -> vScriptValApplyMask.Mask
```

</TabItem>
<TabItem value="color-points-by-distance-to-the-mesh" label="Color points by distance to the mesh">

```
vScriptValPointsOnGrid.Output -> vScriptValWeightByMeshProx.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValWeightByMeshProx.MeshPoints
vScriptValWeightByMeshProx.Output -> vScriptValRampMap.Scalars
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValWeightMap">vScriptValWeightMap</a>
  <a className="node-chip" href="./vScriptValMaskByMesh">vScriptValMaskByMesh</a>
  <a className="node-chip" href="./vScriptValSortByMeshProx">vScriptValSortByMeshProx</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
