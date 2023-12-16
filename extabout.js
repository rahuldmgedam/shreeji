function showMoreContent() {
  const moreContent = document.getElementById("moreContent");
  const red = document.getElementById("red");
  const content = document.getElementById("content");
  const btn = document.getElementById("btn");

  if (
    content.innerHTML ==
      "We feel that professionals in this industry should be judged by their printed work. We recognise that a computerised presentation would be unsuccessful inpresenting our unique quality. Everything appears the same on digital platforms,but when it comes to printing, the entire process is technical, and this is where the difference lies. Second, because our primary purpose is to print your product pacakage or catelogue . we prefer to utilise your product photographv as our test" &&
    btn.innerHTML == "Know More"
  ) {
    content.innerHTML =
      "We feel that professionals in this industry should be judged by their printed work. Everything appears the same on digital platforms , but when it comes to printing, the entire process is technical, and this is where the difference lies .when we started promoting our 'Hero Product'(Our Product Photography) in printed form , every business  firm not only appreciated our photograph in printed form ,but they also gave us their packages to design. No one responded when we were asked to share our work via WhatsApp .Then we realised that a digital presentation would be unable to convey our distinct quality. Second, it is preferable that we use your product photograph as our test, as the final destination of our work is to print your product packaging or catelogue";
    red.style.height = "600px";
    red.style.transition = "all .8s ease-in-out";
    btn.innerHTML = "Know Less";
  } else {
    content.innerHTML =
      "We feel that professionals in this industry should be judged by their printed work. We recognise that a computerised presentation would be unsuccessful inpresenting our unique quality. Everything appears the same on digital platforms,but when it comes to printing, the entire process is technical, and this is where the difference lies. Second, because our primary purpose is to print your product pacakage or catelogue . we prefer to utilise your product photographv as our test";
    btn.innerHTML = "Know More";
    red.style.transition = "all .8s ease-in-out";
  }
}
