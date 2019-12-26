import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, Platform, View, Text } from 'react-native';

import MapScreen from './MapScreen';
import {ENTRIES} from './ENTRIES';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const SLIDER_1_FIRST_ITEM = 1;



class MyCarousel extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            activeCoordinate: {},
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            entries: ENTRIES,
        }
        this.onItemChange = this.onItemChange.bind(this)
      }

      componentWillMount(){
        const { data } = this.props
        this.setState({ activeCoordinate:this.state.entries[0].coordinate })
      }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    onItemChange(index) {
        // console.log(this.state.entries[index].coordinate)
        this.setState({ slider1ActiveSlide: index, activeCoordinate: this.state.entries[index].coordinate })
        // console.log(this.state.activeCoordinate)
    }

    render () {
        const { activeCoordinate, entries, slider1ActiveSlide } = this.state
        console.log(entries[slider1ActiveSlide].title)
        const title = entries[slider1ActiveSlide].title
        return (
                <View style={styles.container}>
                    <MapScreen
                        coordinate={activeCoordinate}
                        description={title}
                    />
                  <View style={{
                            paddingTop: screenHeight - 250, 
                            position: 'absolute',
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                        }}>
                        <Carousel
                            sliderWidth={screenWidth - 10}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 80}
                            data={ENTRIES}
                            renderItem={this._renderItem}
                            hasParallaxImages={true}
                            loop={true}
                            loopClonesPerSide={2}
                            onSnapToItem={(index) =>  this.onItemChange(index)}
                        />
                  </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    item: {
        marginLeft: 5,
        width: screenWidth - 80,
        height: screenWidth - 180,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: 'rgba(125, 125, 125, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
})

export default MyCarousel;