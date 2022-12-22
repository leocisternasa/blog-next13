import fs from "fs";
import { get } from "http";

const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file)=> file.endsWith(".md"));
    const slugs = markdownPosts.map((file)=> file.replace(".md", ""));
    return slugs;
};



const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((slug)=>(
        <div>
            <h2>{slug}</h2>
        </div>
    ))
    return <h1>{postPreviews}</h1>
}

export default HomePage