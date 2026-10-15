---
sidebar_position: 63
title: vArrayTextWrap
description: "Text wrap Operations on a Array"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayTextWrap

Text wrap Operations on a Array

<div className="node-badge-row">
  <span className="node-badge">Mograph / Array</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/array/vArrayTextWrap.png" alt="vArrayTextWrap node" />
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
vArrayGenerateText.chanceOperation = "Lorem ipsum"
    vArrayGenerateText.selectMode = "Paragraph"
    vArrayGenerateText.paragraphCount = 8
    vArrayGenerateText.Output -> vArrayTextWrap.Array
    vArrayTextWrap.Text -> vTextViewer.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vArrayGenerateText">vArrayGenerateText</a>
</div>

{/*
Generated page — node: vArrayTextWrap (Array/Modify).
Source: fuse vArrayTextWrap.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
