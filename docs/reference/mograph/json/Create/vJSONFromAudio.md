---
sidebar_position: 9
title: vJSONFromAudio
description: "Convert .wav audio data into a JSON format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONFromAudio

Convert .wav audio data into a JSON format

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONFromAudio.png" alt="vJSONFromAudio node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | Where the data comes from. Options: File, URL, Base64. |
| Wave File | Text | `—` | Wave file to read. |
| Wave URL | Text | `—` | Address of the wave file. |
| Base64 Wave Text Input | Text | `—` | — |
| Reload Sample | Float | `—` | — |

<details>
<summary>+6 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Select Channel(s) | FuID | `—` | Left, Right or Both. Shown for stereo files. |
| Start Frame (Time Offset) | Integer | `0` | Frame at which reading starts. |
| Stretch (Time Scale) | Float | `1` | Stretches the audio in time. |
| Proxy (sampling) | Integer | `25` | Number of samples skipped. |
| FiltersOFF | FuID | `—` | — |
| Filters | FuID | `—` | — |

</details>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONBuffer">vJSONBuffer</a>
  <a className="node-chip" href="./vJSONCircularPoints">vJSONCircularPoints</a>
  <a className="node-chip" href="./vJSONCreateAsset">vJSONCreateAsset</a>
  <a className="node-chip" href="./vJSONAttractorPoints">vJSONAttractorPoints</a>
</div>

{/*
Generated page — node: vJSONFromAudio (JSON/Create).
Source: fuse vJSONFromAudio.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
