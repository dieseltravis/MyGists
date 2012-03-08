//https://gist.github.com/1481861

// Bookmarklet:
//javascript:(function(a){for(var a=a.createTreeWalker(a.body,NodeFilter.SHOW_TEXT,null,!1),b;b=a.nextNode();)b.nodeValue=b.nodeValue.replace(/\w/g,"\u2588")})(window.document);void(0);

(function () {
    var walker = document.createTreeWalker(
            document.body, 
            NodeFilter.SHOW_TEXT, 
            null, 
            false
        ), 
        node;

    while(node = walker.nextNode()) {
        node.nodeValue = node.nodeValue.replace(/\w/g,"\u2588");
    }
})();