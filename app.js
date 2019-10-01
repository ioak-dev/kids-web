var elements = ['nav-songbook', 'nav-classical'];

function toggleNavSongbook() {
    document.getElementById("nav-songbook").classList.toggle("show");
}

function toggleNavClassical() {
    document.getElementById("nav-classical").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        elements.map(item => {
            var node = this.document.getElementById(item);
            if (node.classList.contains('show')) {
                node.classList.toggle('show');
            }
        })
    }
}

function markdown(link) {
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            $.get(link, function(md) {
                var html = new showdown.Converter().makeHtml(md);
                document.getElementById('markdown').innerHTML = html;
            }, 'text');
        }
    });
}