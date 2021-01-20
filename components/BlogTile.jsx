import styles from '../styles/BlogTile.module.css';
import Link from 'next/link';

function BlogTile (props) {
    let {blog} = props;
    return(
        <div className={styles["tile-container"]}>
            <div className={styles["image-container"]}>
                <img
                    src={blog.imageUrl}
                    alt={`Blog Banner Image`}
                    className={styles["blog-banner-image"]}
                >
                </img>
            </div>
            <div className={styles["blog-title"]}>
                <Link href={`/blog/${blog.id}`}>
                    <a>
                        <span>{blog.title}</span>
                    </a>
                </Link>
            </div>    
        </div>
    )
}

export default BlogTile;