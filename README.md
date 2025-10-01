# TYPO3 TipTap Editor Integration

This extension provides a TipTap rich text editor integration for the TYPO3 CMS system.

## Setup
* TODO: Add setup guide

## Quick Start Guide
- TODO: Add Composer require instructions
- Copy the example YAML configuration file

## Configuring the RTE

Like CKEditor, TipTap is configured using YAML files. Place your configuration file in your site package at `Configuration/RTE/Full.yaml`.

### Toolbar Configuration

TipTap uses a plugin-based architecture where everything is essentially a plugin. Some plugins include their own configuration options that are validated in the frontend.

Here's a complete plugin configuration example. You can remove any plugin by deleting its corresponding entry:

```yaml
editor:
  tiptap:
    config:
      plugins:
        - path: '@in2tiptap/tiptap/plugins/headings.js'
          config: {levels: [1, 2, 3, 4, 5, 6]}
        - path: '@in2tiptap/tiptap/plugins/history.js'
          config: {types: [undo, redo]}
        - path: '@in2tiptap/tiptap/plugins/bold.js'
        - path: '@in2tiptap/tiptap/plugins/underline.js'
        - path: '@in2tiptap/tiptap/plugins/italic.js'
        - path: '@in2tiptap/tiptap/plugins/strikethrough.js'
        - path: '@in2tiptap/tiptap/plugins/link.js'
        - path: '@in2tiptap/tiptap/plugins/list.js'
          config:
            types: [ordered, bullet]
        - path: '@in2tiptap/tiptap/plugins/blockquote.js'
        - path: '@in2tiptap/tiptap/plugins/justify.js'
          config:
            types: [justify-left, justify-center, justify-right]
        - path: '@in2tiptap/tiptap/plugins/source.js'
        - path: '@in2tiptap/tiptap/plugins/styles.js'
          config:
            styles:
              - {name: Arrow Red, element: a, classes: btn btn--red}
              - {name: Arrow Blue, element: a, classes: btn btn--blue}
              - {name: Paragraph Blue, element: p, classes: paragraph-blue}
              - {name: Paragraph Red, element: p, classes: paragraph-red}
```

### Loading Additional CSS

You can load additional CSS files using the `contentCss` option:

```yaml
editor:
  tiptap:
    config:
      contentCss:
        - 'EXT:sitepackage/Resources/Public/Css/content.css'
```

## Creating Custom TipTap Plugins

To create a custom plugin, add a new JavaScript file to your site package and reference its path in your RTE configuration.

**RTE.yaml**
```yaml
editor:
  tiptap:
    config:
      plugins:
        - path: '@example/in2code/Plugins/example.js'
          config: {additionalClass: example} # Optional plugin configuration
```

**Plugin.js (with configuration)**
```js
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '@in2tiptap/tiptap/index.js'

export default function (unsafeConfig) {
  // Parse plugin configuration from YAML to ensure it matches expectations
  // Configuration parsing uses Zod validation. Learn more: https://zod.dev/
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'cookie',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      additionalClass: z.string(),
    }),
  })

  defineTipTapPlugin({
    // Optional: Add custom TipTap extensions here if needed
    extensions: [],

    // Commands define buttons added to the toolbar or bubble menu
    commands: [
      {
        id: 'cookie',
        label: 'Add cookie',
        iconIdentifier: 'icon-cookie',
        position: {
          // Valid toolbar group IDs: history, styles, heading, general, formatting, developer
          toolbarGroupId: 'general',
          // Valid bubble menu group IDs: formatting, heading, styles
          // Set to false to disable button in bubble menu or toolbar
          bubbleMenuGroupId: false,
        },
        // Optional status functions to control button state
        status: {
          isActive: ({ editor }) => editor.isActive({ textAlign: 'right' }),
          isDisabled: ({ editor }) => !editor.can().setTextAlign('right'),
        },
        // This function executes when the button is clicked
        // Add your TipTap logic here
        onExecute: ({ editor }) => {
          editor.commands.setCookieButton({
            text: 'Accept Cookies',
            class: config.additionalClass
          })
        },
      },
    ],
  })
}
```

**Plugin.js (without configuration)**
```js
import { defineTipTapPlugin } from '@in2tiptap/tiptap/index.js'

export default function () {
  defineTipTapPlugin({
    // Optional: Add custom TipTap extensions here if needed
    extensions: [],

    // Commands define buttons added to the toolbar or bubble menu
    commands: [
      {
        id: 'cookie',
        label: 'Add cookie',
        iconIdentifier: 'icon-cookie',
        position: {
          // Valid toolbar group IDs: history, styles, heading, general, formatting, developer
          toolbarGroupId: 'general',
          // Valid bubble menu group IDs: formatting, heading, styles
          // Set to false to disable button in bubble menu or toolbar
          bubbleMenuGroupId: false,
        },
        // Optional status functions to control button state
        status: {
          isActive: ({ editor }) => editor.isActive({ textAlign: 'right' }),
          isDisabled: ({ editor }) => !editor.can().setTextAlign('right'),
        },
        // This function executes when the button is clicked
        // Add your TipTap logic here
        onExecute: ({ editor }) => {
          editor.commands.setCookieButton({ text: 'Accept Cookies' })
        },
      },
    ],
  })
}
```

**Note:** This may seem abstract at first. We recommend reviewing the [existing plugins](/build/frontend/src/plugins) and using them as templates to get started.

## Local Development Setup

For instructions on setting up the project locally, see the [Local Setup Documentation](docs/local-setup.md).
