const parentDiv = React.createElement("div", {id: "heading"}, 
[React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "text inside h1"),
React.createElement("h2", {}, "text inside h2")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {}, "text inside h1 tag"),
React.createElement("h2", {}, "text inside h2 tag")])]);

console.log(parentDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv); // render method takes react element object as argument then converts this into tags and it is then inserted inside the root DOM element