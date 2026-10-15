---
sidebar_position: 63
title: vScriptValTextWrap
description: "Text wrap Operations on a ScriptVal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTextWrap

Text wrap Operations on a ScriptVal

<div className="node-badge-row">
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTextWrap.png" alt="vScriptValTextWrap node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Output As: | Dropdown | `String` | String or Table. |
| Line length | Integer | `25` | Maximum characters per line. |
| Number of Paragraphs | Integer | `1` | Number of paragraphs. |
| Input | DATATYPE | `—` | Data to process. |

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vScriptValGenerateText.chanceOperation = "Lorem ipsum"
    vScriptValGenerateText.selectMode = "Paragraph"
    vScriptValGenerateText.paragraphCount = 8
    vScriptValGenerateText.OutputValData -> vScriptValTextWrap.ScriptVal
    vScriptValTextWrap.Text -> vTextViewer.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValGenerateText">vScriptValGenerateText</a>
</div>

{/*
Generated page — node: vScriptValTextWrap (ScriptVal/Modify).
Source: fuse vScriptValTextWrap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
