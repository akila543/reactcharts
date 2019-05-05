import React from 'react';
import {Button, Modal , Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Request from 'superagent';
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];
export default class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      bikes : [],
      bikename:''
     }
     this.handlebikeId = this.handlebikeId.bind(this);
  }
  componentDidMount(){
  Request.get('http://localhost:8585/getbikedata')
        .end((err, res) => {
          if (err) {
            console.log('Error from fetching purchaseOrder data - > ',err);
          } else {
            console.log('res from purchaseOrder data - > ',JSON.parse(res.text), typeof res.text);
            this.setState({
              bikes:JSON.parse(res.text)
            });
          }
        });
}
handlebikeId(e,{value}){
  //this.setState({bikeId:value});
  console.log(value);
}
  render()
  {
    console.log("bikes",this.state.bikes);
    var BikeId = [];
    this.state.bikes.map((item, i)=>{
      if (BikeId.findIndex(x => x.value===item)==-1) {
        BikeId.push({key:i,value:item.name,text:item.name})
      } else {
        console.log('already present in arr');
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
    </Form>
    </Grid.Column>
    <Grid.Column width={12}/>
     </Grid.Row>
    </Grid>
  </div>
    );
  }
}
