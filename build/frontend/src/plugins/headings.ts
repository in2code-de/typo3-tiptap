import type { Level } from '@tiptap/extension-heading'
import Heading from '@tiptap/extension-heading'
import { defineTipTapPlugin } from '../configuration.ts'

const activeHeadingLevels: Level[] = []

export function finishHeadingLevelSetup() {
  if (activeHeadingLevels.length === 0)
    throw new Error('At least one heading level must be activated.')

  defineTipTapPlugin({
    extensions: [
      Heading.configure({
        levels: activeHeadingLevels.slice().sort(),
      }),
    ],
    commands: activeHeadingLevels.map(level => ({
      id: `heading-${level}`,
      label: `Heading ${level}`,
      iconIdentifier: `heading-${level}`,
      position: {
        toolbarGroupId: 'heading',
        bubbleMenuGroupId: 'heading',
      },
      status: {
        isActive: ({ editor }) => editor.isActive('heading', { level }),
        isDisabled: ({ editor }) => !editor.can().toggleHeading({ level }),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().toggleHeading({ level }).run()
      },
    })),
  })
}

export function setupHeadingLevel1() {
  activeHeadingLevels.push(1)
}

export function setupHeadingLevel2() {
  activeHeadingLevels.push(2)
}

export function setupHeadingLevel3() {
  activeHeadingLevels.push(3)
}

export function setupHeadingLevel4() {
  activeHeadingLevels.push(4)
}

export function setupHeadingLevel5() {
  activeHeadingLevels.push(5)
}

export function setupHeadingLevel6() {
  activeHeadingLevels.push(6)
}
