---
sidebar_position: 30
title: vScriptValNoiseOnMesh
description: "Displaces points with Perlin or fractal noise along the mesh normal or in 3D."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValNoiseOnMesh

Displaces points with Perlin or fractal noise along the mesh normal or in 3D.

<div className="node-badge-row">
  <span className="node-badge node-badge--advanced">Advanced</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValNoiseOnMesh.png" alt="vScriptValNoiseOnMesh node" />
</div>

vScriptValNoiseOnMesh takes an array of XYZ points and a mesh, and adds a 3D gradient noise to each point. Noise Mode chooses between a move along the normal at the closest vertex and a 3D move that is snapped to the nearest mesh vertex.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Mode | Dropdown | `Normal Only` | Normal Only (default) or 3D Reproject. 3D Reproject outputs mesh vertices. |
| Noise Type | Dropdown | `Perlin` | Perlin (default) or Fractal. The fractal controls are shown when Fractal is selected. |
| Amplitude | Float | `0.1` | Size of the displacement. Slider 0 to 1, default 0.1. |
| Frequency | Float | `1` | Multiplies the point position before the noise lookup. Minimum 0.0001, slider 0 to 10, default 1. |
| Octaves | Integer | `4` | Number of noise layers in Fractal mode. Range 1 to 16, default 4. Hidden for Perlin. |

<details>
<summary>+10 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Lacunarity | Float | `2` | Frequency multiplier per layer in Fractal mode. Minimum 1, default 2. Hidden for Perlin. |
| Gain | Float | `0.5` | Weight multiplier per layer in Fractal mode. Range 0 to 1, default 0.5. Hidden for Perlin. |
| Animation Speed | Float | `0` | Added to the noise lookup as this value times the render time. Slider 0 to 5, default 0. |
| Random Seed | Integer | `0` | Integer from 0, slider to 100000, default 0. Changes the noise pattern. |
| Surface Offset | Float | `0` | Distance from the vertex along its estimated normal. Slider -1 to 1, default 0. |
| Affect X | Float | `1` | X comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Y | Float | `1` | Y comes from the result when checked (default), otherwise it keeps the input value. |
| Affect Z | Float | `1` | Z comes from the result when checked (default), otherwise it keeps the input value. |
| Points | DATATYPE | `—` | Point positions. |
| Mesh Points | DATATYPE | `—` | Points of the mesh that the input is compared with. |

</details>

<details>
<summary>Read the full description</summary>

The noise is sampled at the point position times Frequency plus Animation Speed times the render time, and scaled by Amplitude. Perlin gives one 3D gradient noise value. Fractal adds Octaves of it, each with its frequency times Lacunarity and its weight times Gain, divided by the total weight. Random Seed changes the noise pattern.

Normal Only moves each point to its closest mesh vertex and then along the normal estimated there by noise + Surface Offset. 3D Reproject moves the point by three noise values, one for each axis, replaces the result with the closest mesh vertex and adds Surface Offset along that normal.

Affect X, Y and Z keep unchecked axes at their input value. With no input points the output is empty.

</details>

## Example Connections

<Tabs>
<TabItem value="add-noise-to-a-grid-on-a-loaded-mesh-and-draw" label="Add noise to a grid on a loaded mesh and draw" default>

```
vScriptValPointsOnGrid.Output -> vScriptValNoiseOnMesh.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValNoiseOnMesh.MeshPoints
vScriptValNoiseOnMesh.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="add-noise-to-scattered-points" label="Add noise to scattered points">

```
vScriptValScatterOnMesh.Output -> vScriptValNoiseOnMesh.ArrayPoints
vScriptValFromOBJ.Points -> vScriptValNoiseOnMesh.MeshPoints
vScriptValNoiseOnMesh.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValDisplaceValues">vScriptValDisplaceValues</a>
  <a className="node-chip" href="./vScriptValJitterOnMesh">vScriptValJitterOnMesh</a>
  <a className="node-chip" href="./vScriptValOffsetByNormal">vScriptValOffsetByNormal</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
