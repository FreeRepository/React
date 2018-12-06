/* @flow */

import React, { Component } from 'react';
import {
Animated,Easing
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {rotateValue:new Animated.ValueXY({x:0, y:-300})};
  }
  componentDidMount(){
    this.startAnimation();
  }

  render() {
    return (
      <Animated.View style={{
        ...this.props.style,
        transform: [
                      {translateX: this.state.rotateValue.x}, // x轴移动
                      {translateY: this.state.rotateValue.y}, // y轴移动
                    ]
      }}>
        {this.props.children}
      </Animated.View>
    );
  }
  startAnimation() {
    Animated.timing(this.state.rotateValue, {
      toValue: {x: 0, y: 0},    // 返回到起始点开始
      easing: Easing.linear,
      duration: 2000,
      }
    ).start();
  }
}
