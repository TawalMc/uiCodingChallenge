import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ownTheme from '../constants/theme';
import {
  store,
  search,
  filter,
  box,
  shapes1,
  shapes3,
  triangle,
  pocket1,
  pocket2,
  shapes2,
  pocket3,
} from '../constants/images';

const { COLORS, SIZES } = ownTheme;

const SideBarTabArray = [
  {
    name: 'Top Pick',
  },
  {
    name: 'Training',
  },
  {
    name: 'Latest',
  },
];

const SideBarTab = ({ name, current, setCurrent }) => (
  <TouchableOpacity
    style={{
      width: '100%',
      marginVertical: 5,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: '270deg' }],
    }}
    onPress={() => setCurrent(name)}
    activeOpacity={0.6}
  >
    <Text
      style={{
        fontFamily: current === name ? 'bolt-semibold' : 'bolt-regular',
        fontSize: SIZES.h3,
      }}
    >
      {name}
    </Text>
    {current === name && (
      <View
        style={{
          position: 'absolute',
          width: 20,
          height: 3,
          backgroundColor: COLORS.orange,
          bottom: 0,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
    )}
  </TouchableOpacity>
);

const SideBar = () => {
  const [current, setCurrent] = React.useState('Top Pick');

  return (
    <View style={styles.sideBar}>
      <View
        style={{
          width: '100%',
          height: '15%',
          backgroundColor: COLORS.orange,
          paddingLeft: '30%',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: SIZES.h1, fontFamily: 'bolt-semibold' }}>
          Ngo
        </Text>
        <Text style={{ fontSize: SIZES.h1, fontFamily: 'bolt-semibold' }}>
          Pi
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: COLORS.grey,
          height: '100%',
          alignItems: 'center',
        }}
      >
        {SideBarTabArray.map((item) => (
          <SideBarTab
            key={item.name}
            name={item.name}
            current={current}
            setCurrent={setCurrent}
          />
        ))}

        <View
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: 150,
            borderRadius: 15,
          }}
        >
          <Image
            source={store}
            style={{ width: '100%', height: '100%' }}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
};

const Header = () => (
  <View
    style={{
      width: '100%',
      height: '15%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <Text style={{ fontSize: SIZES.title, fontFamily: 'bolt-semibold' }}>
        Coffee
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 18,
          height: 18,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
        }}
      >
        <Image
          source={search}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          width: 18,
          height: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={filter}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
    </View>
  </View>
);

const MonthlyCoffee = () => (
  <View
    style={{
      width: '100%',
      height: 100,
      backgroundColor: COLORS.grey,
      borderTopRightRadius: 20,
      paddingLeft: 15,
      flexDirection: 'row',
      marginBottom: 8,
    }}
  >
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 10,
        width: '40%',
      }}
    >
      <Text
        style={{
          fontFamily: 'bolt-semibold',
          fontSize: SIZES.h2,
          textAlign: 'left',
        }}
      >
        Monthly Coffee
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: SIZES.h1,
            fontFamily: 'bolt-semibold',
            color: COLORS.lightred,
            marginRight: 5,
          }}
        >
          $12.9
        </Text>
        <Text style={{ fontFamily: 'bolt-regular', fontSize: 10 }}>/month</Text>
      </View>
    </View>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
      }}
    >
      <Image
        source={box}
        style={{ width: (160 * 5) / 6, height: (171 * 5) / 6 }}
      />
    </View>
  </View>
);

const CoffeeItemArray = [
  {
    country: 'Lembark',
    name: 'Pine Blend',
    price: '$5.2',
    imgFore: pocket1,
    imgBack: shapes1,
  },
  {
    country: 'Indonesia',
    name: 'Kapal Air',
    price: '$6.8',
    imgFore: pocket2,
    imgBack: shapes2,
  },
  {
    country: 'Japan',
    name: 'JCO original',
    price: '$5.7',
    imgFore: pocket3,
    imgBack: shapes3,
  },
];

const CoffeItem = ({ country, name, price, imgFore, imgBack }) => (
  <View
    style={{
      marginVertical: 20,
      width: '100%',
      height: 100,
      backgroundColor: COLORS.grey,
      borderTopRightRadius: 20,
    }}
  >
    <Image source={imgBack} style={{ height: '100%', width: '35%' }} />
    <Image
      source={imgFore}
      style={{
        position: 'absolute',
        width: (110 * 4) / 5,
        height: (140 * 4) / 5,
        top: -20,
        left: 20,
      }}
    />
    <View
      style={{
        height: '100%',
        position: 'absolute',
        right: '15%',
        width: 80,
      }}
    >
      <Text
        style={{
          marginVertical: 5,
          fontFamily: 'bolt-regular',
          fontSize: SIZES.h3,
        }}
      >
        {country}
      </Text>
      <Text
        style={{
          marginBottom: 15,
          fontFamily: 'bolt-semibold',
          fontSize: SIZES.h3,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontFamily: 'bolt-semibold',
          color: COLORS.lightred,
          marginRight: 5,
        }}
      >
        {price}
      </Text>
    </View>
    <View
      style={{
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 5,
          right: 10,
        }}
      >
        <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>+</Text>
      </View>
      <Image
        source={triangle}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  </View>
);

const Home = () => (
  <SafeAreaView style={styles.container}>
    <SideBar />
    <View style={styles.contentView}>
      <Header />
      <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
        <MonthlyCoffee />

        {CoffeeItemArray.map((item) => (
          <CoffeItem key={item.country} {...item} />
        ))}
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sideBar: {
    flex: 1,
  },
  contentView: {
    flex: 3,
  },
});

export default Home;
