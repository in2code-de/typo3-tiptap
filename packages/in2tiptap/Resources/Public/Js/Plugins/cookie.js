import { defineTipTapPlugin, Node, mergeAttributes } from '@in2tiptap/tiptap/index.js'

const CookieButton = Node.create({
  name: 'cookieButton',
  group: 'inline',
  inline: true,
  content: 'text*',

  addAttributes() {
    return {
      'data-cookie': {
        default: 'true',
      },
      class: {
        default: null,
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          if (!attributes.class) {
            return {};
          }
          return {
            class: attributes.class,
          };
        },
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
    }), 0];
  },

  addCommands() {
    return {
      setCookieButton: (attributes) => ({ commands, state }) => {
        const { from, to } = state.selection;
        const selectedText = state.doc.textBetween(from, to, '');

        // Use selected text if available, otherwise use fallback
        const text = selectedText || attributes?.text || 'Accept Cookies';

        // Delete the selected text first if there is any,
        // so we can replace it with the button and the correct text
        if (selectedText) {
          commands.deleteSelection();
        }

        return commands.insertContent({
          type: this.name,
          attrs: attributes,
          content: [
            {
              type: 'text',
              text: text,
            },
          ],
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
        iconIdentifier: 'icon-cookie',
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
