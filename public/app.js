// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD74_ZIS-qZkiaSW2Hr4aNZWYD2mo02tfE",
    authDomain: "hk-alarm-chrome.firebaseapp.com",
    projectId: "hk-alarm-chrome",
    storageBucket: "hk-alarm-chrome.appspot.com",
    messagingSenderId: "600240584918",
    appId: "1:600240584918:web:735115397a950a29cbb177",
    measurementId: "G-87E1V44SS2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

function SubscribeUser(){
    Notification.requestPermission().then(permission=>{
        console.log(permission)
        if(permission == "granted"){
            messaging.getToken({
                vapidkey:"BFjyIlT43-G_QDM17etTdF179EGc0l6MmWMaC8ODMeiKDbZCqZN4NCBiPbmqcbqb-TtFUmMDcvf5p912XMWbS0o"
            }).then(currentToken=>{
                // console.log(currentToken)
                document.getElementById('tokenId').innerHTML = currentToken;
            })
        }
    })
}


messaging.onMessage(res=>{
    console.log('[app.js] 포그라운드\n' +  
    '제목 : ' + res.notification.body + '\n'+ '내용 : ' + res.notification.body  
    ,res)

    alert('제목 : ' + res.notification.title + '\n'+ '내용 : ' + res.notification.body )  //먹음

    // const notificationTitle = '백그라운드 메시지 제목이다';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    //   icon: '/icon.png'
    // };
    
    // window.registration.showNotification
    // window.registration.showNotification(notificationTitle, notificationOptions);

    // console.log("알림창 띄우고 싶다" + notificationTitle)

})

function sendNotification(){
    const token = document.getElementById('token').value
    const title = document.getElementById('title').value
    const msg = document.getElementById('msg').value

    let body = {
        to : token,
        notification :{
            title : title,
            body : msg,
            icon: "icon.png",
            click_action: "http://www.hakyungsoft.com"

        }     
    }

    let options={
        method: "POST",
        headers: new Headers({
            Authorization: "key=AAAAi8EgeNY:APA91bEhAQ2UaEeZaX0JTwL68FWHyrYvbgGRQxrw6tKEhnCFQGCe46XBdHeC_uDZnAURi_6E_fwCsaIIwW2DJZdyEIJumJhBPaXp1MF145gDh1_HQ2D98VGCD7dj47u8LDOlhKTKHMAh",
            "Content-Type" : "application/json"
        }),
        body: JSON.stringify(body)
    }

    fetch("https://fcm.googleapis.com/fcm/send", options).then(res=>{
    // fetch("https://fcm.googleapis.com//v1/projects/hk-alarm-chrome/messages:send", options).then(res=>{
        // console.log(res)
        // console.log('SENT')
    }).catch(e=>console.log(e))

    // console.log(body)

}