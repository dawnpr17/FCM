importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js")

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

messaging.onMessage(res=>{
    console.log('[firebase-messaging-sw.js] 포그라운드 ', res)

    // const notificationTitle = '백그라운드 메시지 제목이다';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    //   icon: '/icon.png'
    // };
  
    // self.registration.showNotification(notificationTitle, notificationOptions);

    // console.log("알림창 띄우고 싶다" + notificationTitle)
})


messaging.onBackgroundMessage((payload) => {
    //alert('[firebase-messaging-sw.js] 백그라운드 : ' + payload) //백그라운드는 안 먹음
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    // const notificationTitle = '백그라운드 메시지 제목이다';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    //   icon: '/icon.png'
    // };
  
    // self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener("notificationclick", function (event) {
    const url = 'https://hakyungsoft.modoo.at/';
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
  });