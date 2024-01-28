const links = document.querySelectorAll("a");
const { host } = location;
if (host == "ezragol.github.io") {
    for (const link of links) {
        const href = link.getAttribute("href");
        if (href)
            link.setAttribute("href", "/capstone" + href);
    }
}