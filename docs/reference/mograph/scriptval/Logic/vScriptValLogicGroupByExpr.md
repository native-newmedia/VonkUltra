---
sidebar_position: 10
title: vScriptValLogicGroupByExpr
description: "Build a 0/1 mask from an expression using index/value/xyz."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValLogicGroupByExpr

Build a 0/1 mask from an expression using index/value/xyz.

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValLogicGroupByExpr.png" alt="vScriptValLogicGroupByExpr node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Preset | Dropdown | `Custom` | Custom, Value > 0, Even Index, Distance &lt; 0.5, X > 0, Y > 0, or Z > 0. |
| Distance Threshold | Float | `0.5` | Distance limit used by the distance preset. |
| Expression | Text | `—` | Expression used when Preset is Custom. |
| Input | DATATYPE | `—` | Data to process. |

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValLogicCount">vScriptValLogicCount</a>
  <a className="node-chip" href="./vScriptValLogicAND">vScriptValLogicAND</a>
  <a className="node-chip" href="./vScriptValLogicAll">vScriptValLogicAll</a>
  <a className="node-chip" href="./vScriptValLogicAny">vScriptValLogicAny</a>
</div>

{/*
Generated page — node: vScriptValLogicGroupByExpr (ScriptVal/Logic).
Source: fuse vScriptValLogicGroupByExpr.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
