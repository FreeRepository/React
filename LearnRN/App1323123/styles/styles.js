/* @flow weak */
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon:{
    height:230,
    margin:3
    // width:300
  },
  img:{
    height:30,
    width:30
  },
  headerTitleContainer: {
    width: null,
    height: 185,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
},
  headerRing: {
    width: 79,
    height: 79,
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 0.5,
    borderRadius: 39.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
},
headerAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
},
headerName: {
    fontSize: 16,
    marginTop: 5,
    color: '#fff'
},
headerAvatarContent: {
    width: 79,
    height: 79,
    marginTop: 49,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
},
infoContent: {
    width: null,
    height: 44,
    position: 'relative',
    backgroundColor: '#FFFFFF',
},
infoTouchable: {
    paddingLeft: 16,
    width: null,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
},
infoFlex: {
    flex: 1,
},
infoName: {
    fontSize: 14,
    color: '#333333'
},
infoIconContent: {
    alignItems: 'flex-end',
    marginRight: 15,
},
});
export default styles;
