import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import { GridTile } from 'material-ui/GridList'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

export default class VideoFrame extends Component {
  render() {
    return (
      <GridTile
        key={this.props.data.src}
        title={this.props.data.title}
        subtitle={<span><b>{this.props.data.author}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
        <video src={this.props.data.src} />
      </GridTile>
    )
  }
}
