---
sidebar_position: 14
title: vJSONConvert2D_3D
description: "Regroups the values of each array element into groups of 1, 2 or 3 values."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONConvert2D_3D

Regroups the values of each array element into groups of 1, 2 or 3 values.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONConvert2D_3D.png" alt="vJSONConvert2D_3D node" />
</div>

vJSONConvert2D_3D takes an array of value lists and cuts each list into groups of the size chosen by Convert To. With X Y Z, a 2D point &#123;x, y&#125; becomes &#123;x, y, 0&#125;.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Convert To: | Dropdown | `X` | Group size: X (1 value, default), X Y (2 values) or X Y Z (3 values, with the last group padded with 0). |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

Convert To sets the group size: X is 1, X Y is 2 and X Y Z is 3. Each input element is read from the start in groups of that size, and each group becomes one element of the output. Groups never span two input elements.

With X Y Z, a last group that has fewer than 3 values is filled with 0, so &#123;x, y&#125; becomes &#123;x, y, 0&#125;. With X or X Y, a short last group stays short. A 3D point converted with X Y becomes &#123;x, y&#125; followed by &#123;z&#125;.

The output has one element per group, so its length can be larger than the input length.

</details>

## Example Connections

<Tabs>
<TabItem value="lift-a-2d-path-into-3d-and-draw-it" label="Lift a 2D path into 3D and draw it" default>

```
vJSONFromPolyline.Output -> vJSONConvert2D_3D.ArrayA
vJSONConvert2D_3D.Output -> vJSONCameraProjection.ArrayA
vJSONCameraProjection.Output -> vJSONShapeRender.ArrayPoint
Background.Output -> vJSONShapeRender.Input
```

</TabItem>
<TabItem value="convert-grid-points" label="Convert grid points">

```
vJSONPointsOnGrid.Output -> vJSONConvert2D_3D.ArrayA
vJSONConvert2D_3D.Output -> vJSONTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONPacker">vJSONPacker</a>
  <a className="node-chip" href="./vJSONUnPacker">vJSONUnPacker</a>
  <a className="node-chip" href="../Utility/vJSONSlicer">vJSONSlicer</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
