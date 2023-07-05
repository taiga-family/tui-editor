import {
    tuiClearEditor,
    tuiClearHint,
    tuiFocusToStartInEditor,
    tuiGetContentEditable,
    tuiGetEditLinkInput,
    tuiGetScreenshotArea,
    tuiInsertLink,
    tuiOpenAnchorDropdown,
    tuiSelectTag,
    tuiTrashValueByEditLink,
    tuiVisitEditorApiPage,
} from '../support/editor/helpers';
import {HTML_EDITOR_EXAMPLE_LINK_WITH_FORMATTED_TEXT} from '../support/editor/html';

describe(`Editing links in Editor`, () => {
    beforeEach(() => {
        tuiVisitEditorApiPage();
        tuiFocusToStartInEditor();
    });

    it(`check if at least one link exists`, () => {
        tuiGetContentEditable()
            .find(`a`)
            .first()
            .contains(`adipiscing elit`)
            .should(`have.attr`, `href`)
            .and(`include`, `/taiga-ui.dev`);

        tuiClearHint();
        tuiFocusToStartInEditor();

        tuiGetScreenshotArea().matchImageSnapshot(`1-exist-link`);
    });

    it(`switch links between`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiClearHint();
        tuiFocusToStartInEditor();

        tuiGetScreenshotArea().matchImageSnapshot(`2-1-added-new-link`);
        tuiOpenAnchorDropdown({containHref: `https://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`2-2-focused-new-link`);

        tuiFocusToStartInEditor();

        tuiSelectTag(tuiGetContentEditable().find(`sup`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`example.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiClearHint();
        tuiFocusToStartInEditor();

        tuiGetScreenshotArea().matchImageSnapshot(`2-3-added-new-link-2`);
        tuiOpenAnchorDropdown({containHref: `https://example.com`});
        tuiGetContentEditable().find(`sup`).type(`{leftArrow}`);

        tuiGetScreenshotArea().matchImageSnapshot(`2-4-focused-new-link-2`);

        tuiOpenAnchorDropdown({containHref: `https://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(
            `2-5-correct-refresh-content-in-dropdown`,
        );
    });

    it(`deleting links`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiClearHint();
        tuiFocusToStartInEditor();

        tuiGetScreenshotArea().matchImageSnapshot(`3-1-before-remove-link`);

        tuiOpenAnchorDropdown({containHref: `https://wysiwyg.com`});
        tuiTrashValueByEditLink();

        tuiClearHint();
        tuiFocusToStartInEditor();

        tuiGetScreenshotArea().matchImageSnapshot(`3-2-after-remove-link`);
    });

    it(`single link`, () => {
        tuiClearEditor();
        tuiGetContentEditable().type(`link{selectAll}`);

        tuiInsertLink();
        tuiGetEditLinkInput().type(`link.com{enter}`);
        tuiClearHint();

        tuiGetContentEditable().type(`{moveToStart}`);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-0`);

        tuiGetContentEditable().type(`{rightArrow}`).tuiWaitBeforeScreenshot();
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-1`);

        tuiGetContentEditable().type(`{rightArrow}`).tuiWaitBeforeScreenshot();
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-2`);

        tuiGetContentEditable().type(`{rightArrow}`).tuiWaitBeforeScreenshot();
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-3`);

        tuiGetContentEditable().type(`{rightArrow}`).tuiWaitBeforeScreenshot();
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-4`);

        tuiGetContentEditable().type(`{enter}{enter}`);
        tuiGetScreenshotArea().matchImageSnapshot(
            `break-line-should-not-overlap-by-link-modal`,
        );

        tuiGetContentEditable().type(`H`);
        tuiGetScreenshotArea().matchImageSnapshot(
            `word-should-not-overlap-by-link-modal`,
        );
    });

    it(`revisit with highlighted text`, () => {
        tuiVisitEditorApiPage({
            content: HTML_EDITOR_EXAMPLE_LINK_WITH_FORMATTED_TEXT,
            skipDecodingUrl: true,
        });

        tuiFocusToStartInEditor();

        tuiOpenAnchorDropdown({containHref: `https://wysiwyg.com`});

        tuiGetScreenshotArea().matchImageSnapshot(`link-with-formatted-nested-content`);
    });
});
