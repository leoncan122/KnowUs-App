const cookieMonster = (data) => {
    let result = false;

    const cookiesInfo = document.cookie.split(";");

    const cookieArray = cookiesInfo.filter((element) => element.includes(data));
    const cookie = cookieArray[0];
    if (cookie) {
        result = true;
    }
    return result;
};

export default cookieMonster;
