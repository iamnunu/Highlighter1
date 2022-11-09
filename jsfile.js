

document.addEventListener('mouseup', (event) => {

    var selectedText = window.getSelection ? window.getSelection() : document.selection.createRange();  // second one for IE

    selectedText = "Message.";

    var textd = $("body").html();
    var normalText = $("body").text();
    if (selectedText.getRangeAt) {
        var range = selectedText.getRangeAt(0);

        console.log("range"+range);

        var newNode = document.createElement("span");
        newNode.setAttribute('class', 'highlightedText');
        range.surroundContents(newNode);
    } else {
        selectedText.pasteHTML('<span class="highlightedText">' + selectedText.htmlText + '</span>');

    }
    $('.highlightedText').replaceWith(swapText);
});


$( window ).on( "load", readyFn );

function readyFn() {
//  alert();
    document.body.innerHTML = document.body.innerHTML.replace(
        'test',
        '<span style="color:yellow">ok</span>'
    );

//alert(data);

    test();

}

async function  test() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users =>{
            console.log(users);
        });
}
