import { App, Plugin, MarkdownView } from "obsidian";

export default class VScodeKeymapPlugin extends Plugin {

  // Lifecycle
  // ---

  async onload() {
    console.log("loading obsidian-vscode-keymap");

    this.addLinesVSCodeCommands();
  }

  onunload() {
    console.log("unloading obsidian-vscode-keymap");
  }

  // Line Commands
  // ---

  addLinesVSCodeCommands() {
    // Copy Line Down - Shift + Alt + Down
    this.addCommand({
      id: "copy-line-down",
      name: "Copy current line down",
      callback: () => this.copyLineDown,
      hotkeys: [
        {
          modifiers: ["Shift", "Alt"],
          key: "Down",
        },
      ],
    });

    // Copy Line Up - Shift + Alt + Up
    this.addCommand({
      id: "copy-line-up",
      name: "Copy current line up",
      callback: () => this.copyLineUp,
      hotkeys: [
        {
          modifiers: ["Shift", "Alt"],
          key: "Up",
        },
      ],
    });

    // Insert Line Above - Ctrl + Shift + Enter
    this.addCommand({
      id: "insert-line-above",
      name: "Insert a new line above",
      callback: () => this.insertLineAbove,
      hotkeys: [
        {
          modifiers: ["Ctrl", "Shift"],
          key: "Up",
        },
      ],
    });

    // Insert Line Below -  Ctrl + Enter
    this.addCommand({
      id: "insert-line-below",
      name: "Insert a new line below",
      callback: () => this.insertLineBelow,
      hotkeys: [
        {
          modifiers: ["Ctrl", "Shift"],
          key: "Down",
        },
      ],
    });

    // Move Line Down -  Alt + Down
    this.addCommand({
      id: "move-line-down",
      name: "Move current line down",
      callback: () => this.moveLineDown,
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "Down",
        },
      ],
    });

    // Move Line Up -  Alt + Up
    this.addCommand({
      id: "move-line-up",
      name: "Move current line up",
      callback: () => this.moveLineUp,
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "Up",
        },
      ],
    });
  }

  // Private Functions
  // ---

  private copyLineDown() {
    console.log("copy line down !");
  }
  private copyLineUp() {
    console.log("copy line up !");
  }
  private insertLineAbove() {
    console.log("insert line up !");
  }
  private insertLineBelow() {
    console.log("insert line down !");
  }
  private moveLineDown() {
    console.log("move line down !");
  }
  private moveLineUp() {
    console.log("move line up !");
  }
}
