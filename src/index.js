import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Greeting(){

    return (<div>Hello</div>)
}

root.render(
<div>
    <h1>
    Hello
</h1>
<Greeting />
</div>
);
