import React, { Component } from 'react';
import { View,Text,ImageBackground,Dimensions,StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import PureChart from 'react-native-pure-chart';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'

const { width, height } = Dimensions.get('window');


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['ID', 'Tanggal & Waktu', 'Lulus?', 'Nilal', 'Waktu habis'],
          tableData: [
            ['1', '2016-10-14 02:36:41', 'NO', '4', '21:57'],
            ['2', '2016-10-14 04:21:37', 'NO', '25', '44:00'],
            ['3', '2016-10-14 04:55:52', 'NO', '41', '33:12'],
            ['4', '2016-10-14 04:02:41', 'YES', '83', '05:16']
          ]
        }
    }

    render(){
        let sampleData = [
            {x: '1', y: 0},
            {x: '2', y: 25},
            {x: '3', y: 42},
            {x: '4', y: 92},
        ]
        const data = [ 0, 25, 42, 95 ]

        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ 'white' }
                    fill={ 'rgb(134, 178, 197)' }
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ 'rgb(134, 178, 197)' }
                fill={ 'none' }
            />
        )


        return (
            <ImageBackground
                style={{width:width,height:height}}
                source={require('./background.png')}
                resizeMode={'cover'}
                blurRadius={5}
                >
                <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
                    <View style={{backgroundColor:'#434445',width:width-28,height:200,borderRadius:3}}>
                        <View style={{height:40,justifyContent:'center'}}>
                            <Text style={styles.TitleTextStyle}>Statistik Ujian Paket 1</Text>
                        </View>
                        <View style={{backgroundColor:'#202122',width:width-28,height:1}}>
                        </View>
                        <View style={{flex:1,justifyContent:'center',marginLeft:8, marginRight:8}}>
                            <AreaChart
                                style={{ height: 100 }}
                                data={ data }
                                svg={{ fill: 'rgba(134, 178, 197, 0.2)' }}
                            >
                                <Grid/>
                                <Line/>
                                <Decorator/>
                            </AreaChart>
                            <XAxis
                                style={{ marginHorizontal: -10 }}
                                data={ data }
                                formatLabel={ (value, index) => index }
                                contentInset={{ left: 10, right: 10 }}
                                svg={{ fontSize: 10, fill: '#F9C947' }}
                            />
                            
                        </View>
                    </View>
                    <View style={{backgroundColor:'#434445',width:width-28,height:270,marginTop:15,borderRadius:3}}>
                        <View style={{height:40,justifyContent:'center'}}>
                            <Text style={styles.TitleTextStyle}>Rincian Stastitikmu</Text>
                        </View>
                        <View style={{backgroundColor:'#202122',width:width-28,height:1}}>
                        </View>
                        <View style={{flex:1,justifyContent:'center',marginLeft:8, marginRight:8}}>
                            <Table borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.textRow}/>
                                <Rows data={this.state.tableData}  textStyle={styles.textRows}/>
                            </Table>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40 },
    textRow: { margin: 6, color:'#F9C947', fontWeight:'500', fontSize:10, justifyContent:'center', textAlign: 'center' },
    textRows: { margin: 6, color:'#F9C947', fontWeight:'400', fontSize:9, justifyContent:'center', textAlign: 'center' },
    TitleTextStyle:{color:'white',marginLeft:8, fontWeight:'500', fontSize:17}
  });

 export default Detail;