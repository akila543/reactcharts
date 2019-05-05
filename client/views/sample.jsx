import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';
import Request from 'superagent';

const square = { width: 185, height: 185 }

export default class InventoryView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableData : [],
      SOs : [],
      currentSO: {},
      reveal : [],
      kIndex : 0,
      soId : '',
      ruleTable1:'',
      ruleTable2:'',
      ruleTable3:'',
      serviceOrder:[],
      costTable:'',
      modalOpen:false,
      ratingTable:'',
     }
     this.handleReveal = this.handleReveal.bind(this);
     this.handleSoId = this.handleSoId.bind(this);

  }
  componentDidMount(){
    Request.get('http://localhost:4004/serviceOrderDetails')
          .end((err, res) => {
            if (err) {
              console.log('Error from fetching purchaseOrder data - > ',err);
            } else {
              console.log('res from purchaseOrder data - > ',JSON.parse(res.text), typeof res.text);
              this.setState({
                SOs:JSON.parse(res.text)
              });
            }
          });
  }
  handleSoId(e,{value}){
    this.setState({soId:value});

  }
  handleReveal(){
    var SoArrIndex = this.state.SOs.findIndex(x => x.so_id == this.state.soId);
    // console.log('i -> ', SoArrIndex);
    var serviceCategory = this.state.SOs[SoArrIndex].service_category_name;
    Request
    .get('http://localhost:4004/vendorDetails')
    .query({serviceCategory:serviceCategory})
    .end((err, res) => {
      if (err) {
        console.log('err  from vendor_details in ui- > ', err);
      } else {
      this.setState({tableData:JSON.parse(res.text), currentSO: this.state.SOs[SoArrIndex]});
      }
    });
  }
  render(){
    var SoId = [];
    this.state.SOs.map((item, i)=>{
      if (SoId.findIndex(x => x.value===item)==-1) {
        SoId.push({key:i,value:item.so_id,text:item.so_id + " - " + item.service_category_name})
      } else {
        console.log('already present in arr');
      }
    });
    return(
      <div>
        <Grid centered columns={2}>
    <Grid.Column>
      <Image src='./images/logo.png'/>
    </Grid.Column>
  </Grid>
      <Divider style={{backgroundColor:'red'}}></Divider>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Grid container>
              <Grid.Row centered columns={2}>
                <Grid.Column>
                  <Button.Group>
                    <Button>Service Order ID</Button>
                      <Dropdown placeholder='XXXX' selection button options={SoId} onChange={this.handleSoId} />
                  </Button.Group>
                </Grid.Column>
            </div>
    );
  }
}
