import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot, 
} from "./firebase.js";
import { app } from "./script.js";

const db = getFirestore(app);
console.log("db=>", db);

var addBtn = document.getElementById("addBtn");
var codeInput = document.getElementById("codeInput");
const qutoCollection = collection(db, "quotes");

addBtn.addEventListener("click", addQuote,);

async function addQuote() {
  if (codeInput.value.trim() === "") {
    alert("Please enter a quote.");
    return;
  }
  await addDoc(qutoCollection, {
    quto: codeInput.value,
    time: serverTimestamp(),
  });
  codeInput.value = ""; 
  getQuote();
}

async function getQuote() {
const querySnapshot = onSnapshot(qutoCollection, (snapshot) => {
    const ulBox = document.getElementById("quoteList");
    ulBox.innerHTML = ""; 
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const li = document.createElement("li");

      const editBtnEl = document.createElement("button");
      editBtnEl.setAttribute("class", "edit-btn");
      editBtnEl.textContent = "Edit";
      editBtnEl.addEventListener("click", function () {
        editBtn(doc.id, doc.data().quto);
      });

      const delBtnEl = document.createElement("button");
      delBtnEl.setAttribute("class", "del-btn");
      delBtnEl.textContent = "Delete";
      delBtnEl.addEventListener("click", function () {
        deleteBtn(doc.id);
      });

      li.textContent = doc.data().quto;

      if (li.textContent === "" || li.innerHTML === "") {
        editBtnEl.style.display = "none";
        delBtnEl.style.display = "none";
        li.style.display = "none";
      } else {
        editBtnEl.style.display = "inline-block";
        delBtnEl.style.display = "inline-block";
        li.style.display = "list-item";
      }

      ulBox.appendChild(li);
      li.appendChild(delBtnEl);
      li.appendChild(editBtnEl);
    });
  });
}


getQuote();
async function editBtn(id, oldQuto) {
  const newQuto = prompt("Enter new quote", oldQuto);
  await updateDoc(doc(db, "quotes", id), {
    quto: newQuto,
  });
  getQuote();
}
async function deleteBtn(id) {
  await deleteDoc(doc(db, "quotes", id));
 getQuote();
}
