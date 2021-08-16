const fetchData = async (handleData, url, methodType) => {
    let data = null;
    if (methodType === "POST" || methodType === "PUT") {
        const res = await fetch(url, {
            method: methodType,
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(handleData),
        });
        data = await res.json();
    }
    if (methodType === "GET" && !handleData) {
        const res = await fetch(url, {
            method: methodType,
            credentials: "include",
        });
        data = await res.json();
    }

    return data;
};

export default fetchData;
