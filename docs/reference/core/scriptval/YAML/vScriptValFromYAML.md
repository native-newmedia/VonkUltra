---
sidebar_position: 1
title: vScriptValFromYAML
description: "Casts YAML text into a ScriptVal object Technology Note: [YAML](https://yaml.org/) is used as part of Film & TV production lens metadata workflows by Cine…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromYAML

Casts YAML text into a ScriptVal object Technology Note: [YAML](https://yaml.org/) is used as part of Film & TV production lens metadata workflows by Cine lenses with sensors and encoders like the [Cooke Optics /i Technology](https://cookeoptics.com/i-technology/) metadata system. YAML metadata exchange is also starting to be used by other Cine lens manufacturers, in match-moving and tracking packages like [SynthEyes](https://www.ssontech.com/) and PFTrack, and as part of data exchange approaches like [OpenTimelineIO](https://github.com/reinecke/otio-cookelensmetadata), too. Blackmagic BRAW media filmed on a [BMD URSA Mini Pro 12K](https://www.blackmagicdesign.com/products/blackmagicursaminipro) camera with a Cooke Optics PL-mount lens is capable of holding this YAML metadata recorded lens information internally. This is useful for supporting better data interchange between VP (Virtual Production) onset ICVFX (In-Camera VFX) departments and subsequent post-production workflows carried out by external vendors.

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFromYAML.png" alt="vScriptValFromYAML node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | DATATYPE | `—` | YAML text to convert into a ScriptVal Lua table, e.g. Cooke /i Technology lens metadata. |
| Sort List | Integer | `0.0` | Sorts keys alphabetically in the resulting table, instead of preserving source order. |



{/*
Generated page — node: vScriptValFromYAML (Core/ScriptVal/YAML).
Source: fuse vScriptValFromYAML.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}
