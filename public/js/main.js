


require(["dojo/dom", "dojo/on", "../js/counter.js", "dojo/dom-construct", "dojo/mouse", "dojo/domReady!" ],
 function(dom, on, counter, domConstruct, mouse){

    var hoverDiv = dom.byId("myDiv");
    var button = dom.byId("myButton");


    var mybutton1 = dom.byId("myButton1");
    var mybutton2 = dom.byId("myButton2");


    var myObject = {
        id: "baseObject",
        onClick: function(evt){
            debugger;
            console.log("The scope of this handler is " + this.id);
        }
    }

     // This will alert "myScopedButton1"
     debugger;
     on(mybutton1, "click", () => myObject.onClick());




    // on(hoverDiv, mouse.enter, () => {
    //     hoverDiv.style.color = "#FFF238";
    // } )
    // on(hoverDiv, mouse.leave, () => {
    //     hoverDiv.style.color = "#000000";
    // } )

    // on(button, "click", () => {
    //     hoverDiv.style.color = "#000FFF";
    // })



    // function setText(node , text){
    //     dom.byId(node).innerHTML = text;
    // }

    // setText("debugMe", "Do not debug me");

    //debugger;
    // domConstruct.create("div", {
    //     innerHTML: '<p>DIV six</p>'
    // }, dom.byId("body"))

    

  });