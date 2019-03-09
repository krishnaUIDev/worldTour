import React, { Component } from 'react'

import {
  View,
  Text,
  Pano,
  AppRegistry,
  Cylinder,
  Box,
  asset,
  StyleSheet
} from 'react-vr'

const places = [
  {
    title: 'Island Paradise',
    image: 'zion-vr.jpg'
  },
  {
    title: 'Starry Night',
    image: 'island-garden.jpg'
  },
  {
    title: 'Winter Outdoors',
    image: 'lombard-vr.jpg'
  },
  {
    title: 'Light Show',
    image: 'museum.jpg'
  }
]

class WorldTour extends Component {
  constructor () {
    super()

    this.state = {
      showMenu: false,
      place: 'zion-vr.jpg'
    }
  }

  toggleMenu () {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    return (
      <View>
        <Pano source={asset(this.state.place)} />
        <View style={styles.menuButton} onEnter={() => this.toggleMenu()}>
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe
          style={{
            color: '#dd2222',
            transform: [
              { translate: [0, 0, -3] },
              { translateY: 1 },
              { translateX: -0.5 },
              { rotateY: 45 },
              { rotateZ: 45 }
            ]
          }}
        />
        <Cylinder
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe
          segments={50}
          style={{
            color: '#2d2',
            transform: [
              { translate: [0, 0.5, -3] },
              { rotateY: 45 },
              { rotateZ: 45 },
              { rotateX: 50 }
            ]
          }}
        />
        {this.state.showMenu ? (
          <View style={styles.menu}>
            {places.map((place, index) => {
              return (
                <View
                  style={styles.menuItem}
                  key={index}
                  onEnter={() => this.setState({ place: place.image })}
                >
                  <Text style={styles.menuItemText}>{place.title}</Text>
                </View>
              )
            })}
          </View>
        ) : (
          <View />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [{ translate: [-2, 0, -7.5] }]
  },
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    transform: [{ translate: [-2, 0, -5] }]
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000'
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000'
  }
})
AppRegistry.registerComponent('WorldTour', () => WorldTour)
