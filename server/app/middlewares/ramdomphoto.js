function random() {
    const PhotoLinks = [
        "https://i.imgur.com/DVJcEE3.jpeg",
        "https://i.imgur.com/9yEsHCI.jpeg",
        "https://i.imgur.com/9yEsHCI.jpeg",
        "https://i.imgur.com/CBb2Mbh.jpeg",
        "https://i.imgur.com/p81Eh87.jpeg",
        "https://i.imgur.com/DpmCVGl.jpeg",
        "https://i.imgur.com/qZap19H.jpeg",
        "https://i.imgur.com/124sR77.jpeg",
        "https://i.imgur.com/JYLKbH3.jpeg",
        "https://i.imgur.com/Rl7lsJ9.jpeg",
        "https://i.imgur.com/OV7V8aN.jpeg",
        "https://i.imgur.com/idQXIi2.jpeg",
        "https://i.imgur.com/ZQ1I3s4.jpeg",
        "https://i.imgur.com/cTGu0Uo.jpeg",
        "https://i.imgur.com/1KuoZyx.jpeg",
        "https://i.imgur.com/j3yqYvp.jpeg",
        "https://i.imgur.com/zaFIU3S.jpeg",
    ];
    return PhotoLinks[Math.floor(Math.random() * PhotoLinks.length)];
}

module.exports = { random };
