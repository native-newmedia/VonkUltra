---
sidebar_position: 20
title: vJSONGenerateText
description: "Example, generating random Text and Strings The following Generate Random options are available: - Pick from → input Array - Lorem ipsum Basics: - Bool -…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONGenerateText

Example, generating random Text and Strings The following Generate Random options are available: - Pick from → input Array - Lorem ipsum Basics: - Bool - Character - Word - Letter - Vowel Names: - Name - Male name - Male name w/last - Name w/last - Female name - Female name w/last Numbers: - Hash - Integer - Integer w/min - Integer w/both Color: - rgb - rgba - hsl - hsla Tech: - ip - ipv4 - ipv6 Location: - Phone - Address - Street Strings: - String - Syllable - Shuffle Lorem ipsum Node Connections: vJSONGenerateText.chanceOperation = "Lorem ipsum" vJSONGenerateText.selectMode = "Paragraph" vJSONGenerateText.paragraphCount = 8 Name Node Connections: vJSONGenerateText.chanceOperation = "Name" vJSONGenerateText.arrayLength = 1 Female name with last name Node Connections: vJSONGenerateText.chanceOperation = "Female name w/last" vJSONGenerateText.arrayLength = 1 RGB Color Node Connections: vJSONGenerateText.chanceOperation = "rgb" vJSONGenerateText.arrayLength = 12 IPv4 Node Connections: vJSONGenerateText.chanceOperation = "ipv4" vJSONGenerateText.arrayLength = 1

<div className="node-badge-row">
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONGenerateText.png" alt="vJSONGenerateText node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Generate Random →  | Dropdown | `Lorem ipsum` | Type of text generated. |
| Array length | Integer | `1` | Number of values. |
| Seed | Float | `0` | Seed of the random generator. |
| Select Mode →  | Dropdown | `none` | Splits the generated text into characters, words, sentences or paragraphs. Options: none, Characters, Words, Sentences, Paragraphs. |
| Character Count | Integer | `10` | Number of characters. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Word Count | Integer | `5` | Number of words. |
| Sentence Count | Integer | `1` | Number of sentences. |
| Paragraph Count | Integer | `1` | Number of paragraphs. |
| Letter Case | Dropdown | `NONE` | ORIGINAL, UPPER or LOWER. Options: NONE, UPPER, LOWER. |
| Text | ScriptVal | `—` | — |

</details>

## Example Connections

<Tabs>
<TabItem value="example-1" label="Example 1" default>

```
vJSONGenerateText.OutputValData -> vJSONTextWrap.Array
    vJSONTextWrap.Text -> vTextViewer.Input
```

</TabItem>
<TabItem value="example-2" label="Example 2">

```
vJSONGenerateText.OutputValData -> vJSONViewer.Text
```

</TabItem>
<TabItem value="example-3" label="Example 3">

```
vJSONGenerateText.OutputValData -> vJSONViewer.Text
```

</TabItem>
<TabItem value="example-4" label="Example 4">

```
vJSONGenerateText.OutputValData -> vJSONViewer.Text
```

</TabItem>
<TabItem value="example-5" label="Example 5">

```
vJSONGenerateText.OutputValData -> vJSONViewer.Text
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Modify/vJSONTextWrap">vJSONTextWrap</a>
</div>

{/*
Generated page — node: vJSONGenerateText (JSON/Create).
Source: fuse vJSONGenerateText.fuse + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
