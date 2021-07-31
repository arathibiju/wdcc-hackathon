import { React,  useState } from "react";
import InstagramEmbed from 'react-instagram-embed';


const InstagramPosts = () =>{
    const [links, setLinks] = useState([]);

    return (
        <div className="App">
          <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            clientAccessToken='1185629475279385|5df6f493fe337d3fce5f2bbab1cd5123'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
    />
        </div>
      );

}

export default InstagramPosts;