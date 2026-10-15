---
sidebar_position: 38
title: vScriptValPointParticles
description: "Simple particle generator"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValPointParticles

Simple particle generator

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValPointParticles.png" alt="vScriptValPointParticles node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Restart System | Float | `—` | — |
| Time | Float | `0` | Time of the simulation. |
| Start Time | Float | `0` | Time at which the particles start. |
| Particles Count | Integer | `24` | Number of particles. |
| Global Scale | Float | `1` | Overall size. |

<details>
<summary>+39 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Emission Type | Dropdown | `Fibonacci Sphere` | Where the particles start. Options: Random, Noise Field, Fibonacci Sphere, Fibonacci Spiral, Fibonacci Disc. |
| Size X | Float | `1` | Emission size X. |
| Size Y | Float | `1` | Emission size Y. |
| Size Z | Float | `1` | Emission size Z. |
| Center X | Integer | `0` | Emission center X. |
| Center Y | Integer | `0` | Emission center Y. |
| Center Z | Integer | `0` | Emission center Z. |
| Noise Scale | Float | `0.1` | Scale of the noise field. |
| Noise Strength | Float | `0.5` | Strength of the noise field. |
| Noise Seed | Integer | `42` | Seed of the noise field. |
| Fibonacci Radius | Float | `0.3` | Radius of the Fibonacci shapes. |
| Fibonacci Height | Float | `2` | Height of the Fibonacci shapes. |
| Movement X | Float | `0.1` | Velocity X. |
| Movement Y | Float | `0.1` | Velocity Y. |
| Movement Z | Float | `0.1` | Velocity Z. |
| Enable Gravity | Integer | `1` | — |
| Gravity Strength | Float | `0` | Strength of gravity. |
| Enable Wind | Integer | `1` | — |
| Wind X | Float | `0` | Wind X. |
| Wind Y | Float | `0` | Wind Y. |
| Wind Z | Float | `0` | Wind Z. |
| Enable Turbulence | Integer | `1` | — |
| Turbulence Strength | Float | `0.2` | Strength of the turbulence. |
| Enable Attractor | Integer | `1` | — |
| Attractor X | Float | `0` | Attractor position X. |
| Attractor Y | Float | `0` | Attractor position Y. |
| Attractor Z | Float | `0` | Attractor position Z. |
| Attractor Strength | Float | `0.0` | Strength of the attractor. |
| Attractor Falloff | Float | `1` | Falloff of the attractor. |
| Enable Flocking | Integer | `1` | — |
| Separation Radius | Float | `0.5` | Radius for separation between particles. |
| Separation Strength | Float | `0.3` | Strength of the separation. |
| Alignment Radius | Float | `1` | Radius for alignment with neighbours. |
| Alignment Strength | Float | `0.1` | Strength of the alignment. |
| Cohesion Radius | Float | `1` | Radius for cohesion with neighbours. |
| Cohesion Strength | Float | `0.1` | Strength of the cohesion. |
| Lifetime | Float | `2` | Lifetime of the particles. |
| Lifetime Minimum | Float | `1` | Shortest lifetime. |
| Flocking Optimization | Integer | `1` | Speeds up flocking with a neighbour limit. |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValPointParticles.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vScriptValCameraProjection">vScriptValCameraProjection</a>
  <a className="node-chip" href="../ShapeRender/vScriptValShapeRender">vScriptValShapeRender</a>
</div>

{/*
Generated page — node: vScriptValPointParticles (ScriptVal/Create).
Source: fuse vScriptValPointParticles.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
