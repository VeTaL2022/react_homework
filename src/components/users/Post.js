export default function Post({item:post}) {

    return(
        <div className={'Post'}>
            <h2>userId: {post.userId}</h2>
            <h3>id: {post.id}</h3>
            <h4>title: {post.title}</h4>
            <p>body: {post.body}</p>
        </div>
    )

}