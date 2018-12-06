/* @flow */

import React, { Component } from 'react';
import {
Animated,Easing
} from 'react-native';

export class FadeInView2 extends Component {
  constructor(props) {
    super(props);
    this.state = {translateValue:new Animated.ValueXY({x:-500, y:0}),
                  opacityValue:new Animated.Value(0)
                  }; // 透明度初始值设为0
  }
  componentDidMount(){
    this.startAnimation();
  }

  render() {
    return (
      <Animated.View style={{
        ...this.props.style,
        opacity: this.state.opacityValue,
        transform: [
                      {translateX: this.state.translateValue.x}, // x轴移动
                      {translateY: this.state.translateValue.y}, // y轴移动
                    ]
      }}>
        {this.props.children}
      </Animated.View>
    );
  }

  startAnimation() {
  Animated.parallel([//  组合动画 parallel（同时执行）、sequence（顺序执行）、stagger（错峰，其实就是插入了delay的parrllel）和delay（延迟）
      Animated.spring(
          this.state.opacityValue, {
           toValue: 1,
           duration: 2000,
      }),
      Animated.timing(this.state.translateValue, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,// 线性的渐变函数
        toValue: {x: 0, y: 0},
      })
  ]).start();
}
}
