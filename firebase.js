import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// بيانات Firebase الخاصة بك
const firebaseConfig = {
    apiKey: "AIzaSyCCEvGjvP8gw12mFYnxV_XPOHhM_zHJB_U",
    authDomain: "migad-9aa39.firebaseapp.com",
    databaseURL: "https://migad-9aa39-default-rtdb.firebaseio.com",
    projectId: "migad-9aa39",
    storageBucket: "migad-9aa39.firebasestorage.app",
    messagingSenderId: "82386152423",
    appId: "1:82386152423:web:fb466405bbc8c12d2beb42",
    measurementId: "G-2LCCDX0159"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// التعامل مع بيانات التسجيل
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;

    // حفظ البيانات في Firebase
    push(ref(database, "users/"), {
        name: name,
        phone: phone,
        age: age,
        country: country
    }).then(() => {
        alert("تم التسجيل بنجاح!");
        window.location.href = "index1.html"; // الانتقال إلى صفحة الأسئلة
    }).catch((error) => {
        console.error("خطأ في الحفظ:", error);
    });
});