const cookieMonster = (data) => {
    let result = 0;

    const cookiesInfo = document.cookie.split(";");

    const cookieArray = cookiesInfo.filter((element) => element.includes(data));
    const cookie = cookieArray[0];
    if (cookiesInfo === "") {
        return result;
    }

    if (data === "token") {
        result = !!cookie;
    }

    if (data === "userId") {
        const id = parseInt(cookie.slice(8), 10);
        result = id;
    }

    return result;
};

export default cookieMonster;
