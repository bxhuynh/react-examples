import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DATA = [
  {
    id: "ngao",
    img: "https://i.imgur.com/bb1LCAk.png",
    color: "#24574b",
  },
  {
    id: "sorry",
    img: "https://i.imgur.com/xinWA1U.png",
    color: "#3e9f85",
  },
  {
    id: "dao",
    img: "https://i.imgur.com/ww311Tf.png",
    color: "#e8dcbf",
  },
  {
    id: "ew",
    img: "https://i.imgur.com/HOvcm9K.png",
    color: "#3b3e86",
  },
];

class App extends React.Component {
  state = {
    selectedAmi: "",
  };

  onSelect = (id) => {
    this.setState({ selectedAmi: id });
    window.history.pushState({ selectedAmi: id }, "", "?selectedAmi=" + id);
  };

  componentDidMount() {
    window.addEventListener("popstate", this.setAmiFromHistory);
  }

  setAmiFromHistory = (e) => {
    if (e?.state?.selectedAmi) {
      console.log("hehe");
      e.preventDefault();
      e.stopPropagation();
      this.setState({ selectedAmi: e?.state?.selectedAmi });
    } else {
      this.setState({ selectedAmi: "" });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("popstate");
  }

  render() {
    return (
      <div className="amis">
        {DATA.map((item) => (
          <div
            className={
              "ami" + (this.state.selectedAmi === item.id ? " selected" : "")
            }
            id={item.id}
            onClick={() => {
              this.onSelect(item.id);
            }}
            key={item.id}
          >
            <img src={item.img} alt={item.id} />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
