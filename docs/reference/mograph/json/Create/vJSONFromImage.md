---
sidebar_position: 10
title: vJSONFromImage
description: "Create points from the pixels of an image channel that pass a threshold, keeping every Nth match."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromImage

Create points from the pixels of an image channel that pass a threshold, keeping every Nth match.

<div className="node-badge-row">
  <span className="node-badge node-badge--intermediate">Intermediate</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromImage.png" alt="vJSONFromImage node" />
</div>

vJSONFromImage takes an image on its Image Input socket and outputs an array of XYZ points, one for each kept pixel whose channel value reaches the threshold. Channel, Threshold and Invert choose the pixels, and Sample Step thins them out.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Image Input | Image | `—` | Image whose pixels are tested. |
| Sample Step | Integer | `10` | Writes every Nth pixel that passes the test. Minimum 1, default 10. |
| Threshold | Float | `0.5` | A pixel passes when its channel value is at least this value. Range 0 to 1, default 0.5. |
| Channel (0=R,1=G,2=B,3=A) | Integer | `0` | Channel that is tested, 0 red, 1 green, 2 blue, 3 alpha. Range 0 to 3, default 0. |
| Invert | Integer | `0` | When on, the tested value is 1 minus the channel value. Default off. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Preserve Image Aspect | Integer | `1` | When on, Y is scaled by the image height divided by its width. Default on. |

</details>

<details>
<summary>Read the full description</summary>

The node scans every pixel of the image from row 0, column 0. It takes the value of the chosen Channel (0 red, 1 green, 2 blue, 3 alpha), turns it into 1 minus the value if Invert is on, and keeps the pixel if the result is greater than or equal to Threshold. Of the pixels that pass, only every Sample Step-th one is written, starting with the first. Sample Step counts passing pixels, not pixel columns or rows.

For a pixel at column px and row py of a w by h image, X = 0.5 - px / (w - 1) and Y = (0.5 - py / (h - 1)) * aspect. Z is the channel value used for the test, after Invert. With Preserve Image Aspect on, aspect is the image height divided by its width, taking pixel aspect into account. With it off, aspect is 1. The positions therefore fit in a box that is 1 unit wide, centered on the origin.

The defaults are Sample Step 10, Threshold 0.5, Channel 0, Invert off and Preserve Image Aspect on. A larger image makes the scan slower, and a Sample Step of 1 writes a point for every passing pixel, so the output can become very large.

If no image is connected, or the image has no size, the output is an empty array. The node does not process during the pre-calculation pass.

</details>

## Example Connections

<Tabs>
<TabItem value="draw-points-from-an-image" label="Draw points from an image" default>

```
Loader.Output -> vJSONFromImage.ImageInput
vJSONFromImage.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="offset-the-points-before-drawing" label="Offset the points before drawing">

```
Loader.Output -> vJSONFromImage.ImageInput
vJSONFromImage.Output -> vJSONTranslate.ArrayA
vJSONTranslate.Output -> vJSONCameraProjection.ArrayA
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONFromPolyline">vJSONFromPolyline</a>
  <a className="node-chip" href="./vJSONRandom">vJSONRandom</a>
  <a className="node-chip" href="./vJSONPointsOnGrid">vJSONPointsOnGrid</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
