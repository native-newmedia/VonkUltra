---
sidebar_position: 10
title: vArrayRenderMesh
description: "Render a sweep mesh packet (vertices + faces) from vArrayRenderSweepProfile as a shaded 2D image."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderMesh

Render a sweep mesh packet (vertices + faces) from vArrayRenderSweepProfile as a shaded 2D image.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderMesh.png" alt="vArrayRenderMesh node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| X Offset | Float | `0` | Moves the model along X. |
| Y Offset | Float | `0` | Moves the model along Y. |
| Z Offset | Float | `1.0` | Moves the model along Z, away from the camera. |
| X Rotation | Float | `20` | Rotation around X in degrees. |
| Y Rotation | Float | `30` | Rotation around Y in degrees. |

<details>
<summary>+26 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Z Rotation | Float | `0` | Rotation around Z in degrees. |
| Rotate Around Center | Integer | `1` | Rotates around the model center. |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale of the model. |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. |
| Field of View | Float | `90.0` | Perspective field of view in degrees. |
| Aspect Ratio | Float | `16 / 9` | Aspect ratio used by the projection. |
| Show Fill | Integer | `1` | Draws the filled surface. |
| Show Wireframe | Integer | `1` | Draws the wireframe. |
| Wire Width | Float | `0.0015` | Width of the wireframe lines. |
| Flat Shading | Integer | `1` | Uses one shade per face. |
| Ambient | Float | `0.15` | Minimum brightness. |
| Light X | Float | `0.6` | Light direction X. |
| Light Y | Float | `0.8` | Light direction Y. |
| Light Z | Float | `-0.5` | Light direction Z. |
| Shade Steps | Integer | `24` | Number of shading levels. |
| Red | Float | `0.1` | Color for the fill. |
| Green | Float | `0.7` | Color for the fill. |
| Blue | Float | `1.0` | Color for the fill. |
| Alpha | Float | `1.0` | Color for the fill. |
| Red | Float | `0.0` | Color for the fill. |
| Green | Float | `1.0` | Color for the fill. |
| Blue | Float | `1.0` | Color for the fill. |
| Alpha | Float | `1.0` | Color for the fill. |
| Background | Image | `—` | — |
| Mesh Packet | INPUT_DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayColor">vArrayColor</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
</div>

{/*
Generated page — node: vArrayRenderMesh (Array/ShapeRender).
Source: fuse vArrayRenderMesh.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
