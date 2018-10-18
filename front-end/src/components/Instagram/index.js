import React, { Component, Fragment } from 'react'
import { connect }                    from 'react-redux'
import {
	loadInstagramPhotos,
	startLoadingInstagram
} from '../../store/actions/instagramActions'

class Instagram extends Component {
	componentDidMount(){
		this.props.startLoadingInstagram()
		this.props.loadInstagramPhotos()
	}
	render () {
		const { loadingInstagram, photos } = this.props
		return (
			<Fragment>
				<div className="row">
					<h5 className="grey-text text-darken-3">
						Instagram
					</h5>
				</div>
				{!loadingInstagram ? (
					photos && photos.map(photo => {
						return (
							<img key={photo.id} src={photo.images.standard_resolution.url} alt="" height="520" width="520" />
						)
					})
				) : (
					<p>Carregando...</p>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		photos : state.instagrams.photos,
		loadingInstagram : state.instagrams.loadingInstagram
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadInstagramPhotos: () => dispatch(loadInstagramPhotos()),
		startLoadingInstagram: () => dispatch(startLoadingInstagram())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Instagram)