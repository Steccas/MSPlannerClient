var x = true;

disableBrowserAction();

function disableBrowserAction()
{
    chrome.tabs.executeScript({file:"toggle.js"});
}

function enableBrowserAction()
{
    chrome.tabs.executeScript({file: "theme_css.js"});
}

function updateState()
{
    if(x==false)
    {
        x=true;
        enableBrowserAction();
    }
    else
    {
        x=false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);
