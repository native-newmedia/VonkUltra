---
sidebar_position: 28
title: vScriptValMirror
description: "Mirrors points across a plane on the X, Y or Z axis, optionally keeping the originals."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValMirror

Mirrors points across a plane on the X, Y or Z axis, optionally keeping the originals.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValMirror.png" alt="vScriptValMirror node" />
</div>

vScriptValMirror takes an array of XYZ points and mirrors them across a plane at a pivot position on one axis. Keep Original adds the mirrored points after the originals.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Mirror Axis | Dropdown | `X` | X (default), Y or Z. The axis across which the points are mirrored. |
| Axis Pivot | Float | `0` | Position of the mirror plane on the chosen axis. Default 0. |
| Keep Original | Integer | `1` | Outputs the original points followed by the mirrored points when on (default). |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

Mirror Axis selects X, Y or Z, and Axis Pivot (default 0) is the position of the mirror plane on that axis. The chosen coordinate of every point becomes 2 * pivot - value, and the other two coordinates stay the same. With a pivot of 0, X = 3 becomes X = -3.

With Keep Original on (the default), the output holds the original points first and then the mirrored points, so it is twice as long as the input. With it off, only the mirrored points are output. The mirrored points hold X, Y and Z only. Input that does not start with a list is passed through unchanged.

</details>

## Example Connections

<Tabs>
<TabItem value="mirror-a-half-circle-and-draw" label="Mirror a half circle and draw" default>

```
vScriptValPointsOnArc.Output -> vScriptValMirror.Input
vScriptValMirror.Output -> vScriptValCameraProjection.ArrayA
vScriptValCameraProjection.Output -> vScriptValShapeRender.ArrayPoint
Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
<TabItem value="mirror-displaced-points" label="Mirror displaced points">

```
vScriptValPointsOnGrid.Output -> vScriptValDisplaceValues.ArrayA
vScriptValDisplaceValues.Output -> vScriptValMirror.Input
vScriptValMirror.Output -> vScriptValTranslate.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValRadialSymmetry">vScriptValRadialSymmetry</a>
  <a className="node-chip" href="./vScriptValMirrorThruMesh">vScriptValMirrorThruMesh</a>
  <a className="node-chip" href="./vScriptValRepeat">vScriptValRepeat</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}
