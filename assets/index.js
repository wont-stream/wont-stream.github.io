import("https://esm.sh/docsify/lib/docsify.min.js");
import("https://esm.sh/docsify/lib/plugins/external-script.min.js");
import("https://esm.sh/docsify/lib/plugins/search.min.js");
import("https://esm.sh/docsify/lib/plugins/zoom-image.min.js");
import("https://esm.sh/docsify-copy-code/dist/docsify-copy-code.min.js");

window.$docsify = {
    name: 'Katze <span id="discord_data_discord_status">⚫</span> <br> <span id="time">00:00</span> <span id="hr"></span> <img src="assets/etc/1x1.png" onload="window.$sidebarLoaded()" width="0px">',

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

const statuses = {
    "online": "🟢",
    "idle": "🟡",
    "dnd": "🔴",
    "offline": "⚫",
}

window.$sidebarLoaded = async () => {
    setInterval(time, 1000)
    time()

    discord()

    heartrate()
}

const time = () => {
    const currentTime = new Date().toLocaleString("en-DE", { timeZone: "America/New_York" }).split(", ")[1].split(":");

    document.getElementById("time").innerText = `${currentTime[0]}:${currentTime[1]} ${currentTime[0] >= 0 && currentTime[0] <= 6 ? "💤" : ""}`
}

const discord = async() => {
    let data = await fetch("https://lanyard.rest/v1/users/1125315673829154837")
    data = await data.json()
    data = data.data

    document.getElementById("discord_data_discord_status").innerText = statuses[data.discord_status]
}

const heartrate = async() => {
    let html = '';

    let data = await fetch(`https://backend.katze.click/api/heartrate`)
    data = await data.json()

    if (data.hr !== 0) {
        html += "<br>"
        html += `❤️: ${data.hr}`
    }

    if (data.avg !== null) {
        html += "<br>"
        html += `💖: ${data.avg}`
    }

    document.getElementById("hr").innerHTML = html
}