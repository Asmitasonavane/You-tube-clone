import React from 'react';
import "./SearchPage.css";
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
function SearchPage() {
  return <div className='searchPage'>
    <div className="searchFilter">
      <TuneOutlinedIcon />
      <h2>FILTER</h2>
    </div>
    <hr></hr>
    <ChannelRow
      image="https://www.godrej-ananda.net.in/images/other/how-bangalore-got-its-name.webp"
      Channel="BangaloreDiaries"
      verified
      subs="190M"
      noOfVideos={382}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
    <hr></hr>
    <VideoRow
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"
      Channel="BangaloreDiaries"
      subs="190M"
      title="Sky"
      timestamp="2 Years Ago"
      noOfVideos={323}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
    <VideoRow
      image="https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg"
      Channel="BangaloreDiaries"
      subs="190M"
      title="Waterfall"
      timestamp="1 Years Ago"
      noOfVideos={382}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
    <VideoRow
      image="https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg"
      Channel="BangaloreDiaries"
      subs="190M"
      title="Tajmahal"
      timestamp="3 Years Ago"
      noOfVideos={383}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
    <VideoRow
      image="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png"
      Channel="BangaloreDiaries"
      subs="190M"
      title="Photography"
      timestamp="3 Years Ago"
      noOfVideos={382}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
    <VideoRow
      image="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"
      Channel="BangaloreDiaries"
      subs="190M"
      title="Love"
      timestamp="3 Years Ago"
      noOfVideos={382}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
    />
  </div>;
}

export default SearchPage;
