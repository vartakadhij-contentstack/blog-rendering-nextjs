import {Component} from 'react';
import axios from 'axios';
import BlogTile from '../components/BlogTile';
import styles from '../styles/Blogs.module.css'
import Layout from '../components/Layout';
import Head from 'next/head'

const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json"

class Blogs extends Component{
  state = {
    blogs: this.props.blogs,
  }

  render(){
    return(
      <>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.png" />
      </Head>
      <Layout>
        <div className={styles["body-container"]}>
          <div className={styles["blog-heading"]}>
            <h1>Blogs</h1>
          </div>
          <div className={styles["blog-container"]}>
            {
              this.state.blogs.map((blog)=>{
                return <BlogTile blog={blog} key={blog.id} />
              })
            }
          </div>
        </div>
      </Layout>
      </>
    )
  }
}

export const getStaticProps = async () =>{
  let {data} = await axios.get(url);
  return{
    props:{
      blogs: [...data],
    }
  }
}

export default Blogs;