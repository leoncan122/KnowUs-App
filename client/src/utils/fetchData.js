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

    if (methodType === "DELETE" && !handleData) {
        fetch(url, {
            method: "DELETE",
            credentials: "include",
        })
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }

    return data;
};

export default fetchData;
