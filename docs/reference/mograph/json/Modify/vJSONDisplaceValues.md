---
sidebar_position: 16
title: vJSONDisplaceValues
description: "Displace XYZ positions using noise with spherical falloff"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONDisplaceValues

Displace XYZ positions using noise with spherical falloff

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONDisplaceValues.png" alt="vJSONDisplaceValues node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Noise Scale | Float | `0` | — |
| Noise Rate | Float | `0.001` | — |
| Animation Speed | Float | `0` | — |
| Amplitude | Float | `0` | Strength of the displacement. |
| FallOff Sphere X | Float | `0` | Falloff sphere center X. |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| FallOff Sphere Y | Float | `0` | Falloff sphere center Y. |
| FallOff Sphere Z | Float | `0` | Falloff sphere center Z. |
| FallOff Radius | Float | `0` | Radius of the falloff sphere. |
| FallOff Tightness | Float | `0.1` | Sharpness of the falloff edge. |
| Invert falloff | Integer | `0.0` | Applies the noise outside the sphere instead of inside. |
| Input | DATATYPE | `—` | Data to process. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONCircularPoints.Output -> vJSONDisplaceValues.ArrayA
    vJSONDisplaceValues.Output -> vJSONCameraProjection.ArrayA
    vJSONCameraProjection.Output -> vJSONShapeRender.JSONPoint
    Background.Output -> vJSONShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCameraProjection">vJSONCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vJSONShapeRender">vJSONShapeRender</a>
</div>

{/*
Generated page — node: vJSONDisplaceValues (JSON/Modify).
Source: fuse vJSONDisplaceValues.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
