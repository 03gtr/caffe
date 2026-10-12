# Third-party notices

This concept site bundles or loads the following third-party material.

## Libraries (bundled)

| Package | Version | License | Notes |
|---|---|---|---|
| react, react-dom | 19.3.0 | MIT © Meta Platforms, Inc. and affiliates | |
| gsap (core, ScrollTrigger, Flip, SplitText) | 3.15.0 | GSAP Standard "no charge" license — https://gsap.com/standard-license | Free for commercial websites. Not allowed: use in a no-code visual animation builder that competes with Webflow. The copyright headers in GSAP files must not be removed. |
| lenis | 1.3.26 | MIT © 2024 darkroom.engineering | |

### Lenis — MIT License

Copyright (c) 2024 darkroom.engineering

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Vendored components — React Bits

Source: https://github.com/DavidHDev/react-bits (commit `e2eb04d`), copied into
`src/components/vendor/react-bits/` with a header naming the source path and every local change.

| Component | Source path | Local changes |
|---|---|---|
| `SloshGauge` | `src/ts-default/Micro/SloshGauge/` | Removed `'use client'`; reset the rAF handle on unmount (fixes a frozen gauge after a React StrictMode remount). |
| `Noise` | `src/ts-default/Animations/Noise/` | Removed `'use client'`. Used with `fps={0}` (static grain, no animation loop). |

License: **MIT + Commons Clause**, Copyright (c) 2026 David Haz — full text in
`src/components/vendor/react-bits/LICENSE.md`. The components may be used as part of this website, including
commercially. They **may not be sold, sublicensed or redistributed on their own**, in a bundle or as a port. That
also rules out selling this site as a reusable template or theme that includes them.

## Fonts (self-hosted via Fontsource, SIL Open Font License 1.1)

- **Alexandria**: Copyright 2022 The Alexandria Project Authors (https://github.com/Gue3bara/Alexandria)
- **Reem Kufi**: Copyright 2015-2022 The Reem Kufi Project Authors (https://github.com/aliftype/reem-kufi)
- **Fraunces**: Copyright 2020 The Fraunces Project Authors (https://github.com/undercasetype/Fraunces)
- **Noto Sans Syriac Eastern**: Copyright 2022 The Noto Project Authors (https://github.com/notofonts/syriac)

The full license text is at https://openfontlicense.org and in each `node_modules/@fontsource-variable/*/LICENSE`.

## Photography (concept only)

Fourteen free photos (no Unsplash+ images) under the Unsplash License (https://unsplash.com/license), served
from `images.unsplash.com`. Photographer credits are listed in `src/content/photos.ts` and in the site footer.
**All of them must be replaced with the shop's own photography before publication.**
