const tags = [
    "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br",
    "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn",
    "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3",
    "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label",
    "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option",
    "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section",
    "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template",
    "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
];

let currentTagIndex = 0;
let score = 0;

document.getElementById("tag-input").addEventListener("keyup", function(event) {
    const inputTag = event.target.value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");

    if (event.key === "Enter") {
        if (inputTag === tags[currentTagIndex]) {
            currentTagIndex++;
            score++;
        } else {

        }

        document.getElementById("score").textContent = `Score: ${score}`;
        event.target.value = "";

        if (currentTagIndex >= tags.length) {
            feedback.textContent = "Congratulations! You've named all the tags!";
            document.getElementById("tag-input").disabled = true;
        }
    } else {
        event.target.className = "";
        event.target.className = inputTag === tags[currentTagIndex] ? "correct" : "incorrect";
    }
});
