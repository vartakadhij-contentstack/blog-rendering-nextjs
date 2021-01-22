import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css'
import Head from 'next/head'

const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json"

function Blog (props) {
    let {blog} = props;

    return(
        <>
        <Head>
            <title>Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="img/png" href="/favicon.png" />
        </Head>
        <Layout>
            <div className={styles["blog-container"]}>
                <div className={styles["blog-details"]}>
                    <div className={styles["blog-title"]}>
                        <p>{blog.title}</p>
                    </div>
                    <div className={styles["image-container"]}>
                        <img 
                            src={`${blog.imageUrl}`}
                            alt={`Blog Banner Image`}
                            className={styles["blog-banner-image"]}
                        >
                        </img>
                    </div>
                    <div className={styles["blog-content"]}>
                        <p>
                            {blog.content}
                        </p>
                    </div>
                </div>
                <div className={styles["aside-section"]}>
                    <div className={styles["aside-heading"]}>
                        <p>Related Links:</p>
                    </div>
                    <div className={styles["blog-related-links"]}>
                        {
                            blog.links.map((link, i)=>{
                                return(
                                    <div key={i}>
                                        <Link href={`/blog/${link.id}`}>
                                            <a>
                                                <p key={link.id}> {link.title} </p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>  
        </Layout>
        </>
    )
}

export const getStaticProps = async (context) =>{
    let {data} = await axios.get(url);
    let singleBlog = data.filter((blog)=>{
        return blog.id === context.params.id;
    })
    return{
        props:{
            blog: {...singleBlog[0]}
        }
    }
}

export const getStaticPaths = async () =>{
    let {data} = await axios.get(url);
    let paths = data.map((blog)=>{
        return{
            params:{
                id: `${blog.id}`
            }
        }
    })

    return{
        paths,
        fallback: true,
    }
}

export default Blog;