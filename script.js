const base="http://localhost:7000";

const output=document.getElementById("output");
const nameInput=document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

function showMessage(success, text) {
    output.innerHTML = `<div style="padding:10px;
                                      border-radius:5px;
                                      font-weight:bold;
                                      color:${success ? "green" : "red"};">
                           ${text}
                        </div>`;
}

//add

document.getElementById("addBtn").addEventListener("click",async()=>{
    const url=`${base}/add/${nameInput.value}/${phoneInput.value}/${emailInput.value}`;
    const res= await fetch(url,{method : "POST"});
    const data = await res.json();
    if (res.ok) {
        showMessage(true, data.message || "Contact added successfully.");
    } else {
        showMessage(false, data.error || "Failed to add contact.");
    }
})

//find
document.getElementById("findBtn").addEventListener("click",async()=>{
    const url=`${base}/find/${nameInput.value}`;
    const res=await fetch(url);
    const data=await res.json();

    if (res.ok && data) {
        showMessage(true, `Found: ${data.name} | ${data.phone} | ${data.email}`);
    } else {
        showMessage(false, "Contact not found.");
    }

})

//update

document.getElementById("updateBtn").addEventListener("click", async()=>{
    const url=`${base}/update/${nameInput.value}/${phoneInput.value}/${emailInput.value}`;
    const res=await fetch(url,{method:"PUT"});
    const data=await res.json();

    if (res.ok) {
        showMessage(true, data.message || "Contact updated successfully.");
    } else {
        showMessage(false, data.error || "Failed to update contact.");
    }
})

//delete

document.getElementById("deleteBtn").addEventListener("click", async () => {
  const url = `${base}/delete/${nameInput.value}`;
  const res = await fetch(url, { method: "DELETE" });
  const data=await res.json();
  
  if (res.ok) {
        showMessage(true, data.message || "Contact deleted successfully.");
    } else {
        showMessage(false, data.error || "Failed to delete contact.");
    }
});


//list 


document.getElementById("listBtn").addEventListener("click",async()=>{
    const url = `${base}/list`;
    const res = await fetch(url);
    const data = await res.json();
    //display as table
    let html="<h3>Contact List</h3><table border='1' cellpadding='5'><tr><th>Name</th><th>Phone</th><th>Email</th><tr>";
    data.forEach(contact=>{
        html+=` <tr>
                    <td>${contact.name}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.email}</td>
                </tr>`;
    });
    html+="</table>";
    output.innerHTML=html;
})