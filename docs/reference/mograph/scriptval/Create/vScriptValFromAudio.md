---
sidebar_position: 9
title: vScriptValFromAudio
description: "Convert .wav audio data into a ScriptVal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFromAudio

Convert .wav audio data into a ScriptVal

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValFromAudio.png" alt="vScriptValFromAudio node" />
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

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vTextCreateBrowse.Output -> vScriptValFromAudio.WaveFile
    vScriptValFromAudio.ScriptVal -> vScriptValViewer.ScriptVal
    vScriptValFromAudio.ScriptVal -> vScriptValCount.ScriptVal
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValBuffer">vScriptValBuffer</a>
  <a className="node-chip" href="./vScriptValCircularPoints">vScriptValCircularPoints</a>
  <a className="node-chip" href="./vScriptValCreateAsset">vScriptValCreateAsset</a>
  <a className="node-chip" href="./vScriptValAttractorPoints">vScriptValAttractorPoints</a>
</div>

{/*
Generated page — node: vScriptValFromAudio (ScriptVal/Create).
Source: fuse vScriptValFromAudio.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
