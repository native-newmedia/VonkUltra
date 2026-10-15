---
sidebar_position: 5
title: vScriptValRenderAssetSVG
description: "Export an SVG wireframe from a ScriptVal Lua table of vGeometry mesh data Example Node Connections:"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValRenderAssetSVG

Export an SVG wireframe from a ScriptVal Lua table of vGeometry mesh data Example Node Connections:

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValRenderAssetSVG.png" alt="vScriptValRenderAssetSVG node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| View Mode | Dropdown | `Geometry` | Geometry or UV Snapshot. |
| Show Bounding Box | Integer | `0` | Draws the bounding box of the model. |
| SVG File | Text | `—` | Output SVG file. |
| Field of View | Float | `90.0` | Perspective field of view in degrees. |
| Screen aspect ratio | Float | `16 / 9` | — |

<details>
<summary>+46 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Near clipping plane | Float | `0.1` | — |
| Far clipping plane | Float | `1000` | — |
| Use Edge Data | Integer | `1` | Draws the edge list instead of connecting points in order. |
| Show Lines | Integer | `1` | Draws the lines. |
| Show Per-Object Color | Integer | `0.0` | Uses the color stored with each object. |
| Show Dots | Integer | `1` | Draws a dot at each point. |
| Show Index | Integer | `0` | Draws the index number at each point. |
| Line Width | Float | `0.005` | Width of the lines. |
| Dot Radius | Float | `0.0025` | Radius of the dots. |
| Red | Float | `0.466` | Color for the line. |
| Green | Float | `0.847` | Color for the line. |
| Blue | Float | `0.588` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Dot Sides | Integer | `4` | Number of sides of each dot. |
| Dot Width | Float | `0.0` | Outline width of the dots. |
| Hide Default Dots | Integer | `0` | Hides the built-in dots. |
| Hide Custom Dots | Integer | `0` | Hides the custom dot shapes. |
| Render Outline Dots | Integer | `0` | Draws the dots as outlines. |
| Scale Dots | Float | `1` | Scales the dots. |
| Red | Float | `1.0` | Color for the line. |
| Green | Float | `1.0` | Color for the line. |
| Blue | Float | `0.56` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Text Size | Float | `0.02` | Size of the index text. |
| Text Style | Dropdown | `Bold` | Regular or Bold. |
| Red | Float | `1.0` | Color for the line. |
| Green | Float | `1` | Color for the line. |
| Blue | Float | `1` | Color for the line. |
| Alpha | Float | `1.0` | Color for the line. |
| Fade Color | Float | `0.1` | Fades the color with distance. |
| Filter | Dropdown | `Gaussian` | — |
| Soft Edge | Float | `0` | — |
| Line Type | Dropdown | `Solid` | Solid, Dash, Dot, Dash Dot, or Dash Dot Dot. |
| Join Type | Dropdown | `2.0` | Bevel or Round corners. |
| X Offset | Float | `—` | Moves the model along X. |
| Y Offset | Float | `—` | Moves the model along Y. |
| Z Offset | Float | `1.0` | Moves the model along Z, away from the camera. |
| X Rotation | Float | `—` | Rotation around X in degrees. |
| Y Rotation | Float | `—` | Rotation around Y in degrees. |
| Z Rotation | Float | `—` | Rotation around Z in degrees. |
| Lock X/Y | Integer | `1` | Uses one scale value for X and Y. |
| X Scale | Float | `1.0` | Scale of the model. |
| Y Scale | Float | `1.0` | Scale along Y. Shown when Lock X/Y is off. |
| Input | Image | `—` | Image that the result is drawn onto. |
| vGeometry | ScriptVal | `—` | — |
| Shape | ScriptVal | `—` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValFromOBJ.ScriptValPoints -> vScriptValCreateAsset.ScriptValPoints
    vScriptValFromOBJ.ScriptValEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValFromOBJ.ScriptValUVs -> vScriptValCreateAsset.ScriptValUVs
    vScriptValFromOBJ.ScriptValUVEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValCreateAsset.Output -> vScriptValMergeAsset.ScriptVal1
    vScriptValMergeAsset.Output -> vScriptValRenderAssetSVG.vGeometry
    Background.Output -> vScriptValRenderAssetSVG.Input
```

</TabItem>
<TabItem value="example-2" label="Example 2">

```
vMatrixCreateTRS.Output -> vScriptValLocatorAsset.Matrix
    vScriptValLocatorAsset.Output -> vScriptValMergeAsset.ScriptVal
    vScriptValMergeAsset.Output -> vScriptValRenderAssetSVG.vGeometry
    Background.Output -> vScriptValRenderAssetSVG.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValFromOBJ">vScriptValFromOBJ</a>
  <a className="node-chip" href="../Create/vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="../Utility/vScriptValMergeAsset">vScriptValMergeAsset</a>
  <a className="node-chip" href="../../Matrix/Create/vMatrixCreateTRS">vMatrixCreateTRS</a>
  <a className="node-chip" href="../Create/vScriptValLocatorAsset">vScriptValLocatorAsset</a>
</div>

{/*
Generated page — node: vScriptValRenderAssetSVG (ScriptVal/ShapeRender).
Source: fuse vScriptValRenderAssetSVG.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
