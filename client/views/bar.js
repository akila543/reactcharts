// import React from 'react';
import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import Request from 'superagent';


// {
//   type: 'bar',
//   label: 'Service Actvitities',
//   data: ['a', 185, 590, 621, 250, 400, 95],
//   fill: false,
//   backgroundColor: '#71B37C',
//   borderColor: '#71B37C',
//   hoverBackgroundColor: '#71B37C',
//   hoverBorderColor: '#71B37C'
// }
export default class Bar1 extends Component{
  constructor(props){
    super(props);
    this.state ={
    linedata:[],
    bardata:[],
    data:{
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
          label: 'Kms in sum',
          type:'line',
          data: [14, 65, 40, 49, 60, 37, 40,40, 49, 60, 37, 40],
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F'
        },

      ]
    }
  }
}
componentWillReceiveProps(){

  console.log("props: ",this.props);
}
  componentDidMount(){
    let barArray=[0,0,0,0,0,0,0,0,0,0,0,0];
    let chartArray=[];
  Request.get('http://localhost:8585/getbikedataforchart')
          .query({name:'RS200'})
         .end((err, res) => {
          if (err) {
            console.log('Error from fetching purchaseOrder data - > ',err);
          } else {
            console.log('res ---- - > ',JSON.parse(res.text), typeof res.text);
            let arr = JSON.parse(res.text);
            console.log("arr ",arr);
            arr[0].data.map((item,key)=>{
              console.log("item ",item);
              if(item.date.toLowerCase().includes("jan")){
                barArray[0] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("feb")){
                barArray[1] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("mar")){
                barArray[2] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("apr")){
                barArray[3] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("may")){
                barArray[4] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("jun")){
                barArray[5] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("jul")){
                barArray[6] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("aug")){
                barArray[7] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("sep")){
                barArray[8] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("oct")){
                barArray[9] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("nov")){
                barArray[10] = item.kms_sum;
              }
              else if(item.date.toLowerCase().includes("dec")){
                barArray[11] = item.kms_sum;
              }
            })
            console.log("barArray: ",barArray);
            let tempState = this.state.data;
            tempState.datasets[0].data=barArray;
            this.setState({data:tempState});

            // this.setState({
            //   bikes:JSON.parse(res.text)
            // });
          }
        });

  }
  render() {
    console.log("state ",this.state.data);
    return (
      <div>
        <h2>Bike Details</h2>
        {/* <Bar
          data={this.state.data}
        /> */}
      </div>
    );
  }
};
