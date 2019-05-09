import React from 'react';
import {Button, Modal , Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import {Bar} from 'react-chartjs-2';

export default class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      bikes : [],
      bikename:'',
      yearArr:[],
      selectedBikeDetails:[],
      selectedYear:0,
      kms_in_sum_data:[],
      linedata:[],
      bardata:[],
      service_activities:[],
      data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Kms in sum',
            type:'line',
            data: [],
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
     this.handlebikeId = this.handlebikeId.bind(this);
     this.handleYear = this.handleYear.bind(this);
  }
  componentDidMount(){
  Request.get('http://localhost:8585/getbikedata')
        .end((err, res) => {
          if (err) {
            console.log('Error from fetching bike data - > ',err);
          } else {
            console.log('res from bike data - > ',JSON.parse(res.text), typeof res.text);
            this.setState({
              bikes:JSON.parse(res.text)
            });
          }
        });
}
handlebikeId(e,{value}){
  //this.setState({bikeId:value});
  console.log(value);
  console.log("bikes ",this.state.bikes);
  let selectedBikeName = value;
  let bikes = this.state.bikes;
  let yeararr = [];
  bikes.map((item,key)=>{
    if(item.name = selectedBikeName){
      console.log("item ", item.data);
      this.setState({selectedBikeDetails:item.data},()=>{
        item.data.map((item1,key1)=>{
            yeararr.push({key:item1.year,value:item1.year,text:item1.year})
        })
      });

    }
  })
  this.setState({yearArr:yeararr});

}
handleYear(e,{value}){
 console.log("selected year: ",value);
  console.log("selected bike details: ",this.state.selectedBikeDetails);

  let selectedYear = value;
  let selectedBikeDetails = this.state.selectedBikeDetails;
  selectedBikeDetails.map((item,key)=>{
    if(item.year == selectedYear){
      console.log("kms in sum ",item.kms_sum);
      this.setState({kms_in_sum_data:item.kms_sum},()=>{
        this.barChartLogic(this.state.kms_in_sum_data)

      })
    }
  })
}
barChartLogic(data){
  let barArray=[0,0,0,0,0,0,0,0,0,0,0,0];
  let chartArray=[];

          let arr = data;
          console.log("arr ",arr);
          arr.map((item,key)=>{
            if(item.month.toLowerCase().includes("jan")){
              barArray[0] = item.value;
            }
            else if(item.month.toLowerCase().includes("feb")){
              barArray[1] = item.value;
            }
            else if(item.month.toLowerCase().includes("mar")){
              barArray[2] = item.value;
            }
            else if(item.month.toLowerCase().includes("apr")){
              barArray[3] = item.value;
            }
            else if(item.month.toLowerCase().includes("may")){
              barArray[4] = item.value;
            }
            else if(item.month.toLowerCase().includes("jun")){
              barArray[5] = item.value;
            }
            else if(item.month.toLowerCase().includes("jul")){
              barArray[6] = item.value;
            }
            else if(item.month.toLowerCase().includes("aug")){
              barArray[7] = item.value;
            }
            else if(item.month.toLowerCase().includes("sep")){
              barArray[8] = item.value;
            }
            else if(item.month.toLowerCase().includes("oct")){
              barArray[9] = item.value;
            }
            else if(item.month.toLowerCase().includes("nov")){
              barArray[10] = item.value;
            }
            else if(item.month.toLowerCase().includes("dec")){
              barArray[11] = item.value;
            }
          })
          console.log("barArray: ",barArray);
          let tempState = this.state.data;
          console.log("tempstate");
          tempState.datasets[0].data=barArray;
          this.setState({data:tempState});


}

  render()
  {



    console.log("bikes",this.state.data);
    var BikeId = [];
    var yeararr=[];
    this.state.bikes.map((item, i)=>{
      if (BikeId.findIndex(x => x.value===item)==-1) {
        // console.log(item.data[0].year,"------->");
        BikeId.push({key:i,value:item.name,text:item.name})
        item.data.map((item1,i1)=>{
          if (yeararr.findIndex(x => x.value===item1)==-1){
        //  console.log(item1.year,"--------------->item1");
            yeararr.push({key:i1,value:item1.year,text:item1.year})
          }else{
            // console.log("already present");
          }
        })
      } else {
        // console.log('already present in arr');
      }
    });
    return(
    <div style={{backgroundColor:'#D3D3D3',height:window.innerHeight,width:window.innerWidth}}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <h1>Visualize the data </h1>
        </Grid.Column>
    </Grid.Row>
     <Grid.Row>
     <Grid.Column width={12}>

     <Form>
    <Form.Field >
     <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Select the bike</label>
    <Form.Input style={{border:'1px solid #aa2525'}} placeholder='Select' control={Select} options={BikeId} onChange={this.handlebikeId} width={4} />
   </Form.Field>
   <Form.Field >
    <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Select the year</label>
   <Form.Input style={{border:'1px solid #aa2525'}} placeholder='Select' control={Select} options={this.state.yearArr} onChange={this.handleYear} width={4} />
  </Form.Field>

    </Form>
    </Grid.Column>
    <Grid.Column width={12}/>
     </Grid.Row>
     <Grid.Row>
     <Grid.Column width={4}/>
     <Grid.Column width={8}>
      <Bar
       data={this.state.data}
     />
     </Grid.Column>
     <Grid.Column width={4}/>
     </Grid.Row>
    </Grid>
  </div>
    );
  }
}
