// Tabs that were just restored from an unloaded state and still need a fresh reload.
const pending = new Set();

browser.tabs.onUpdated.addListener(
  (tabId, changeInfo) => {
    if (changeInfo.discarded === false) {
      pending.add(tabId);
    } else if (changeInfo.status === "complete" && pending.delete(tabId)) {
      // Restored tabs load from cache like Back does; a normal reload revalidates with the server.
      browser.tabs.reload(tabId);
    }
  },
  { properties: ["discarded", "status"] },
);

browser.tabs.onRemoved.addListener((tabId) => pending.delete(tabId));
