import axios from 'axios'

const getCurrentUrl = () => {
    return chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        let url = tabs[0].url;
        return url
    });
}

// check if the current url is in the registered urls
chrome.devtools.network.onNavigated.addListener(createPanelIfRegistered)
const panelState = {
    isCreated: false,
    isLoaded: false,
    isShown: false
}
const createPanelIfRegistered = (panelState) => {
    if (panelState.isCreated || panelState.isLoaded || panelState.isShown ) return;
    // check if url is registered or not
    chrome.devtools.inspectedWindow.eval('', () => {
        chrome.devtools.panels.create('SnapPay', 'icon', 'html', panel => {
            chrome.runtime.sendMessage('SnapPay panel initiated!')
        })
    })
    // set icons and popup
    chrome.runtime.onMessage.addListener((req, sender) => {
        // check tabid and stuffs
        chrome.browserAction.setIcon({})
        chrome.browserAction.setPopup({})
    })
}

// highlights link or image
const highlightElem = (hookElement) => {
    // overlay => hookElement 
    // https://github.com/vuejs/vue-devtools/blob/dev/src/backend/highlighter.js

}

const overlay = {

}

// push notification
