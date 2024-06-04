/**
 * Provides document.execCommand('insertHTML', false, html) support to unsupported browser,
 * taking Undo stack into account if possible
 *
 * @throws Will throw an error if selection could not be retrieved
 *
 * @param doc document to execute on
 * @param html html to be inserted
 */
export function tuiInsertHtml(doc: Document, html: string): void {
    if (doc.queryCommandSupported('insertHTML')) {
        doc.execCommand('insertHTML', false, html);

        return;
    }

    const selection = doc.getSelection();

    if (!selection) {
        throw new Error('selection problem');
    }

    doc.execCommand('ms-beginUndoUnit');

    const range = selection.getRangeAt(0);
    const documentFragment = range.createContextualFragment(html);

    range.deleteContents();
    range.insertNode(documentFragment);

    doc.execCommand('ms-endUndoUnit');
}
