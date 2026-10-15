---
sidebar_position: 1
title: vJSONAlignToMesh
description: "Replace input points with the surface normal of the nearest OBJ mesh triangle."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONAlignToMesh

Replace input points with the surface normal of the nearest OBJ mesh triangle.

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONAlignToMesh.png" alt="vJSONAlignToMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Output Mode | Dropdown | `Normals` | What is output: normals, surface points or a blend. Options: Normals, Surface, Blend. |
| Normal Length | Float | `1` | Length of the output normal vectors. |
| Normal Anchor | Dropdown | `Vector` | Where the normal vector starts. Options: Vector, At Input, At Surface. |
| Flip Normals | Float | `0` | Reverses the normal direction. |
| Blend To Surface | Float | `1` | Mix between the input point and the surface point in Surface and Blend mode. Shown when the related option is enabled. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Affect X | Float | `1` | Applies the effect to X. |
| Affect Y | Float | `1` | Applies the effect to Y. |
| Affect Z | Float | `1` | Applies the effect to Z. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBoundingBox">vJSONBoundingBox</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="./vJSONConvert2D_3D">vJSONConvert2D_3D</a>
  <a className="node-chip" href="./vJSONDisplaceValues">vJSONDisplaceValues</a>
</div>

{/*
Generated page — node: vJSONAlignToMesh (JSON/Modify).
Source: fuse vJSONAlignToMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
