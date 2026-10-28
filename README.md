<h1><img src="icons/icon.svg" alt="" width="40" height="40" align="left">Fresh Restored Tabs</h1>

When you open an unloaded Firefox tab, Firefox shows the copy of the page it cached earlier, not the current one. A Reddit inbox misses new replies, and a GitHub pull request misses new comments, until you reload the tab yourself. Fresh Restored Tabs does that reload for you.

The extension needs no permissions. It cannot read page contents and does not collect or send any data.

## How it works

Firefox restores an unloaded tab from its session history, the same way the Back button works. Those loads take the page from the cache without asking the server whether it has changed. Mozilla tracks the problem in [Bug 706970](https://bugzilla.mozilla.org/show_bug.cgi?id=706970).

The extension watches for a tab going from unloaded to loaded. Once that first load finishes, it reloads the tab once. A normal reload checks with the server, so the page shows current content. Images, scripts and styles still load from the cache.

This covers tabs left unloaded after a restart, tabs you unload yourself, and tabs Firefox unloads when memory is low.

## Limitations

- You see the cached copy for a moment before the fresh page replaces it.
- Firefox loads the selected tab right away at startup instead of leaving it unloaded, so the extension does not reload that tab.

## Requirements

Firefox 142 or later.

## Related

[Restore Loaded Tabs](https://github.com/D3SOX/restore-loaded-tabs) keeps track of which tabs were loaded before a restart and loads only those again.

## Acknowledgment

Claude Opus 5.5 wrote this extension in Claude Code and tested it in Firefox 159 against a local server that changes its response on every request.

## License

[MPL-2.0](LICENSE)
