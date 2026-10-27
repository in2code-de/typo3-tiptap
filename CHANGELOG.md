# Changelog

All notable changes to this extension are documented in this file.

## 0.0.19 - 2026-10-27

### Fixed

- Load the source view helpers from a content-hashed chunk. `index.js` imported `plugins/source.js` relatively, which bypassed the importmap `bust` parameter. After an update, browsers kept the old file cached and requested chunks that no longer exist, so the editor did not load.
- Add the importmap `bust` parameter to plugin paths and stylesheet URLs that do not have one yet, so they are reloaded after an update.

## 0.0.18 - 2026-05-05

### Added

- Subscript and superscript plugins.

### Fixed

- Set the link target default to `_self` and remove the TipTap defaults for link `rel` and `target`.

### Changed

- Update Vite and `@antfu/eslint-config` to the latest major version and update minor frontend dependencies.

## 0.0.17 - 2026-03-25

### Fixed

- Isolate the editor configuration to prevent duplicate extensions.
- Add missing plugin dist files.

## 0.0.16 - 2026-03-25

### Added

- Table plugin.
- Remove empty `<p>` tags from the editor content.

### Changed

- The justify plugin uses class names instead of inline styles. The text alignment CSS is loaded in the frontend and in the editor shadow DOM.

### Fixed

- Fix an issue with the justify plugin.

## 0.0.15 - 2025-12-15

### Changed

- Adjust the editor border to the TYPO3 input borders.
- Update frontend dependencies.

### Fixed

- Fix missing change detection of the editor content.
- Remove the selection character count workaround and a debug console log.

## 0.0.14 - 2025-11-24

### Fixed

- Count only the text content in the character count plugin and ignore HTML tags.

## 0.0.13 - 2025-11-20

### Added

- Character count plugin.

### Changed

- Breaking: Change the extension key from `typo3-tiptap` to `typo3_tiptap`. `EXT:` paths must be adjusted.
- Update frontend dependencies.

## 0.0.12 - 2025-10-27

### Fixed

- Fix an undefined array key warning in the link browser.

## 0.0.11 - 2025-10-17

### Changed

- Documentation updates.

## 0.0.10 - 2025-10-07

### Changed

- Breaking: Rename the JavaScript module namespace from `@in2tiptap/tiptap/` to `@typo3-tiptap/tiptap/` and the extension key from `in2tiptap` to `typo3-tiptap`. Plugin paths in RTE presets must be adjusted.

## 0.0.9 - 2025-10-02

### Added

- More default link presets.

### Fixed

- Calculate the disabled status of the link command correctly.
- Never show the underlying textarea to the user.
- Close the bubble menu when a dropdown inside it is open and the focus leaves the browser.
- Fix an invalid RTE configuration.

## 0.0.8 - 2025-10-02

### Fixed

- Write the TipTap configuration to the default preset, so the CKEditor preset is not used.

## 0.0.7 - 2025-10-02

### Fixed

- Prevent issues when the RTE configuration is overwritten.
- Remove unused TypoScript imports.

## 0.0.6 - 2025-10-02

### Removed

- Feature toggle to enable or disable TipTap.

## 0.0.5 - 2025-10-02

### Added

- Option to enable a debug mode.

### Fixed

- Select the correct tag name for headings.
- Allow text formatting only when text is selected.

## 0.0.4 - 2025-10-02

### Changed

- Version the built JavaScript assets.
- Hide debug output behind an option flag.

### Fixed

- Fix loading of the YAML configuration.

## 0.0.2 - 2025-10-01

### Fixed

- Correct the output path of the frontend build.

## 0.0.1 - 2025-10-01

Initial release.

- TipTap editor as a Vue web component for the TYPO3 backend, configured via RTE YAML presets.
- Plugins for headings, bold, italic, underline, strikethrough, lists, blockquote, links with TYPO3 link browser, justify, styles, history and HTML source view.
- Plugin options from YAML with schema validation.
- Toolbar groups, dropdowns and bubble menu.
- Content drag and drop and custom stylesheets for the editor content.
