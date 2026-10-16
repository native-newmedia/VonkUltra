---
sidebar_position: 18
title: vScriptValGenerateSphere
description: "Generate points along latitude circles and longitude lines of a sphere, with trim controls for the poles."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValGenerateSphere

Generate points along latitude circles and longitude lines of a sphere, with trim controls for the poles.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValGenerateSphere.png" alt="vScriptValGenerateSphere node" />
</div>

vScriptValGenerateSphere has no input and outputs an array of XYZ points on circles of latitude and lines of longitude of a sphere around the origin, with the polar axis along Z. Number Lat Lines and Number Lon Lines set how many lines are drawn.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Radius | Float | `0.3` | Radius of the sphere. Default 0.3. |
| Number Lat Lines | Integer | `1` | Number of latitude circles. Minimum 0, default 1. |
| Number Lon Lines | Integer | `1` | Number of longitude lines. Minimum 0, default 1. |
| Trim Top | Float | `0` | Fraction of the 90 degrees from the equator to the north pole that is cut away at the top. Minimum -1, default 0. |
| Trim Bottom | Float | `0` | Fraction of the 90 degrees from the equator to the south pole that is cut away at the bottom. Minimum -1, default 0. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Include Lon Lines | Integer | `0.0` | This control has no effect. Longitude lines are always written. Default off. |

</details>

<details>
<summary>Read the full description</summary>

Number Lat Lines circles are spaced evenly in latitude between the poles, not including the poles. Each circle has 101 points, from longitude 0 to 360 degrees, so the last point repeats the first. A circle at latitude a has the radius Radius * cos(a) and sits at Z = Radius * sin(a).

Number Lon Lines lines are spaced evenly in longitude, and each runs from the south pole to the north pole with 100 points. The longitude lines are always written. The Include Lon Lines checkbox does not change the output, because the code tests the value as a boolean and a Lua number, including 0, counts as true.

Trim Top and Trim Bottom remove points near the poles. Each value is a fraction of the 90 degrees between the equator and a pole. Points above latitude 90 degrees minus Trim Top * 90 degrees, and below -90 degrees plus Trim Bottom * 90 degrees, are left out of both the latitude circles and the longitude lines. Negative values extend the limits past the poles and remove nothing.

With the defaults (Radius 0.3, 1 latitude line, 1 longitude line, no trim) the node outputs 201 points, the equator circle with 101 points and one meridian with 100 points. Radius is not limited, so a negative Radius mirrors the sphere.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-the-sphere-lines" label="Draw the sphere lines" default>

```
vScriptValGenerateSphere.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-sphere-before-drawing" label="Offset the sphere before drawing">

```
vScriptValGenerateSphere.Output -> vScriptValTranslate.ArrayA
vScriptValTranslate.Output -> vScriptValCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValGeodesicSphere">vScriptValGeodesicSphere</a>
  <a className="node-chip" href="./vScriptValPointsOnSphere">vScriptValPointsOnSphere</a>
  <a className="node-chip" href="./vScriptValTorus">vScriptValTorus</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
