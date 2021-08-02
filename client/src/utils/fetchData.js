const fetchData = async (handleData, url) => {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(handleData),
    });
    const data = await res.text();
    console.log(data);
};

module.exports = fetchData;
