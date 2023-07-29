
// document.createElement()

// const element = React.createElement("h1", {id : "header"}, "Hello Khushi!")
// this is same as above
// const element = <h1 id='header'> Hello Khushiii! </h1>
      
/*
<div id="header2">
<img />
<p></p>
</div>
*/
      
// const element = React.createElement("div", {}, [React.createElement("img", {}, ), React.createElement("p", {}, "khuhsiii")])      

const element = <div>
        <img src=""/>
        <p> HIi khushiii</p>
        </div>

console.log(element)
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(element);
