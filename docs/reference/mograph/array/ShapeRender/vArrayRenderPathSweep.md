---
sidebar_position: 11
title: vArrayRenderPathSweep
description: "Preview swept path/profile geometry as a 2D image while also outputting mesh data."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayRenderPathSweep

Preview swept path/profile geometry as a 2D image while also outputting mesh data.

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayRenderPathSweep.png" alt="vArrayRenderPathSweep node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Preview Mode | Dropdown | `Adaptive` | Adaptive, Ribbon, Tube, or Wireframe Only. |
| X Offset | Float | `0` | Moves the model along X. |
| Y Offset | Float | `0` | Moves the model along Y. |
| Z Offset | Float | `1.0` | Moves the model along Z, away from the camera. |
| X Rotation | Float | `20` | Rotation around X in degrees. |

<details>
<summary>+36 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Y Rotation | Float | `30` | Rotation around Y in degrees. |
| Z Rotation | Float | `0` | Rotation around Z in degrees. |
| Rotate Around Center | Integer | `1` | Rotates around the model center. |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale of the model. |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. |
| Field of View | Float | `90.0` | Perspective field of view in degrees. |
| Aspect Ratio | Float | `16 / 9` | Aspect ratio used by the projection. |
| Profile Preset | Dropdown | `Auto / External` | Auto / External, Ribbon, Square, or Circle. |
| Preset Sides | Integer | `8` | Sides of the profile preset. |
| Close Profile | Integer | `1` | Connects the last profile point to the first. |
| Closed Path | Integer | `0` | Connects the last path point to the first. |
| Default Width | Float | `1` | Width used when no Width input is connected. |
| Show Fill | Integer | `1` | Draws the filled surface. |
| Show Wireframe | Integer | `1` | Draws the wireframe. |
| Show Center Path | Integer | `1` | Draws the center path. |
| Show Path Points | Integer | `0` | Draws the path points. |
| Wire Width | Float | `0.0015` | Width of the wireframe lines. |
| Path Width | Float | `0.001` | Width of the center path line. |
| Point Radius | Float | `0.004` | Radius of the path points. |
| Red | Float | `0.10` | Color for the fill. |
| Green | Float | `0.7` | Color for the fill. |
| Blue | Float | `1.0` | Color for the fill. |
| Alpha | Float | `0.15` | Color for the fill. |
| Red | Float | `0.0` | Color for the fill. |
| Green | Float | `1.0` | Color for the fill. |
| Blue | Float | `1.0` | Color for the fill. |
| Alpha | Float | `1.0` | Color for the fill. |
| Red | Float | `1.0` | Color for the fill. |
| Green | Float | `0.6` | Color for the fill. |
| Blue | Float | `0.0` | Color for the fill. |
| Alpha | Float | `1.0` | Color for the fill. |
| Background | Image | `—` | — |
| Geometry / Path Packet | INPUT_DATATYPE | `—` | — |
| Profile | INPUT_DATATYPE | `—` | — |
| Width | INPUT_DATATYPE | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayCircuitAbstract">vArrayCircuitAbstract</a>
  <a className="node-chip" href="./vArrayCircuitPattern">vArrayCircuitPattern</a>
  <a className="node-chip" href="./vArrayColor">vArrayColor</a>
  <a className="node-chip" href="./vArrayRenderAsset">vArrayRenderAsset</a>
</div>

{/*
Generated page — node: vArrayRenderPathSweep (Array/ShapeRender).
Source: fuse vArrayRenderPathSweep.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
