import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content");

export type Post = {
    slug: string;
    title?: string;
    excerpt?: string;
    date: string;
    category?: string;
    content: string;
    readTime?: string;
    icon?: string;
    color?: string;
    description?: string;
};

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
    try {
        let filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
        if (!fs.existsSync(filePath)) {
            filePath = path.join(CONTENT_PATH, category, `${slug}.md`);
        }
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            content,
            title: data.title,
            excerpt: data.excerpt || data.description,
            date: data.date,
            category: data.category,
            readTime: "1 min read",
            icon: data.icon,
            color: data.color,
            description: data.description,
        };
    } catch (error) {
        return null;
    }
}

export async function getAllPosts(categoryDir: string = "journal"): Promise<Post[]> {
    try {
        const dirPath = path.join(CONTENT_PATH, categoryDir);
        if (!fs.existsSync(dirPath)) {
            return [];
        }
        const files = fs.readdirSync(dirPath);

        const posts = files
            .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
            .map((file) => {
                const slug = file.replace(/\.mdx?$/, "");
                const filePath = path.join(dirPath, file);
                const fileContent = fs.readFileSync(filePath, "utf-8");
                const { data, content } = matter(fileContent);

                return {
                    slug,
                    title: data.title || "",
                    excerpt: data.excerpt || data.description || content.slice(0, 100),
                    date: data.date || new Date().toISOString(),
                    category: data.category || "Thought",
                    content: content,
                    icon: data.icon,
                    color: data.color,
                    description: data.description,
                };
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return posts;
    } catch (e) {
        console.log(e);
        return [];
    }
}
