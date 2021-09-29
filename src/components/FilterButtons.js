import React, {useState, useEffect} from 'react'; 
import { FaFireAlt } from 'react-icons/fa';
import { TiStarburstOutline } from 'react-icons/ti';
import { AiOutlineStock } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go'

import Post from './Post'

import '../styles/components/FilterButtons.css';

export default function FilterButtons(){

    const [post, setPost] = useState([]);
    const [active, setActive] = useState(['active', '', '']);
    const [tab, setTab] = useState('hot')
    const [after, setAfter] = useState(''); 

    async function changeTab(newTab){

        if( newTab === 'hot'){
            setActive(['active', '', ''])
        } else if( newTab === 'new' ){
            setActive(['', 'active', ''])
        }else{
            setActive(['', '', 'active'])
        }

        setTab(newTab)
        setAfter('')
        
        const posts = await getPosts();

        setPost(posts.children);
    }

    async function getPosts(){

        const res = await fetch(`https://www.reddit.com/r/reactjs/${tab}.json?limit=10&after=${after}`)

        if(res.status !== 200) {
            alert("Error");
            return;
        }

        const posts = await res.json()

        setAfter(posts.data.after);

        return posts.data; 
    }

    async function seeMore(){

        const posts = await getPosts();
        setPost(post.concat(posts.children)); 
        
    }
    
    useEffect(() => {
        changeTab(tab)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div>
            <section id="tabs">
                <button title="Hot" target="_blank" onClick={ () => changeTab('hot')} className={active[0]}>
                    <div className="btnIcon">   
                        <FaFireAlt />
                        <h5>Hot</h5>
                    </div>
                </button>
                <button title="News" target="_blank" onClick={ () => changeTab('new')} className={active[1]}>
                    <div className="btnIcon">
                        <TiStarburstOutline />
                        <h5>News</h5>
                    </div>
                </button>
                <button title="Rising" target="_blank" onClick={ () => changeTab('rising')} className={active[2]}>
                    <div className="btnIcon">
                        <AiOutlineStock />
                        <h5>Rising</h5>
                    </div>
                </button>
            </section>

            <section className="post">
                {
                    ( post != null) ? post.map((post, index) => <Post key={index} post={post.data} />) : ''
                }
                
            </section>

            <section className="btnMore">
                <button title="See More" onClick={() => seeMore(tab)}>
                    <div className="btnIcon">
                        <GoPlus />
                        <h5>See More</h5>
                    </div>
                </button>
            </section>

        </div>

    )
}