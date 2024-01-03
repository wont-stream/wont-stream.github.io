import("https://esm.run/docsify/lib/docsify.min.js");
import("https://esm.run/docsify/lib/plugins/external-script.min.js");
import("https://esm.run/docsify/lib/plugins/search.min.js");
import("https://esm.run/docsify/lib/plugins/zoom-image.min.js");
import("https://esm.run/docsify-copy-code/dist/docsify-copy-code.min.js");

window.$docsify = {
    name: 'Unstream <br> <span id="time">00:00</span> <img src="assets/etc/1x1.png" onload="window.$sidebarLoaded()" width="0px">',

    basePath: '/pages/',
    
    autoHeader: true,
    auto2top: true,
    executeScript: true,
    mergeNavbar: true,
    loadNavbar: true,
    loadSidebar: true,
    subMaxLevel: Infinity,
    search: {
        maxAge: 300000,
        paths: "auto",
        placeholder: "Search"
    }
};

window.$sidebarLoaded = async () => {
    setInterval(time, 1000)
    time()
}

const time = () => {
    const currentTime = new Date().toLocaleString("en-DE", { timeZone: "America/New_York" }).split(", ")[1].split(":");

    document.getElementById("time").innerText = `${currentTime[0]}:${currentTime[1]} ${currentTime[0] >= 0 && currentTime[0] <= 6 ? "💤" : ""}`
}
