// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "/COMMON/js/firebase/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtrCpgWgfq9BZVQTUXh1PaKSzkH8oVLyI",
  authDomain: "roum-publ.firebaseapp.com",
  projectId: "roum-publ",
  storageBucket: "roum-publ.appspot.com",
  messagingSenderId: "277470991336",
  appId: "1:277470991336:web:d57c6cbd499f848c5d8a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Google 로그인 팝업 열기
var provider = new GoogleAuthProvider();

const isLoginPage = location.href.includes('login.html');
const isErrPage = location.href.includes('error.html');

// 사용자 로그인 상태 확인
onAuthStateChanged(auth, (user) => {
  getIpAddress()
    .then(ipAddress => {

      if (ipAddress !== '220.76.243.212') {
        // IP주소가 다를 시 ERROR 페이지로 리다이렉트
        if (!isErrPage) {
          location.href = '/error.html';
        }
      } else {
        if (isLoginPage) {
          // 로그인 페이지일 때
          if (user && user.email.includes('@roumit.com')) {
            //저장해둔 페이지로 리다이렉트 처리
            const originalPage = localStorage.getItem('originalPage');
            
            if (originalPage) {
              window.location.href = originalPage;
            } else {
              window.location.href = '/';
            }
          }
        } else {
          // 로그인 페이지가 아닌 경우
          localStorage.setItem('originalPage', location.href); //기존 페이지 저장

          if (!(user && user.email.includes('@roumit.com'))) {
            location.href = '/login.html';
          }
        }
      }
    })
});


var googleSignInBtn = document.getElementById('googleSignInBtn');
var googleSignOutBtn = document.getElementById('googleSignOutBtn');

// Google 로그인 버튼 클릭 이벤트 처리
if (googleSignInBtn) {
  document.getElementById('googleSignInBtn').addEventListener('click', function () {

    signInWithPopup(auth, provider)
      .then((result) => {
        var user = result.user;

        if (user.email.includes('@roumit.com')) {
          // 사용자가 로그인한 경우, 사용자의 정보 또는 원래 페이지 정보를 가져와 리다이렉트
          const originalPage = localStorage.getItem('originalPage');

          if (originalPage) {
            window.location.href = originalPage;
          } else {
            window.location.href = '/';
          }
          // localStorage.setItem('test', JSON.stringify(user));
        } else {
          alert('접근권한이 없습니다.');
        }
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
});
}

// Google 로그아웃 버튼 클릭 이벤트 처리 ( 추후 추가예정 ) 
if (googleSignOutBtn) {
  document.getElementById('googleSignOutBtn').addEventListener('click', function () {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        // Redirect to the login page or perform any other actions after sign-out.
		localStorage.removeItem('originalPage');
        location.href = '/login.html';
      })
      .catch((error) => {
        console.error("Sign-out failed:", error);
      });
  });
}

// 클라이언트 측에서 IP 주소 확인
function getIpAddress() {
  // Promise를 반환하여 비동기 처리
  return new Promise((resolve, reject) => {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;

        // 비동기 작업이 완료되면 resolve를 호출하여 결과를 반환
        resolve(ipAddress);
      })
      .catch(error => {
        console.error('IP 주소를 가져오는 중 오류 발생:', error);
        // 에러가 발생하면 reject를 호출하여 에러를 반환
        reject(error);
      });
  });
}
