import React from 'react';
import { Grid, Icon, Header, Image, Dropdown, Radio, Button, Form, Input, TextArea, Select, Modal  } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import request from 'superagent';
const URL = require('../dev.js').URL;

const accountOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' } ];
const eventOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' } ];
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]


export default class CustomerInformation extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      first_name:'',
      email:'',
      modalOpen: false
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.handleClose= this.handleClose.bind(this);
  }
  handleFirstNameChange(e){
    this.setState({first_name:e.target.value});
  }
  handleEmailChange(e){
    this.setState({email:e.target.value});
  }
  handlePhoneChange(e){
    this.setState({phone_number:e.target.value});
  }
  handleClose(){
    this.setState({modalOpen:false})
  }
  handleSubmit(){
    // this.setState({modalOpen:true})
      // console.log("response from handleSubmit before sending mail=========> ",resp);
        var items = ["https://s3.ap-south-1.amazonaws.com/twilio543/Camel.JPG",
        "https://s3.ap-south-1.amazonaws.com/twilio543/MarlboroEdited.JPG",
        "https://s3.ap-south-1.amazonaws.com/twilio543/NewportEdited.JPG",
        "https://s3.ap-south-1.amazonaws.com/twilio543/PyramidEdited.JPG"];
         var file=items[Math.floor(Math.random()*items.length)];
        console.log(file,"items====>");
       this.sendMail(file);
       this.sendSms(file);


  }



  sendMail(dir){
    console.log("dir!!!! ",dir);
    const req = request.post(URL+'/sendMail');
    req.send({name:this.state.first_name, email: this.state.email, phoneNo:this.state.phone_number,file_dir:dir });
    req.then(resp => {
      console.log("resp ",resp);
      if(resp.text == "Success"){
        console.log("After submit");
         // req.post(URL+'/sendSms');
         // req.then(response => {
         //   console.log(resp.text,"===========Final response");
         // })
       }
    });
  }
  sendSms(filename){
    console.log("dir!!!! before sending sms ",filename);
    const req = request.post(URL+'/sendSms');
    req.send({file_dir:filename });
    req.then(resp => {
      console.log("response from sendSms function ",resp);

    });
  }
    render()
    {
      return(
        <Grid style={{paddingTop:'10%'}}>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <Header as='h2' style={{letterSpacing:'1px'}}>CUSTOMER INFORMATION</Header>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <Form>
                <Form.Group>
                  <Form.Input label='First name' onChange={this.handleFirstNameChange} value={this.state.first_name} required placeholder='First Name' width={6} />
                  <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
                  <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Prefered name' placeholder='Prefered Name' width={6} />
                  <Form.Field label='Date Of Birth' control='input' type='date' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Street Address' placeholder='Street Address' width={12} />
                  <Form.Input label='APT/SUITE #' placeholder='APT/SUITE #' width={4} />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='ZIP' placeholder='ZIP'  control='input' type='number' width={3} />
                  <Form.Input label='City' placeholder='City' width={5} />
                  <Form.Input label='State' placeholder='State' control={Select} options={accountOptions} width={4} />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Gender' placeholder='Gender' control={Select} options={genderOptions} width={4} />
                  <Form.Field label='ID Expiration' control='input' type='date' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Email Address' onChange={this.handleEmailChange} value={this.state.email} required placeholder='Email Address' control='input' type='email' width={4} />
                  <Form.Input label='Phone Number' onChange={this.handlePhoneChange} value={this.state.phone_number} required placeholder='Phone Number' control='input' type='number' width={4} />
                </Form.Group>
                <Form.Field style={{textAlign:'right'}}>
                  <Modal
                       trigger={<Button primary onClick={this.handleSubmit}>Submit</Button>}
                       open={this.state.modalOpen}
                       onClose={this.handleClose}
                       basic
                       size='small'
                     >
                       <Modal.Actions>
                         <Button color='green' onClick={this.handleClose} inverted>
                           <Icon name='checkmark' /> Coupon sent Your Mail
                         </Button>
                       </Modal.Actions>
                     </Modal>
              </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
        </Grid>
      );
    }
  }
