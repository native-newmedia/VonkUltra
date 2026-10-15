---
sidebar_position: 9
title: vArrayFromAudio
description: "Convert .wav audio data into a vArray format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayFromAudio

Convert .wav audio data into a vArray format

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayFromAudio.png" alt="vArrayFromAudio node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input Source | Dropdown | `File` | — |
| Wave File | Text | `—` | Wave file to read. |
| Wave URL | Text | `—` | — |
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

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vTextCreateBrowse.Output -> vArrayFromAudio.WaveFile
    vArrayFromAudio.Output -> vArrayViewer.Text
    vArrayFromAudio.Output -> vArrayCountElement.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayBuffer">vArrayBuffer</a>
  <a className="node-chip" href="./vArrayCircularPoints">vArrayCircularPoints</a>
  <a className="node-chip" href="./vArrayCreateAsset">vArrayCreateAsset</a>
  <a className="node-chip" href="./vArrayAttractorPoints">vArrayAttractorPoints</a>
</div>

{/*
Generated page — node: vArrayFromAudio (Array/Create).
Source: fuse vArrayFromAudio.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
