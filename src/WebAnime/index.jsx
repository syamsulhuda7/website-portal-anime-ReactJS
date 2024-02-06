import axios from "axios";
import React from "react";
import Cards from "./cards";
import NavScroll from "./navbar";
import LoadingSpinner from "./loading";

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchData: [],
      loading: true,
    };
  }

  handleSearch = (searchData) => {
    this.setState({ searchData });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      this.setState({ data: response.data.data });
    } catch (error) {
      console.log("eror fetching data:", error);
    } finally {
        this.setState({loading: false})
    }
  };

  render() {
    return (
      <div>
        <NavScroll onSearch={this.handleSearch} />
        {this.state.loading && <LoadingSpinner />}
        <Cards data={this.state.searchData} />
        {this.state.searchData == '' && <Cards data={this.state.data} />}
      </div>
    );
  }
}
