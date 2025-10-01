# TYPO3 Tip Tap Prototype

## Setup
* TODO: add setup guide

## Quick Start Guide
- TODO: add Composer require etc.
- Copy example YAML file

### How to configure the RTE

Like the CKEditor, TipTap is configured by using YAML files. The configuration files are located in your site package under `Configuration/RTE/Full.yaml`.

#### How to configure the toolbar

In TipTap everything is basically a plugin. Some plugins have their own configuration options, that are also validated in the frontend.
This is a full plugin configuration example. You can remove plugins by simply removing the corresponding entry.

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

#### How to load additional CSS?
You can load additional CSS by using the `contentCss` option:

```yaml
editor:
  tiptap:
    config:
      contentCss:
        - 'EXT:sitepackage/Resources/Public/Css/content.css'
```

### How to add custom TipTap Plugins
Simply add a new JavaScript file in your site package and add the path to the plugin in your RTE configuration.

**RTE.yaml**
```yaml
editor:
  tiptap:
    config:
      plugins:
        - path: '@example/in2code/Plugins/example.js'
          config: {additionalClass: example} # optional plugin configuration
```

**Plugin.js**
```js
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '@in2tiptap/tiptap/index.js'

export default function (unsafeConfig) {
  // parse plugin configuration passed via YAML, to ensure its what we expect
  // configuration parsing is based on Zod. See more under: https://zod.dev/
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: '<cookie>',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      additionalClass: z.string(),
    }),
  })

  defineTipTapPlugin({
    // Optional: if you need a custom TipTap extension, add it here
    extensions: [],
    // Commands define buttons that are added to the toolbar or bubble menu
    commands: [
      {
        id: 'cookie',
        label: 'Add cookie',
        iconIdentifier: 'icon-cookie',
        position: {
          // valid toolbar group ids are: history, styles, heading, general, formatting, developer
          toolbarGroupId: 'general',
          // valid toolbar group ids are: formatting, heading, styles
          // disable a button in the bubble menu or toolbar by setting false
          bubbleMenuGroupId: false,
        },
        // optional status functions to control button state
        status: {
          isActive: ({ editor }) => editor.isActive({ textAlign: 'right' }),
          isDisabled: ({ editor }) => !editor.can().setTextAlign('right'),
        },
        // this function is called when the button is clicked
        // handle your tiptap logic here
        onExecute: ({ editor }) => {
          editor.commands.setCookieButton({ text: 'Accept Cookies', class: config.additionalClass })
        },
      },
    ],
  })
}
```

> This seems pretty abstract at first, I suggest you look into the [existing plugins](/build/frontend/src/plugins) and copy them to get started.

## Local Development Setup
To set up the project locally, follow the steps in the [Local Setup Documentation](docs/local-setup.md).
