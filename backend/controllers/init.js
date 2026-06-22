import fs from "fs/promises";
import path from "path";

export async function initrepo() {
    const repoPath = path.resolve(process.cwd(), "apnaGit"); //combine path into an absolute path
    const commitPath = path.join(repoPath, "commits");
    try {
        await fs.mkdir(repoPath, { recursive: true }); // Allows creation even if parent folders don't exist.
        await fs.mkdir(commitPath, { recursive: true });
        await fs.writeFile(
            path.join(repoPath, "config.json"),
            JSON.stringify({
                bucket: process.env.S3_BUCKET
            })
        );

        console.log("Repository initialized successfully");
    } catch (err) {
        console.error("Error initializing repository:", err);
    }
}