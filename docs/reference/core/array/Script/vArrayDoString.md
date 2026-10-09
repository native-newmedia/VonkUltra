---
sidebar_position: 1
title: vArrayDoString
description: "Return Array text from running a string of Lua code"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayDoString

Return Array text from running a string of Lua code

<div className="node-badge-row">
  <span className="node-badge">Core / Array</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/array/vArrayDoString.png" alt="vArrayDoString node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | Optional JSON array text passed into the Lua script's environment. |
| Script Header Wire | Text | `—` | Optional wired-in Lua source prepended to Script before it runs — useful for sharing common helper functions across multiple vArrayDoString nodes. |
| > | Float | `—` | A run/source button — appears to be a non-functional placeholder in this fuse: its execute script (`GetSource`) is referenced but never actually defined in the source. |
| Script | Text | `—` | Lua code to execute. Its return value becomes the node's JSON array text output. |



{/*
Generated page — node: vArrayDoString (Core/Array/Script).
Source: fuse vArrayDoString.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
