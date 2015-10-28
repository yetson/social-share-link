(function(global){
    var URL = {
        vk: "https://m.vk.com/main.php?subdir=share.php&url={url}&title={title}&image={image}&description={content}",
        facebook: "http://www.facebook.com/sharer.php?u={url}&t={title}",
        twitter: "http://twitter.com/share?text={title}&url={url}",
        ok: "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments={content}&st._surl={url}",
        livejournal: "http://www.livejournal.com/update.bml?event={url}&subject={title}",
        googleplus: "https://plusone.google.com/_/+1/confirm?hl=en&url={url}",
        mailru: "http://connect.mail.ru/share?url={url}&title={title}",
        email: "mailto:?subject={title}&body={content}{url}",
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={content}",
        copy: "",
        tumblr: "http://www.tumblr.com/share?v=3&u={url}",
        pinterest: "http://pinterest.com/pin/create/button/?url={url}&media=&description={content}",
        digg: "http://digg.com/submit?url={url}&title={title}",
        reddit:"http://reddit.com/submit?url={url}&title={title}",
        surfingbird: "http://surfingbird.ru/share?url={url}&title={title}&description={content}&screenshot={image}"
    };

    function commonShare(opt){
        var opt = opt || {},
            type = opt.type || "",
            title = opt.title || "",
            content = opt.content || "",
            siteUrl = opt.url || "",
            imageUrl = opt.imageUrl || "",
            facebook_app_id = opt.facebook_app_id || "",
            url = URL[type];
        if(type == "" || typeof url != "string"){
            console.log("share error: type or url should not be null");
            return;
        }
        console.log("share url decodeURI: " + url.replace(/\{url\}/, siteUrl).replace(/\{title\}/, title).replace(/\{content\}/, content).replace(/\{image\}/, imageUrl));
        url = url.replace(/\{url\}/, encodeURIComponent(siteUrl))
           .replace(/\{title\}/, encodeURIComponent(title))
           .replace(/\{content\}/, encodeURIComponent(content))
           .replace(/\{image\}/, encodeURIComponent(imageUrl));
        console.log("share url encodeURI: " + url);
        location.assign(url);
    }

    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = commonShare :
    typeof define === 'function' && define.amd ? define('commonShare', [], function(){return commonShare;}) :
        global.commonShare = commonShare;
})(this);
