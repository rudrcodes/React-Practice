import { Component, React } from "react";

const UpdatedContent = (OriginalComponent) => {
  class NewComponent extends Component {
    //   class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedContent;
