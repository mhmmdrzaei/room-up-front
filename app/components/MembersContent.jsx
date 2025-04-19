import VideoPlayer from "./VideoPlayer"
import './Blocks.scss';
import Image from "next/image";

export default function MembersContent({ posts }) {
    return (
      <div className="container container-blocks">
        {posts.map((post) => (
          <div key={post._id} className="post-each">
            <h3 className="">{post.title}</h3>
            <div className="content-main">
              {post.content?.map((block, i) => {
                if (block._type === 'block') {
                  return <p key={i}>{block.children?.map((child) => child.text).join('')}</p>
                } else if (block._type === 'image') {
                  return (
                    <Image
                      width={900}
                      height={900}
                      key={i}
                      src={block.asset?.url}
                      alt={block.alt || ''}
                      loading="lazy"
                    
                    />
                  )
                } else if (block._type === 'video') {
                  return (
                    <div key={i} className="videoContainer">
                      <VideoPlayer link={block.url} />
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }
  