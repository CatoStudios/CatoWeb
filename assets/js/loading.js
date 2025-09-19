const social = [{squery:'discord', slink:"https://discord.gg/Yaq5HWP3h2", sname:"Discord", sicon:"discord.webp", sbackground:"discord-bg.jpg"},
                {squery:'twitch', slink:"https://www.twitch.tv/catoklysm/", sname:"Twitch", sicon:"twitch.webp", sbackground:null},
                {squery:'pronounspage', slink:"https://pronouns.page/@CatoVR", sname:"Pronounspage", sicon:"pronounspage.webp", sbackground:null},
                {squery:'Telegram', slink:"https://t.me/catoklysm", sname:"Telegram", sicon:"telegram.webp", sbackground:null},
                {squery:'bluesky', slink:"https://bsky.app/profile/catoklysm.bsky.social", sname:"Bluesky", sicon:"bluesky.webp", sbackground:null}];
const url = (new URL(document.location));
const duration = 1500;
window.addEventListener('load', () => {

    var query = url.searchParams.get('q');
    var succes = false;
    if(query != null && query != ""){
        query = query.toLowerCase();
        social.forEach(content => {
            if(content.squery == query){
                const message = "Redirecting to " + content.sname + "...";
                document.getElementById('loading-pbvalue').innerHTML = message;
                document.title = message;
                document.getElementById('socialicon').src = "assets/images/reficon/" + content.sicon;
                if(content.sbackground != null){
                    document.body.style.background = "url('assets/images/" + content.sbackground + "')"; 
                }
                succes = true;
                setTimeout(function(){
                    document.location.href = content.slink;
                }, duration);
            }
        });
    }
    if(!succes){
        document.getElementById('loading-pbvalue').innerHTML = "Invalid Query";
        document.title = "Invalid Query";
        setTimeout(function(){
            document.location.href = "https://catovr.ga/";
        }, duration);
    }
});



