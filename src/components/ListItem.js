import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    color: "#000"
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { id, title, description } = this.props.library.item;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}> {title} </Text>
          </CardSection>
          {this.props.expanded ? (
            <CardSection>
              <Text style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                {" "}
                {description}
              </Text>
            </CardSection>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(ListItem);
