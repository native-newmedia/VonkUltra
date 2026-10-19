# Fuse findings from the content pipeline

Collected while writing the Mograph Array records (Animate, Modify and the mesh follow-up). The docs describe what the code does today. The rows marked in the Status column were handled in fix batch F1 (branch fix/findings-f1 of native-newmedia/vonk-ultra-mograph, see _Cleanup/FIXES.md there); the records for those tools were re-written against the fixed fuses. Batch F4 (branch fix/findings-f4) handled section 2 items and the zero guards of Wave and Stagger. Batch F3 (branch fix/findings-f3) handled the Create tools listed after BoundingBox. Batch F2 (branch fix/findings-f2, same repository) handled CameraProjection, DisplaceValues, RotateValues, Translate and Perlin3Noise, and recorded decisions for the other F2 rows. Every other row is still open. Fusion was not run, so each item is read from the Lua code only. Fixes should follow the Mograph repo rules (same change in all three families, `luac -p`, test in Fusion).

Families: A = Array, S = ScriptVal, J = JSON. "All" means all three behave this way.

## 1. Likely bugs (behavior contradicts the label or the registered description)

| Tool | Finding | Families | Status |
|---|---|---|---|
| Sin | The Sin and Cos buttons are swapped: Sin (default) outputs cosine, Cos outputs sine. | All | Fixed |
| Math | Arc Sine, Arc Cosine, Arc Tangent compute sinh, cosh, tanh. Negate computes 1 - A. Randomseed returns a random value between A and B and seeds nothing. | All | Fixed (Randomseed relabelled Random A to B) |
| CameraProjection | Close Edge Loop is inverted: the generated edge returns to point 1 when the box is off. | All | Fixed in F2 (Close Edge Loop) |
| DisplaceValues | X and Y noise is multiplied by 0 (`nx * 0 * falloff`), so only Z moves. The Array fuse displaces X, Y and Z. | S, J | Fixed in F2 (S, J); Noise Rate below 0.0053 fixed in F4 |
| Iterator | Registered as "Loop an array", but it keeps every Nth point. | All | Description fixed |
| SortByDistance | Smallest Distance and Distance Mode have no effect. `strictDistanceMode and nil or fallbackIndex` always returns the fallback, so Strict equals Preferred, and the result is always the nearest-neighbor chain. | All | Fixed in F2 (Strict appends unreached points) |
| RotateValues | Pass Thru has no effect (the amount is always given, so the guard value is unused). Show Input shows the Rotate Amount port, not the Array port. | All | Pass Thru fixed in F2; Show Input kept |
| Reverse | Preserve Metadata and Debug Mode are not read. | All | Preserve Metadata and Debug Mode implemented |
| Translate | Lock X/Y only changes visibility. Y Scale is always read, X Scale is used for X and Z. A comment mentions rotation that does not exist. | All | Lock X/Y fixed in F2; comment fixed |
| PointAttractor | The spring term is always 0 (points start at rest at their input position), so Spring Return and Spring Bounce do nothing. Time is not read. | All | Description changed in F2 (spring dynamics dropped); Time kept |
| PointAttractor, PointAttractorSpring | Multiplier divides the attractor X and Y. The old text says it multiplies the strength. Center, Z Offset, Axis and Relative Flare Offset are not read. | All | No change in F2, matches its label (Multiplier); hidden controls left |
| Wave | X/Y/Z Position are displacement amounts, not a wave origin. Falloff is a plain multiplier with default 0, so nothing moves by default. Delay is not read. | All | Relabelled X, Y, Z Amount; Delay unused; Period 0 guarded in F4 |
| Perlin3Noise | Replaces the values with noise (does not add). A Curl type exists in code but the buttons offer only Perlin and Fractal. The Array fuse flattens and regroups by 3, which breaks 2-value points. S and J keep point length. | A differs | Array regrouping fixed in F2; Replace and Curl kept |
| MapRange | Mode Select is not read. The default button is -1 to 1, but New Min/Max default to -10 and 10. The control ID of Mode Select ends with a space. | All | Defaults fixed; Mode Select unchanged (preset picker); Array keeps other keys of the input table in F4 |
| Packer | Pack To defaults to X, but Custom Group Size defaults to 0, which packs everything into one group. Only the group size is read. | All | Fixed (Custom Group Size default 1) |
| MaskByMesh | Falloff Distance, Weight Power, Min Output Weight, Append Weight and Surface Offset are hidden and never shown (NotifyChanged is empty). Soft Falloff does nothing while Falloff Distance is 0. | All | Open |
| BooleanMaskOps | The "Pass A / Pass B / Average When True" modes pass the A or B point unchanged when false, so the output length never shrinks. With default amounts they equal the A or B points. Trim Zeros removes any all-zero element, not only trailing ones. | All | Pass modes fixed; Trim Zeros kept |
| ApplyMask | Trim Zeros removes any all-zero point, not only trailing ones. | All | No change, Trim Zeros kept |
| Interpolate | Show Input only shows the Progress port. Arrays are trimmed to the shorter length. | All | No change, matches its labels |
| AttractToMesh | JSON fuse has two inputs with main link 1 (Points and JSON Points); only JSON Points is read. Array/ScriptVal pass `(meshPts, false, true)` to buildSurfaceSamples, JSON passes one argument. | J differs | Open |
| ScaleFromMesh | Two point inputs: only Array Points is read, Points (ID Points) is not. | All | Open |
| SlideOnMesh | Default direction 0, 0, 0 is turned into 0, 0, 1. | All | Open |
| ProjectOnMesh | Closest Surface, Nearest Vertex and Face Center give the same result. | All | Open |
| ClampToMeshProx, MirrorThruMesh, SnapMeshVertex, SortByMeshProx | "Surface" and "Vertex" give the same result. The Surface-to-Vertex fallback in MirrorThruMesh never changes anything. | All | Open |
| RelaxOnMesh | Moves each point toward the average of its 6 nearest points, which pulls points together. The registered description says it spreads them evenly. Output points are mesh vertices. | All | Open |
| JitterOnMesh, NoiseOnMesh (3D Reproject), SlideOnMesh | The result is replaced by the closest mesh vertex, so outputs are vertices. | All | Open |
| ClassifyByMesh | Normals point away from the centroid of all vertices, so concave shapes can misclassify. Offset Space visibility is updated inside Process(). | All | Open |
| TextWrap | In Table mode the Text output holds `tostring(table)`. In String mode the TextTable output holds the string in its array field. | All | Text output fixed; TextTable kept |
| TangentVector | Z of the tangent is always 0. Max angle rotates the vectors around Z (it is not a limit between segments). Scale Factor defaults to 0, so End and flipped equal Start. | All | Z fixed; Rotate Angle relabelled; Scale Factor default 1 |
| RepeatTransform | Translate/Scale/Rotation are totals reached at the last copy, not per-copy steps. In grid modes the share still uses Number of Times, so it can exceed 1. Position Array is decoded as a bare flat list, so an array-wrapper input gives no offsets (not run). | All | No change in F2, matches its labels |
| RippleDisplacer | The Time control is ignored while Auto Animate is on. Offset Multiplier scales the time offsets, not the displacement. Each output adds a built-in step to amplitude, frequency and time offset. | All | Built-in step moved into defaults; Time and Offset Multiplier kept |
| Stagger (Animate) | Linear is a sine, not linear. Exponential is an envelope times a sine. ClampOutput, MinValue, MaxValue, ReverseIndex, Yoyo and Steps are not read. | All | Linear and Exponential fixed; hidden controls left; Sawtooth with Wave Frequency 0 guarded in F4 |
| MaterialEasing (Animate) | Falloff X/Y/Z shift is divided by the point count. Three Standard Spatial curves are identical, and the three Standard Effects curves repeat the Expressive Effects ones. Empty input gives `[]`, not an object. Duration 0 divides by zero. | A | Falloff, Duration 0 and empty output fixed; duplicate curves kept |
| PointsJitter (Animate) | Time 0 leaves a fixed per-point wobble. Jitter has no maximum when Uniform Jitter is off. | All | No change, matches its labels |
| ForEachIndexed | "by Index" modes use the index inside the group, not the global index. | All | Fixed |
| BoundingBox | Elements with other than 1, 2 or 3 values are skipped. | All | No change, matches its description |
| PointsOnRectangle | Line Strip, Loop and the four corner checkboxes are numbers tested with `if value then`, so they have no effect. | All | Fixed in F3 (`> 0.5`; Loop and Line Strip now default off in effect) |
| GenerateSphere | includeLonLines has no effect (same pattern). | All | Fixed in F3 |
| PointParticles | The Enable checkboxes, Center X/Y/Z and Flocking Optimization are always true (same pattern). Time defaults to 0, so the default output is static. | All | Checkboxes fixed in F3; Time default kept |
| GenerateText | In Generate Random, "Male name" and "Name w/last" appear swapped against the code. | All | Fixed in F3 |
| PointsOnSphere | The Trim Top and Trim Bottom labels feed the lower and upper Y limit the wrong way round. | All | Fixed in F3 (defaults swapped with the labels) |
| CubicBezier | Default Array Length 2 with Pack To X Y Z gives an empty output. | All | Fixed in F3 (default 6) |
| GenerateSpirals, LogarithmicSpiral | The Logarithmic type writes Z = 0 in GenerateSpirals and Z = theta * 0.05 in LogarithmicSpiral. | All | Fixed in F3 (GenerateSpirals Logarithmic rises in Z, decided) |
| MapGeoJSON | Scale is multiplied by 1000 in the code. Auto Fit is read and not used. | All | Scale kept (factor 1000, decided); Auto Fit left |
| FromSpline | X and Y are multiplied by Width Scale + 0.5 and Height Scale + 0.5, so the defaults of 1.5 give a factor of 2. | All | Fixed in F3 (defaults 2) |
| Random | The hidden Multiply control is read and never used. | All | No change, hidden control left |

## 2. Code quality and risk

- Several nodes call `math.randomseed` on every render (CopyToPoints, JitterOnMesh, NoiseOnMesh, AttrRandomize uses its own hash and does not). They change the global random state. **Status:** CopyToPoints fixed in F4 (local hash, no global state; its numbers per Seed changed). JitterOnMesh and NoiseOnMesh are for F5. Other tools that call it are listed in FIXES.md F4, not changed.
- CameraProjection, PointAttractor, PointAttractorSpring create an `Image` with original size 0 and use it in `convertY`. The resulting value was not checked at runtime. **Status:** F4: not changed, unverified. Whether the image size is 0 cannot be shown from the code.
- DisplaceValues: with Noise Rate at or below about 0.005 (default 0.001) the hash gives a constant value for every point (about 0.7182). **Status:** Fixed in F4 for rates below 0.0053; larger rates unchanged.
- MaskByMesh, RaycastToMesh, RelaxOnMesh, FuseClosePoints, SortByDistance have O(n squared) or worse loops over the points. **Status:** Left, algorithm change (F4).
- ParallelOffset: corners are not mitered, and "left" lies at negative Y for a path along +X. **Status:** Left, algorithm change (F4).
- Unused code: MaterialEasing `parseJSONArray`, RippleDisplacer/others `DebugMode`, Math `Which` (hidden), PointsOnArc `mul` (hidden), CameraProjection RotOrder, Near, Far, Shear (hidden).

## 3. Mesh input (vmeshutils)

`vmeshutils.buildSurfaceSamples` uses only the vertex list. Each vertex becomes one sample with a = b = c, so every "closest point on the surface" is the closest vertex. Normals are fitted to the 8 nearest vertices and flipped to point away from the centroid of all vertices. The patch samples (second argument true) are averages of a vertex and its 7 nearest neighbors. If real triangle support is wanted, `vmeshutils` needs the faces from `vArrayFromOBJ`.

## Appendix: reviewer notes from every ai record

Generated from the `status.note` field of each record that has one. These also contain mismatches with the old text.

### AlignToMesh

The registered description says "nearest mesh vertex" and matches the code. The old overview said the node finds the closest point on the mesh surface; it finds the closest vertex. Affect X, Y and Z are read in every mode but only change the result in Surface and Blend. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### ApplyMask

Reviewed in fix batch F1: the code matches its label and registered description, so the fuse was not changed. Trim Zeros does what its label says (it is not limited to trailing zeros). A missing mask entry counts as 1, so with no Mask connected the output is the Modified points scaled by Amount.

### AttractToMesh

Blend is clamped to 0 to 1 in the code although the control accepts any value. The Array and ScriptVal fuses call buildSurfaceSamples(meshPts, false, true), the JSON fuse calls it with the mesh points only. The extra arguments only skip the normal estimation, which this node does not use, so positions are the same. The JSON fuse has two inputs with the main link 1, Points and JSON Points; only JSON Points is read. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### AttrTransfer

Offset XYZ and Replace XYZ use one number for all three axes, so they do not move or place a point along a direction. Apply Amount is ignored by Store Attribute in 4th Value. The fourth value of a Target point is removed in every mode except that one.

### BooleanMaskOps

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The modes Pass A Points When True, Pass B Points When True and Average A/B Points When True passed the A or B point unchanged when the result was false, so the output kept the input length; they now leave false elements out. The truth test is the boolean result and not "Output Amount above 0". When true, the point is multiplied by Output Amount and the axis amounts, which are all 1 by default, so with defaults the output equals the A or B points. Trim Zeros removes every point whose X, Y and Z are all 0, not only trailing zeros; the label says "Trim Zeros" and the code was kept.

### BoundingBox

Reviewed in fix batch F1: the code matches its label and registered description, so the fuse was not changed. Only elements with exactly 1, 2 or 3 values are used. Other lengths are skipped. If any element has 3 values the output is a 3D box and the X and Y limits also include 2 value elements.

### CameraProjection

The old text describes a camera: X, Y and Z Offset are added to the point coordinates before the projection, not applied to a camera. Rotation Order is created but hidden and Process() never reads it; the rotation order is always X, then Y, then Z. Near and Far are hidden and read but not used by the projection. Shear X and Y are hidden, read and not used. The old text says Close Edge Loop connects the last edge to the first, but the code closes the edge when the checkbox is off and leaves it open when it is on. The Y output adds convertY(0.5), computed from an Image created inside the node with an original size of 0; the resulting value was not checked at runtime. The old tagline and overview call the node mandatory, which the code does not require.

### ClampToMeshProx

The decision to clamp uses Max Distance only, while the target distance is Max Distance plus Distance Offset (not below 0). Max Distance is limited to 0 or more in the code. Surface and Vertex find the same reference point. A point that lies on its reference moves along the estimated normal in Surface mode and along +Z in Vertex and Centroid mode. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### ClassifyByMesh

The old overview says the node outputs 1 for inside points and 0 for outside points, and the old Surface Band Thickness text says band points count as inside. The code writes three point arrays to three outputs (Inside, Outside, On Surface Band) and band points go only to the third. Affect X, Y and Z change only the offset test position, not the output points. Offset Space visibility is updated inside Process(). The inside test uses the patch samples (average of a vertex and its 7 nearest neighbors) and their estimated normals, while the offset and the band use the vertex samples. Because normals point away from the centroid of all vertices, on concave shapes a normal can point the wrong way and the inside test can be wrong. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### ClosePath

Close Path always returns a point list. A path counts as closed when the first and last points are equal (within 0.000000001). With Duplicate Endpoint off, Keep Start returns the points unchanged, and the closure is then only a matter of whether the ends are equal. Points that are not tables are skipped and extra values after the third are dropped.

### ColorMap

The old texts for Red B, Green B, Blue B and Alpha B said "color A". The Array fuse has the data type ScriptVal: it reads Points and Scalars as arrays and writes a list of {R, G, B, A} tables, not an array of numbers. Clamp 0-1 clamps the 0 to 1 position along the gradient, and the output channels are clamped to 0 to 1 in every case.

### Convert2D_3D

The registered description says the node converts a 2D array to a 3D array. The code regroups the values of each input element into groups of 1, 2 or 3 values, so it can also split 3D points. A group shorter than 3 is padded with 0 only in the X Y Z setting. The JSON fuse writes the output with indentation.

### CopyToPoints

The random values come from math.randomseed followed by math.random for every value, so the node reseeds the global random generator. The random offset is the same for all template points of one copy. Scale is applied before the rotation, so X and Y scale act in the template frame and Z scale is not rotated. Seed and the point index set the rotation (seed + index * 7919) and the offsets (seed + index * 104729, 130363 and 155921 for X, Y and Z).

### CreateFont

The JSON font format was inferred from the code and no font file was checked. Sample Points thins the outlines of each character, not the points inside an outline. A character that is missing from the font raises an error.

### CubicBezier

Array Length defaults to 2 while Pack To is X Y Z, so the default output is empty. The loop builds segments from point 2 onward, so the first control point is not on the curve. The tension handle for the start of each segment is P(i) minus the offset, which points backward, so non-zero tension may not give the smooth curve the name suggests. Fuse logic was not changed.

### DisplaceValues

The ScriptVal and JSON fuses multiply the X and Y noise by 0 (displaced_x = x + nx * 0 * falloff), so only Z is displaced there; the Array fuse displaces X, Y and Z. Noise Rate is not a time offset as the old text said. It is the length used for a modulo on each coordinate, so values below about 0.005 make the noise constant for every point (0.7182 at the default). The noise value is between 0 and 1 and is never negative, so the displacement is one-sided. The old text says the UI labels read "Nosie Scale" and "Nosie Rate"; in the fuse the labels are Noise Scale and Noise Rate and only the control ID nosie_rate has the typo. Extra values after the third are dropped.

### ForEachIndexed

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The modes named "by Index" used the position inside the group (index modulo Group Size), so with the default Group Size of 8 the offsets repeated every 8 points. They now use the position in the whole array, like the two Random Offset by Index modes. There is no Seed control: the random values come from a fixed hash of the group or point number. A mask value above 0 applies the change, and a missing mask entry counts as 1. Input that does not start with a list is passed through unchanged. Output points keep only X, Y and Z.

### FromAudio

The stereo Both mode and the exact number of values per frame were not tested against a real file, and the filter coefficients were not checked. The second slot code in the fuse is switched off.

### FromImage

Image orientation was not tested in Fusion. X runs from +0.5 at pixel column 0 to -0.5 at the last column, and Y from +0.5 at pixel row 0, so the sign of both axes should be checked against a test image.

### FromPolylineMulti

The per-path controls resetPath_N, override_N, overrideCount_N and overrideClosed_N are built in a loop and are not listed as parameters.

### FromSpline

Process() multiplies X and Y by widthScale + 0.5 and heightScale + 0.5, so the defaults of 1.5 give a factor of 2. Most controls are hidden, including Number of Samples. Fuse logic was not changed.

### FuseClosePoints

A cluster smaller than Minimum Cluster Size is removed from the output, so points are lost when it is above 1, not just "formed" differently as the old text said. The clustering is chained: a point joins a cluster if it is within the threshold of any member, so a long row of close points becomes one cluster. Average mode keeps extra values of the first point. A label under the controls shows counts and is updated in Process().

### GenerateSphere

includeLonLines is read as a number and tested with if value then, so the longitude lines are always written. Fuse logic was not changed.

### GenerateSpirals

The hidden Shape Mode control (mode) is read into inShape and never used. The Logarithmic type here writes Z = 0, while vArrayLogarithmicSpiral writes Z = theta * 0.05. Fuse logic was not changed.

### GenerateText

In the Generate Random menu, Male name and Name w/last appear to be swapped against the code: Male name calls the generator with the last-name option, and Name w/last calls the male name generator. Not run in Fusion.

### GridConnect

The node has no input. It builds edge lists from Number X and Number Y alone, with 1-based point numbers counted row by row (number = row * Number X + column + 1), so the points that it is used with must be in that order and have the same counts. Stride applies only to Horizontal, Vertical and Both. Zigzag: Reverse Start applies only to the two zigzag directions.

### Interpolate

Reviewed in fix batch F1: the code matches its label and registered description, so the fuse was not changed. The old texts list the easings as Linear, Ease In, Ease Out, Ease In-Out and Back. The control has seven: linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInExpo, easeOutExpo, easeInOutExpo. The old text for Show Input says it reveals the Array A and Array B ports. In the code it only shows the Progress input port. The old text says the two arrays must have the same length; the code trims both to the shorter length.

### Iterator

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The registered description said "Loop an array" but the code keeps every Nth element of the input (Step = N) and repeats nothing; the description is now "Keep every Nth point of an array". Only elements that are lists with at least 3 values are kept, and each is cut to its first 3 values.

### JitterOnMesh

The jitter radius is the distance in the tangent plane before the point is replaced by the closest mesh vertex, so the output points are always mesh vertices (plus Surface Offset along their normal). The random values are drawn in order from the global generator after math.randomseed, so the node reseeds math.random on every render. Without mesh data the points are output unchanged. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### List

The 24 value controls are built in a loop (Array_1 to Array_24) and are not listed as parameters.

### LogarithmicSpiral

Process() reads the Scale Factor control into scaleFactor and never uses it, so the hidden control has no effect. Fuse logic was not changed.

### LookAt

Forward Axis does not rotate a basis. It re-maps the components of the direction vector (+Z keeps it, -Z negates it, +Y gives x, z, -y, -Y gives x, -z, y, +X gives z, y, -x, -X gives -z, y, x), so the old text "axis that points at the target" is only loosely true. The up vector is used only in Full Basis mode. Up X, Y and Z are integer controls limited to 0 and 1. The Euler angle output has pitch and yaw in degrees and a roll of 0. If the first input element is not a list, the input is passed through unchanged.

### Map

With Per Axis on, Unit Vector (L2 Norm), L1 Norm and Max Abs divide each axis column by its own norm or maximum. They do not scale each point by its own length. The Array fuse raises an error for an empty or invalid input. Custom Min and Max are range controls with a minimum allowed value of -1.

### MapGeoJSON

Scale is multiplied by 1000 in the code, so the default output is large. Auto Fit is read and not used. Fuse logic was not changed.

### MapRange

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. New Min and New Max defaulted to -10 and 10 while the default button is "-1 - 1"; they now default to -1 and 1. The old text says Mode Select picks a remapping strategy (clamped, unclamped, normalised). Process() does not read the mode. The four buttons only set New Min and New Max to -10 and 10, -1 and 1, 0 and 1, or 0 and 360 when pressed. The remap is linear and not clamped. The control ID of Mode Select ends with a space ("ModeSelect ") and was kept. The ScriptVal and JSON versions keep the other keys of the input table, the Array version does not.

### MaskByMesh

The old Min Distance text says points below it are kept. The code removes them: points are kept when the distance is between Min Distance and Max Distance. Falloff Distance, Weight Power, Min Output Weight, Append Weight As 4th Value and Surface Offset are hidden and NotifyChanged() is empty, so they stay hidden. Soft Falloff does nothing different from Hard while the hidden Falloff Distance is 0. Distances are measured to the closest mesh vertex, and Closest On Surface moves the point to that vertex. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### MaterialEasing

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The Falloff shift was divided by the point count; the center is now the average of the points plus Falloff * 10. Duration 0 divided by zero; it is now a step. With no input points the Array fuse wrote "[]" and now writes an object with an empty "array" and size 0. Standard Fast, Default and Slow Spatial use one identical curve, and Standard Fast, Default and Slow Effects use the same curves as the three Expressive Effects entries; this was kept on purpose. Unused code: parseJSONArray and the totalPoints argument.

### Math

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. Arc Sine, Arc Cosine and Arc Tangent computed sinh, cosh and tanh; they now compute the inverse functions (Arc Sine and Arc Cosine return 0 outside -1 to 1). Negate computed 1 - A and now returns -A. The entry at index 30 was labelled Randomseed although it seeds nothing; it is now labelled Random A to B and still returns a random value between A and B. Random returns A times a random value from 0 to 1. The old text lists only six operations. The old text says Which selects an element; the control is hidden and Process() never reads it. Array B does not have to match the length of Array A; missing entries count as 0. The output always has three values per element. In the ScriptVal fuse the matrix for Matrix Multiply comes from a separate Matrix input and not from Input B.

### MirrorThruMesh

Surface and Vertex find the same reference point. All reference lists come from the same vertex list, so the fallback to the surface never changes the result: with no mesh vertices at all the points are not passed through, they are left out and the output is empty. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### NoiseOnMesh

In Normal Only mode the point is first moved to the closest mesh vertex and then displaced along the normal estimated there, so the output lies on the vertices plus the noise. In 3D Reproject mode the displaced point is replaced by the closest mesh vertex, so the output points are vertices (plus Surface Offset). Without a mesh, the reference is the point itself and the normal is Z. The Seed shuffles the noise permutation table with math.randomseed, so the node reseeds the global random generator on every render. The Octaves, Lacunarity and Gain controls are hidden until Noise Type is switched to Fractal. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### OffsetByNormal

The offset is applied to the original point, not to the closest vertex: the result is the input point plus the normal estimated at the closest mesh vertex times Offset Distance. With no mesh or no points the output is empty. vmeshutils.buildSurfaceSamples uses only the vertex list of Mesh Points. It makes one sample per vertex with all three triangle corners equal to that vertex, so every search finds the closest vertex and not a point on a face. The normal of a sample is fitted to the 8 nearest vertices and points away from the centroid of all vertices. Edges and faces are not read.

### Packer

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. Custom Group Size defaulted to 0 while Pack To showed X; it now defaults to 1. The Pack To buttons are --, X, X Y and X Y Z. Pressing one writes 0, 1, 2 or 3 into Custom Group Size. Process() reads only Custom Group Size. A size of 0 puts all elements into one group. The registered description is "Pack an Array into a new array". There is no padding: a last group can be shorter. In the Array fuse the input must be a table with an "array" key. The JSON fuse takes a bare array.

### ParallelOffset

Each offset point uses the direction of the segment that starts at that point (the last point uses the last segment), so corners are not mitered and the offset curves can overlap or leave gaps on sharp bends. The perpendicular is the cross product of the segment direction and the Z axis. For a path that runs along +X, the "left" curves lie at negative Y, which is the right-hand side when Y points up. A path with fewer than 2 points gives no offset curves. The JSON fuse reads a bare array and writes nothing for a path with fewer than 2 points.

### PathFrame

The output is a packet with the keys path, tangent, normal, binormal and closed, not an array of points. With fewer than 2 points the output is the usual array and size wrapper of the points instead. Flip Tangent reverses only the tangent vectors, not the normal and binormal. The closed flag in an input packet also closes the path, in addition to the Closed Path checkbox.

### PathTwist

Constant mode uses End Twist as the angle on every point, and Start Twist is ignored. If the input packet has no tangent, normal and binormal of the right length, the frames are rebuilt from the path with a fixed up vector of 0, 1, 0. With fewer than 2 points the output is the point list. The width value of the input packet is copied to the output.

### PathWidthMap

With Scalar Input the numbers are used as they are and are not rescaled; they are clamped to 0 to 1 only if Clamp 0-1 is on. The path in the output packet is written as points with x, y and z keys, not as lists. An input without points is passed through unchanged.

### Perlin3Noise

The node replaces the values with noise; it does not add noise to them (the old overview said it adds). Each value v is turned into noise at the point (v * Frequency + Time, v * Frequency + Time), so X and Y of the lookup are equal. The Array fuse flattens all values of all points into one list and regroups them in threes, so points with 2 values or more than 3 are regrouped. The ScriptVal and JSON fuses keep the length of each point. The code has a Curl type, but the Noise Type buttons only offer Perlin and Fractal. Octaves is a float control.

### PointAttractor

The registered description says spring dynamics, but each render starts every point at rest at its input position, so the spring term is always 0 and Spring Return and Spring Bounce (both hidden) have no effect. Time is not read, so the output does not change between frames. Multiplier divides the attractor X and Y (the old text said it multiplies the strength). Center, Z Offset, Axis and Relative Flare Offset are hidden and not read. The Y position uses convertY with an internal image created with original size 0; the resulting value was not checked at runtime. The attractor Z is not divided by Multiplier.

### PointAttractorSpring

The simulation keeps its state between frames, but only while the frames are rendered one after the other: it restarts from the input points when the frame is not the previous frame plus 1, when the number of points changes, or when Reset Simulation is pressed. Multiplier divides the attractor X and Y (the old text said it multiplies the strength). Center, Z Offset, Axis and Relative Flare Offset are hidden and not read. The Y position uses convertY with an internal image created with original size 0; the resulting value was not checked at runtime. The ScriptVal fuse writes z = 0 for the 2D guide points.

### PointParticles

Enable checkboxes and Center X/Y/Z and Flocking Optimization are numbers tested with if value then, so they are always true in Lua. Time defaults to 0, so the default output is static. Random emission uses an unseeded generator. Fuse logic was not changed.

### PointsConnect

Connection is a blend amount from 0 to 1: the second point of each pair is A + (B - A) * Connection, so 1 gives the point of Input B and 0 repeats the point of Input A. The old text called it a connection style. In the JSON fuse the main link numbers of Input B and the output differ from the Array fuse.

### PointsJitter

Reviewed in fix batch F1: the code matches its label and registered description, so the fuse was not changed. The old Jitter text said "maximum jitter per axis". That holds only for Uniform Jitter on. With it off the offset is normally distributed with Jitter as the spread, so it has no maximum. The wobble is not removed at Time 0: it stays as a fixed per-point offset of sin(i) * Jitter * 0.5. The JSON and ScriptVal fuses also accept a bare array as input; the Array fuse needs the "array" key.

### PointsOnArc

The old text says the arc angles come from an upstream min and max node. The code reads no angles: it builds one arc between each pair of consecutive input points, so the Input must hold at least 2 points with 3 values each. Multiplier is hidden and read but not used. Each point shared by two pairs appears twice in the output.

### PointsOnRectangle

Process() tests the Line Strip, Loop and four corner checkbox values with if value then. A Lua number is always true, including 0, so these hidden controls cannot change the output. Fuse logic was not changed.

### PointsOnSphere

The controls labelled Trim Top and Trim Bottom feed the lower and upper Y limit respectively, so the labels are the reverse of the Y direction. Hidden Rotate Factor is not used. Fuse logic was not changed.

### Project

The control Plane Z is the plane position for Plane Z, Plane X and Plane Y. For Plane X the code sets X to it and for Plane Y it sets Y to it. A point at the center of a sphere or cylinder goes to the +X side of it. Input that does not start with a list is passed through unchanged.

### ProjectOnMesh

All three Projection Modes give the same result, because the mesh samples are single vertices: Closest Surface, Nearest Vertex and Face Center (the mean of three equal corners) all find the closest vertex. The distance for Distance Mode is measured from the point to the offset target, not to the mesh. Max Distance 0 switches the limit off.

### RampMap

The old text for the colors of stops B, C and D said "stop A". The Array fuse has the data type ScriptVal: it reads Points and Scalars as arrays and writes a list of {R, G, B, A} tables. Stop positions are kept in order: each position is raised to the one before it. Power is used by the Power curve only.

### Random

The hidden Multiply control is read into mul and never used. Fuse logic was not changed.

### RaycastToMesh

The ray does not test faces. It tests the mesh vertices: a vertex counts as hit if it lies ahead of the point and within a tolerance of the ray line, where the tolerance is the average distance from each Mesh Points vertex to its nearest other vertex. The nearest hit along the ray wins, and the output is that vertex position. With no mesh data the points follow Miss Behavior. In Dir Array mode, a point without an entry in the array uses the direction 0, -1, 0. Direction X, Y and Z are shown for Global Dir, Target X, Y and Z for Target Point, and the Direction Array port for Dir Array, after the mode has been changed once.

### RelaxOnMesh

Each pass moves a point toward the average of its 6 nearest points, which pulls neighbors together, and then puts it on the closest mesh vertex. The old text and the registered description say the points spread out evenly; the code does not push points apart. Because of the snap, every output point is a mesh vertex (plus Surface Offset), and several points can end up on the same vertex. The cost grows with the square of the point count times Relax Iterations.

### RepeatTransform

The Translate, Scale and Rotation controls are totals reached at the last copy; copy j gets the share j / (Number of Times - 1) of them. The old text called them per-copy steps. In the grid modes the share still uses Number of Times, so it can go above 1 when the grid has more cells than that, and it is 0 when Number of Times is 1. Scale controls default to 0 and the scale factor is 1 + Scale * share. Position Array is decoded as it is and read as a flat list of numbers, three per copy. An Array-family output has the array and size wrapper, so connecting one gives no offsets (not run in Fusion). Shake keeps its state between renders and restarts when the time goes backwards or the copy count changes. The Shake Rotation Amplitude is multiplied by 10. Radius and Spiral Height are shown for Circular and Spiral, Spiral Height for Spiral only, and the grid controls for the grid modes, after the mode is changed. The ScriptVal fuse names its inputs and groups output differently.

### ResamplePath

Interp Steps is used only for Catmull-Rom, B-Spline and Cardinal. With Linear the path is not subdivided. Catmull-Rom needs at least 4 points and B-Spline and Cardinal at least 3, otherwise the path is subdivided linearly. B-Spline here is a quadratic spline that does not pass through the middle points. Tension scales the Cardinal tangents by (1 - Tension) / 2. A path with fewer than 2 points is returned as it is.

### Reverse

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. Preserve Metadata and Debug Mode were not read by Process(); they now work. Preserve Metadata on copies the other keys of a wrapped input to the output; the ScriptVal and JSON versions write a wrapper {array, size, ...} only when the input was wrapped and the box is on, otherwise a bare array as before. The ScriptVal and JSON versions now also unwrap a wrapped input before reversing; it used to pass through unreversed. The elements are copied as they are, so extra values of points are always kept. Forward copies the range in its original order, so it changes nothing.

### RippleDisplacer

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. Each output used to add a built-in step (amplitude + 0.2 * (n - 1), frequency + 0.1 * (n - 1), time offset + 0.3 * (n - 1)) on top of the value shown in Amplitude n, Frequency n and Time Offset n. The step now sits in the defaults of those controls and the shown value is the value used. The Time control is used only when Auto Animate is off; with it on the time is the render time times Speed times 0.1. Offset Multiplier multiplies the time offsets of the arrays, not the displacement, and the code was kept. A disabled array gives an empty output. The per-array controls Enable Array n, Amplitude n, Frequency n and Time Offset n are created in a loop, so they are not listed as rows. Debug Mode prints to the console. The JSON fuse writes the points without the array and size wrapper.

### RotateValues

Pass Thru is a hidden control and has no effect: it only changes a fallback value that is not used because the rotation amount is always given. The old text says it bypasses the rotation. Show Input makes the input port of Rotate Amount visible; the old text said it reveals the Array A port. The Array fuse needs the array and size wrapper on the input. An empty array is not handled.

### ScaleFromMesh

The node has two point inputs. The Array fuse reads only Array Points (the one that holds the points to scale); the input named Points (ID Points) is not read by Process(). The same holds for the ScriptVal and JSON fuses, where the one that is read is called X Points or Points with another ID. The distance is measured to the closest mesh vertex, so the result depends on how densely the mesh is sampled. With no mesh or no points the output is empty.

### ScatterInstOnMesh

If Mesh Points is connected and not empty, it is used and the Surface Positions and Surface Normals inputs are ignored. Mesh Points give one position per vertex with the normal estimated from the 8 nearest vertices. Without Mesh Points, Surface Positions is required and Surface Normals is optional (without it, every normal is 0, 1, 0). The template is expected with Y as its up axis, since the rotation maps the Y axis to the normal. Yaw turns the template around its Y axis.

### Sin

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The Sin and Cos buttons were swapped (Sin gave cosine); they now match their labels. The node replaces the values with the wave and does not add the wave to them. In the Array fuse, elements that are not lists of 3 or more values are dropped and each point is cut to 3 values. The ScriptVal and JSON fuses keep lists of any length and plain numbers, and count the numbers across all points for Offset instead of using the point number.

### SlideOnMesh

The default direction 0, 0, 0 has no length, and the code turns it into 0, 0, 1, so the default slides the points by +0.1 on Z. The slid position is replaced by the closest mesh vertex, so the output points are mesh vertices (plus Surface Offset along their estimated normal). With no mesh data the points are output unchanged (3 values).

### SnapFaceCentroid

The name and the old text say face centroid, but the code snaps to the patch points, each the average of a mesh vertex and its 7 nearest neighbors. Blend is not limited in the code, so values outside 0 to 1 extrapolate. Max Distance 0 switches the limit off. With no mesh or no points the output is empty.

### SnapMeshVertex

Vertex and Surface give the same result, since the mesh samples are single vertices. Centroid uses the patch points, each the average of a vertex and its 7 nearest neighbors. With no mesh or no points the output is empty.

### SortByDistance

Smallest Distance and Distance Mode do not change the result. Both branches of the search end up choosing the nearest unvisited point: the "preferred" pick is the nearest point under Smallest Distance, and the fallback is the nearest point overall. In Strict mode the expression strictDistanceMode and nil or fallbackIndex still returns the fallback, because "x and nil" is never true in Lua. So the order is always the nearest-neighbor chain from the first point. Elements that are not lists of 3 or more values are dropped, and the output points have 3 values.

### SortByMeshProx

Surface and Vertex measure to the same point, the closest mesh vertex. Face Centroid measures to the closest patch point, the average of a vertex and its 7 nearest neighbors. The output points are also moved when Blend To Target or Target Offset is not 0. Without any mesh data the points are output in their original order. Target Offset moves along the estimated normal in Surface mode, and along the direction from the reference to the point in the other modes (0, 0, 1 if they coincide).

### Stagger

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. Mode Linear was sin(0.1 * (time - index * delay)); it is now 0.1 * (time - index * delay). Mode Exponential was an envelope times a sine; it is now 1 - exp(-0.1 * t) with t = time - index * delay * 0.1, not below 0. The hidden controls Clamp Output, Min Value, Max Value, Reverse Index, Yoyo and Steps are created but Process() never reads them (processStagger gets none of them, and its reverse and yoyo locals are always true). The Stagger Delay fallback in Process() (0.2) is never used because the control default is 0. Sawtooth Wave divides by Wave Frequency, so a value of 0 gives an infinite period.

### TangentVector

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The Z part of the direction was always 0; it is now the Z difference to the next point, so paths that change in Z get 3D tangents. The control "Max angle" was renamed "Rotate Angle" (ID angle): it rotates every tangent vector around Z by that many degrees and is not a limit on the angle between segments. Scale Factor defaulted to 0, which made every vector zero length; it now defaults to 1. Each path point must have exactly 3 numbers and the path at least 2 points, otherwise the node raises an error.

### TextFont

Case, Justification, RotOrder and the Shear controls are read or shown but do not change the output. Characters that are not in the font are skipped. The glyph set was not enumerated.

### TextWrap

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. In Table mode the Text output held tostring() of a Lua table (an address); it now holds the lines joined by line breaks. In String mode the TextTable output holds the wrapped string in its array field; this was kept on purpose, as String selects a string result. Words longer than the line length are cut into pieces of that length. The ScriptVal fuse writes the lines as a ScriptVal value, and the JSON fuse writes the lines without the array and size wrapper.

### ToOBJ

The node builds its text only. It does not write a file.

### Translate

Lock X/Y only changes what the controls show: the code always reads Y Scale for Y, even while it is hidden, and uses X Scale for both X and Z. The old text said Lock X/Y moves the X and Y offsets together. The offset is added before the scale, so the scale also multiplies the offset. Elements that are not lists of 3 or more values are dropped. Show Input exposes the ports of the offsets and scales; the old text said it reveals the Array A port. The comment in Process() mentions rotation, which the node does not do.

### TrimByMeshBounds

The bounding box comes from the raw Mesh Points list (or from the Bounds Array), not from the vmeshutils samples. In Drop mode the kept points are the input elements unchanged, in Clamp mode the points are rewritten with 3 values. If the bounds source has no points, the input is output unchanged. Padding can be negative, which shrinks the box. The Mesh Points port is shown for the Array Points source and the Bounds Array port for the Bounds Array source, after the source is changed.

### UnPacker

The Custom Group Size control is hidden. The four buttons 1 Array to 4 Arrays set it to 1 to 4 and create the extra outputs OutputArray_1 to OutputArray_n when pressed, so those outputs exist only after a button was used. OutputArray carries the first array. The old text said the node splits packed groups back into a flat array. It flattens lists of values and deals them out to up to 4 outputs in turn. The JSON fuse accepts a bare array as input.

### Wave

Changed in fix batch F1 (branch fix/findings-f1 of vonk-ultra-mograph), same change in all three families. The controls X, Y and Z Position were renamed X, Y and Z Amount (IDs XPosition, YPosition, ZPosition unchanged), because they are displacement amounts and not a wave origin. The code has no distance calculation. Each point moves by (X, Y, Z Amount) * wave * Falloff. Falloff is a multiplier (default 0), so nothing moves until both Falloff and one of the amounts are set. Delay (hidden) is not read; Offset (hidden) is added to the wave and defaults to 0. Show Input is hidden and shows the ports of Start At Frame, Period, Strength and Limit. Period 0 divides by zero. The wave starts at 0 until the frame passes Start At Frame.

### WeightByMeshProx

The weight is 0 on the mesh and grows to 1 at Max Distance (not the other way around); Invert Weight flips it. Distances are measured to the closest mesh vertex. The second output, Points, holds the points moved toward that vertex by Project Amount, which defaults to 1, so by default it holds the vertices. With no mesh data both outputs are empty. The ScriptVal and JSON fuses name the outputs differently.

### WeightMap

The output is a list of numbers, or points when Output Mode is not Weights Only and Points are connected. Blend Toward Center moves a point toward Center X, Y, Z by weight times Apply Amount. Offset XYZ adds the same number to all three axes. Range controls have no limits in the code.
