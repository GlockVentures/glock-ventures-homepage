export const isMobile = () => {
    // if (document.body.clientWidth<800){return true}
    let info = navigator.userAgent;
    let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    for(let i = 0; i < agents.length; i++){
        if(info.indexOf(agents[i]) >= 0) return true;
    }
    if (window.innerWidth<800) return true;
    return false;
}

export const isWeixin = function () { //判断是否是微信
    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
};

export const isHuawei = () => {
    return navigator.userAgent.toLowerCase().match(/huawei/i) == "huawei";
}

export const webListWidth = {
    width: "350px",
    maxWidth: "calc(15vw + 150px)",
}

export const mobileListWidth = {
    width: "500px",
    maxWidth: "calc(100%)",
    marginRight: 0,
}