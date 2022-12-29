# Change Log

All notable changes to this project will be documented in this file.

## [2.2.0] - 2022-12-29

### Added

- Option to disable the URL getting updated by setting `updateHistoryStack` to `false`.

### Fixed

- Error when using `module` with `gatsby` or `next.js`.
- use `replaceState` instead of `pushState` to avoid polluting history.

## [2.1.0] - 2021-11-13

### Added

- Set `useBoxMethod` as default way to check if `Element` is in `viewport`.
- Can be overridden by setting `useBoxMethod` to `false`.

### Fixed

- Problems when div to Spy is not `100vh`.

## [2.0.1] (Beta) - 2021-11-9

- Beta version to test `2.1.0` release.
