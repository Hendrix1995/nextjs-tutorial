import { Header } from "semantic-ui-react";

import Gnb from "../components/Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/images/cat.jpg" alt="logo" style={{ width: "110px", height: "200px", marginRight: "10px", padding: "10px" }} />
        <Header as="h1">Hi!</Header>
      </div>
      <Gnb />
    </div>
  );
}
