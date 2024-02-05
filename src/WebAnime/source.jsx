import axios from "axios";
import React from "react";
import Cards from "./cards";

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      console.log(response.data.data);
      this.setState({ data: response.data.data });
    } catch (error) {
      console.log("eror fetching data:", error);
    }
  };

  render() {
    return (
      <div>
        <Cards data={this.state.data} />
      </div>
    );
  }
}
