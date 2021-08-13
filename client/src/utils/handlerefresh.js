function handleRefresh(info) {
    if (isLoged) {
        if (!userLoged) {
            const cookie = cookieMonster("userId");
            const url = `http://localhost:4000/home/user/${cookie}`;
            console.log("refrescado");
            const fetching = async () => {
                const data = await fetchData(false, url, "GET");
                return info;
            };
            fetching();
        }
    }
}
