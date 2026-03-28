import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.brainrawt.my';

/**
 * ----------------------------------------------------------------------
 * Helper Functions (Data Fetching Layer)
 * ----------------------------------------------------------------------
 * Replace these placeholder implementations with your actual DB queries
 * e.g., using Prisma: await prisma.post.findMany({ select: { slug: true, updatedAt: true } })
 */
async function getAllBlogPosts(): Promise<Array<{ slug: string; updatedAt?: string | Date }>> {
  return [];
}

async function getAllSkills(): Promise<Array<{ slug: string; updatedAt?: string | Date }>> {
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Parallel fetching for performance/scalability
  const [blogPosts, skills] = await Promise.all([
    getAllBlogPosts(),
    getAllSkills()
  ]);

  const defaultDate = new Date();

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: defaultDate,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: defaultDate,
    }
  ];

  // 2. Dynamic Blog Routes
  const dynamicBlogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : defaultDate,
  }));

  // 3. Dynamic Skill Routes
  const dynamicSkillRoutes: MetadataRoute.Sitemap = skills.map((skill) => ({
    url: `${BASE_URL}/skill/${skill.slug}`,
    lastModified: skill.updatedAt ? new Date(skill.updatedAt) : defaultDate,
  }));

  // Combine and return all routes (Next.js automatically handles large arrays)
  return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicSkillRoutes];
}
