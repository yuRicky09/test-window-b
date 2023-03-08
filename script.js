const loca = document.querySelector("#location");
console.log(window.opener);
loca.innerText = window.opener."0";
console.log(loca);

window.addEventListener("message", (event) => {
  // IMPORTANT: check the origin of the data!
  if (event.origin === "https://test-window-a.vercel.app/") {
    // The data was sent from your site.
    // Data sent with postMessage is stored in event.data:
    console.log(event.data);
  } else {
    // The data was NOT sent from your site!
    // Be careful! Do not use it. This else branch is
    // here just for clarity, you usually shouldn't need it.
    return;
  }
});
