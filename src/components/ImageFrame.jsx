import React, { Component } from 'react'
import { GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

export default class ImageFrame extends Component {
  render() {
    return (
      <GridTile
        key={this.props.data.src}
        title={this.props.data.title}
        subtitle={<span><b>{this.props.data.author}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
        <img src={this.props.data.src} />
      </GridTile>
    )
  }
}
