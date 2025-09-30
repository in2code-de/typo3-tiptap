import { defineTipTapPlugin, Node, mergeAttributes } from '@in2tiptap/tiptap/index.js'

const CookieButton = Node.create({
  name: 'cookieButton',

  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      'data-cookie': {
        default: 'true',
      },
      text: {
        default: 'Button',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'button[data-cookie]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['button', mergeAttributes(HTMLAttributes, {
      'data-cookie': 'true',
    }), HTMLAttributes.text || 'Button'];
  },

  addCommands() {
    return {
      setCookieButton: (attributes) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: attributes,
        });
      },
    };
  },
});

/**
 * This plugin adds a cookie button to the editor toolbar.
 *
 */
export default function () {
  // link here somehow
  defineTipTapPlugin({
    extensions: [
      CookieButton
    ],
    commands: [
      {
        id: 'cookie',
        label: 'Add cookie',
        // TODO: we need to be able to use TYPO3 icons here (web component)
        iconIdentifier: 'cookie',
        position: {
          toolbarGroupId: 'general',
          bubbleMenuGroupId: false,
        },
        onExecute: ({ editor }) => {
          editor.commands.setCookieButton({ text: 'Accept Cookies' });
        },
      },
    ],
  })
}
