import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content");

export type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string;
    readTime?: string;
};

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            content,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            category: data.category,
            readTime: "5 min read", // Placeholder, can calculate real time later
        };
    } catch (error) {
        return null;
    }
}

export async function getAllPosts(categoryDir: string = "journal"): Promise<Post[]> {
    try {
        const dirPath = path.join(CONTENT_PATH, categoryDir);
        const files = fs.readdirSync(dirPath);

        const posts = files
            .filter((file) => file.endsWith(".mdx"))
            .map((file) => {
                const slug = file.replace(".mdx", "");
                const filePath = path.join(dirPath, file);
                const fileContent = fs.readFileSync(filePath, "utf-8");
                const { data } = matter(fileContent);

                return {
                    slug,
                    title: data.title,
                    excerpt: data.excerpt,
                    date: data.date,
                    category: data.category,
                    content: "", // We don't need content for listing
                };
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return posts;
    } catch (e) {
        console.log(e);
        return [];
    }
}
