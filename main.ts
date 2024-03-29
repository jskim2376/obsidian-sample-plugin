import { MarkdownView, Notice, Plugin, Setting } from "obsidian";

export default class ExportLivePreview extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {
				menu.addItem((item) => {
					item.setTitle("Live Preview")
						.setIcon("scan-eye")
						.onClick(async () => {
							new Notice(file.path);
						});
				});
			})
		);

		this.registerEvent(
			this.app.workspace.on("editor-menu", (menu, editor, view) => {
				menu.addItem((item) => {
					item.setTitle("Live Preview")
						.setIcon("scan-eye")
						.onClick(async () => {
							new Notice(view.file.path);
						});
				});
			})
		);
	}

	onunload() {}
}
