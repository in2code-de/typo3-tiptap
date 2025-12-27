import { Table } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableRow } from '@tiptap/extension-table-row'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

/**
 * This plugin adds support for tables in the editor.
 *
 * Configuration options:
 * - defaultRows: Number of rows when inserting a new table (default: 3)
 * - defaultCols: Number of columns when inserting a new table (default: 3)
 * - withHeaderRow: Whether to include a header row by default (default: true)
 */
export default function (unsafeConfig?: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'table',
    config: unsafeConfig ?? {},
    getValidationSchema: z => z.object({
      defaultRows: z.number().int().min(1).max(20).default(3),
      defaultCols: z.number().int().min(1).max(20).default(3),
      withHeaderRow: z.boolean().default(true),
    }),
  })

  defineTipTapPlugin({
    extensions: [
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    commands: [
      {
        id: 'table',
        label: 'Insert Table',
        iconIdentifier: 'table',
        position: {
          toolbarGroupId: 'general',
          bubbleMenuGroupId: false,
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().insertTable({
            rows: config.defaultRows,
            cols: config.defaultCols,
            withHeaderRow: config.withHeaderRow,
          }).run()
        },
      },
      {
        id: 'table-delete',
        label: 'Delete Table',
        iconIdentifier: 'table-delete',
        position: {
          toolbarGroupId: 'general',
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().deleteTable().run()
        },
      },
      {
        id: 'table-toggle-header-row',
        label: 'Toggle Header Row',
        iconIdentifier: 'table-header-row',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleHeaderRow().run()
        },
      },
      {
        id: 'table-toggle-header-column',
        label: 'Toggle Header Column',
        iconIdentifier: 'table-header-column',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleHeaderColumn().run()
        },
      },
      {
        id: 'table-row-add-above',
        label: 'Add Row Above',
        iconIdentifier: 'table-row-add-above',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().addRowBefore().run()
        },
      },
      {
        id: 'table-row-add-below',
        label: 'Add Row Below',
        iconIdentifier: 'table-row-add-below',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().addRowAfter().run()
        },
      },
      {
        id: 'table-row-delete',
        label: 'Delete Row',
        iconIdentifier: 'table-row-delete',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
          isDisabled: ({ editor }) => !editor.can().deleteRow(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().deleteRow().run()
        },
      },
      {
        id: 'table-column-add-before',
        label: 'Add Column Before',
        iconIdentifier: 'table-column-add-before',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().addColumnBefore().run()
        },
      },
      {
        id: 'table-column-add-after',
        label: 'Add Column After',
        iconIdentifier: 'table-column-add-after',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().addColumnAfter().run()
        },
      },
      {
        id: 'table-column-delete',
        label: 'Delete Column',
        iconIdentifier: 'table-column-delete',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
          isDisabled: ({ editor }) => !editor.can().deleteColumn(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().deleteColumn().run()
        },
      },
      {
        id: 'table-merge-cells',
        label: 'Merge Cells',
        iconIdentifier: 'table-merge-cells',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
          isDisabled: ({ editor }) => !editor.can().mergeCells(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().mergeCells().run()
        },
      },
      {
        id: 'table-split-cell',
        label: 'Split Cell',
        iconIdentifier: 'table-split-cell',
        position: {
          toolbarGroupId: false,
          bubbleMenuGroupId: 'table',
        },
        status: {
          isVisible: ({ editor }) => editor.isActive('table'),
          isDisabled: ({ editor }) => !editor.can().splitCell(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().splitCell().run()
        },
      },
    ],
  })
}
