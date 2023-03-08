window.addEventListener("message", (event) => {
  // IMPORTANT: check the origin of the data!
  console.log(event.origin);
  if (event.origin === "https://test-window-b.vercel.app/") {
    console.log(event.data);
    // The data was sent from your site.
    // Data sent with postMessage is stored in event.data:
  } else {
    // The data was NOT sent from your site!
    // Be careful! Do not use it. This else branch is
    // here just for clarity, you usually shouldn't need it.
    return;
  }
});
