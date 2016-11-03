import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader'
import ImageFrame from 'components/ImageFrame'
import VideoFrame from 'components/VideoFrame'
import { GridList } from 'material-ui/GridList'

export default class MiddleContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}>
          <Subheader>December</Subheader>
          {
            this.props.dataSource.map((tile) => {
              if(this.props.type === 'video') {
                return <VideoFrame key={tile.src} data={tile} />
              } else {
                return <ImageFrame key={tile.src} data={tile} />
              }
            })
          }
        </GridList>
      </div>
    )
  }
}

MiddleContainer.defaultProps = {
  dataSource: [
    {
      src: 'images/1.jpg',
      title: 'Breakfast',
      author: 'tests'
    },
    {
      src: 'images/2.jpg',
      title: 'lauch',
      author: 'hhhhhhh'
    },
    {
      src: 'images/3.jpg',
      title: 'dinner',
      author: 'hhhhhhh'
    }
  ],
  type: 'image'
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
}
