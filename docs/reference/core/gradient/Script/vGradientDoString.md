---
sidebar_position: 1
title: vGradientDoString
description: "Return a Gradient object from running a string of Lua code The code you run is expected to return a Gradient formatted Lua table structure: return {} or return…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientDoString

Return a Gradient object from running a string of Lua code The code you run is expected to return a Gradient formatted Lua table structure: return \{\} or return tbl or return \{ \{ P = 0, R = 1, G = 0, B = 0, A = 1.0 \}, \{ P = 0.5, R = 0, G = 1, B = 0, A = 1.0 \}, \{ P = 1, R = 0, G = 0, B = 1, A = 1.0 \} \}

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientDoString.png" alt="vGradientDoString node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Gradient | DATATYPE | `—` | Optional Gradient value passed into the Lua script's environment. |
| Script Header Wire | Text | `—` | Optional wired-in Lua source prepended to the script before it runs — useful for sharing common helper functions across multiple vGradientDoString nodes. |
| > | Float | `—` | Selects and activates the node connected to Script Header Wire — a quick way to jump to it. |
| Input | Text | `—` | Lua code to execute. It must `return` a Gradient-formatted table, e.g. `return { {P=0,R=1,G=0,B=0,A=1}, {P=1,R=0,G=0,B=1,A=1} }`. |



{/*
Generated page — node: vGradientDoString (Core/Gradient/Script).
Source: fuse vGradientDoString.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
