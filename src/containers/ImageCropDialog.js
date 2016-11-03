import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaiseButton';
/**
 *在图片上选取目标的dialog
 *
 */

export default class ImageCropDialog extends React.Component{
  state = {open: false,};

  handleOpen = ()=>{
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({open:false});
  };
  render() {
    const actions =[
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="确定目标"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ]
    reture (
      <Dialog
        title = '选取目标'
        actions={actions}
        modal={true}
        open={this.state.open}
        >
      </Dialog>
    )
  }
}
