import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import ButtonSwipe from './components/Button';
import useVideos from './hooks/useVideos';
import { Scrollbars } from 'react-custom-scrollbars';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('god of war');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>
					<div style={{ height: '900px' }} className='five wide column'>
						<ButtonSwipe />
						<Scrollbars>
							<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
						</Scrollbars>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
