import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Header, Title, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <View>
                    {
                        headerName === 'home' ? (
                            <TouchableOpacity onPress={ leftPress }>
                                <Thumbnail small source={{ uri: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' }} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={ leftPress }>
                                <Icon name='chevron-left' size={23} />
                            </TouchableOpacity> )
                    }  
                </View>
                <View>
                    <Title style={{color: 'black'}}>{this.props.title}</Title>
                </View>
                <View>
                    {
                        headerName === 'home' ? (
                            <TouchableOpacity onPress={ rightPress }>
                                <Icon name='sort-amount-asc' size={22} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={ rightPress }>
                                <Icon color='green' name='check-circle-o' size={30} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default Header;