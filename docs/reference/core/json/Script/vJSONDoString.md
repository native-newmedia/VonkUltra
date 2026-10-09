---
sidebar_position: 1
title: vJSONDoString
description: "Return JSON text from running a string of Lua code"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONDoString

Return JSON text from running a string of Lua code

<div className="node-badge-row">
  <span className="node-badge">Core / JSON</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/json/vJSONDoString.png" alt="vJSONDoString node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| JSON | DATATYPE | `—` | Optional JSON value passed into the Lua script's environment. |
| Script Header Wire | Text | `—` | Optional wired-in Lua source prepended to Script before it runs — useful for sharing common helper functions across multiple vJSONDoString nodes. |
| > | Float | `—` | A run/source button — appears to be a non-functional placeholder in this fuse: its execute script (`GetSource`) is referenced but never actually defined in the source. |
| Script | Text | `—` | Lua code to execute. Its return value becomes the node's JSON text output. |



{/*
Generated page — node: vJSONDoString (Core/JSON/Script).
Source: fuse vJSONDoString.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
