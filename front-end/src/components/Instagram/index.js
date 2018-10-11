import React, { Component, Fragment } from 'react'
import Api from '../../api/'

class Instagram extends Component {
	state = {
		photos : ''
	}
	componentDidMount(){
		Api.endpoints.getPhotos().then((res) => {
			this.setState({
				photos : res.data.data
			})
		})
	}
	render () {
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<h5 className="grey-text text-darken-3">
							Instagram
						</h5>
					</div>
					{this.state.photos && this.state.photos.map(photo => {
						return (
							<img key={photo.id} src={photo.images.standard_resolution.url} alt="" />
						)
					})}
				</div>
			</Fragment>
		)
	}
}

export default Instagram