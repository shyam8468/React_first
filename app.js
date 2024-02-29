
// javascript code for Hello World

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World JavaScript";

// const root = document.getElementById("root");

// root.appendChild(heading);


// print hello world using react

// const heading = React.createElement("h1",{},"Hello World using React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


















/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div>

if you want to create multiple h1 tag

create this type of structure inside react
*/

const parent = React.createElement("div",
                    {id:"parent"},
                    [
                        React.createElement("div",{id:"child1"}),
                        [React.createElement("h1",{id:"heading"},"This is first child div!"),
                        React.createElement("h3",{id:"head2"},"This is first child")],
                        React.createElement("div",{id:"child2"}),
                        [React.createElement("h1",{id:"heading"},"This is new second child!"),
                        React.createElement("h3",{id:"head2"},"This is second child div")]
                    ]
                );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// every thing which is previously in root will be replace by render method
// this look like mess if lot of multiple div then   for that JSX is used 